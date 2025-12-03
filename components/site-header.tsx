'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Clinic',
    href: '/clinic',
    children: [
      { name: 'About Us', href: '/clinic/about' },
      { name: 'Our Doctors', href: '/clinic/doctors' },
      { name: 'Fees & Billing', href: '/clinic/fees-billing' },
      { name: 'Parking & Transport', href: '/clinic/parking-transport' },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Conditions We Treat', href: '/services/conditions' },
      { name: 'Procedures', href: '/services/procedures' },
      { name: 'Patient Resources', href: '/services/patient-resources' },
    ],
  },
  { name: 'Research', href: '/research' },
  { name: 'Referrals', href: '/referrals' },
  { name: 'Contact Us', href: '/contact' },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-white transition-shadow duration-300',
        scrolled && 'shadow-md'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#7A1F3D] lg:text-2xl">
              {siteConfig.shortName}
            </span>
            <span className="hidden text-xs text-gray-600 sm:block lg:text-sm">
              West Melbourne Haematology Network
            </span>
          </div>
        </Link>

        <nav className="hidden items-center space-x-1 lg:flex">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.name} className="group relative">
                <button className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-[#7A1F3D]">
                  <span>{item.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible absolute left-0 top-full mt-1 w-56 rounded-md border bg-white py-2 shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        'block px-4 py-2 text-sm transition-colors hover:bg-gray-50',
                        pathname === child.href
                          ? 'text-[#7A1F3D] font-medium'
                          : 'text-gray-700'
                      )}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors hover:text-[#7A1F3D]',
                  pathname === item.href
                    ? 'text-[#7A1F3D]'
                    : 'text-gray-700'
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center space-x-4 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link href="/admin/doctors">Admin</Link>
          </Button>
          <Button asChild className="bg-[#7A1F3D] hover:bg-[#5A1730]">
            <Link href="/referrals">Request an Appointment</Link>
          </Button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t bg-white lg:hidden">
          <nav className="container mx-auto space-y-1 px-4 py-4">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-900">
                    {item.name}
                  </div>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        'block px-6 py-2 text-sm transition-colors hover:bg-gray-50',
                        pathname === child.href
                          ? 'text-[#7A1F3D] font-medium'
                          : 'text-gray-700'
                      )}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50',
                    pathname === item.href
                      ? 'text-[#7A1F3D]'
                      : 'text-gray-700'
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4">
              <Button asChild className="w-full bg-[#7A1F3D] hover:bg-[#5A1730]">
                <Link href="/referrals">Request an Appointment</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
