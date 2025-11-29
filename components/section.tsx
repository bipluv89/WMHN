import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({ children, className, containerClassName }: SectionProps) {
  return (
    <section className={cn('py-16 lg:py-24', className)}>
      <div className={cn('container mx-auto px-4 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
