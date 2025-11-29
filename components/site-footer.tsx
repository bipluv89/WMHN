import Link from 'next/link';
import { Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

const quickLinks = [
  { name: 'About', href: '/clinic/about' },
  { name: 'Our Doctors', href: '/clinic/doctors' },
  { name: 'Services', href: '/services/conditions' },
  { name: 'Research', href: '/research' },
  { name: 'Referrals', href: '/referrals' },
  { name: 'Contact', href: '/contact' },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#7A1F3D]">
              {siteConfig.name}
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              {siteConfig.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.facebook}
                className="text-gray-600 hover:text-[#7A1F3D]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                className="text-gray-600 hover:text-[#7A1F3D]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#7A1F3D]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{siteConfig.contact.address.full}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#7A1F3D]"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Office Hours</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>{siteConfig.contact.hours.weekdays}</li>
              <li>{siteConfig.contact.hours.weekend}</li>
              <li className="text-xs">{siteConfig.contact.hours.publicHolidays}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
