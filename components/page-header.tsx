import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn('border-b bg-gray-50 py-12', className)}>
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="mb-3 text-4xl font-bold text-[#1F2937] lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-3xl text-lg text-gray-600">{description}</p>
        )}
      </div>
    </div>
  );
}
