import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface DoctorCardProps {
  name: string;
  title: string;
  slug: string;
  interests: string[];
  snippet: string;
}

export function DoctorCard({ name, title, slug, interests, snippet }: DoctorCardProps) {
  return (
    <Card className="flex h-full flex-col transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-[#7A1F3D]">{name}</CardTitle>
        <p className="text-sm font-medium text-gray-600">{title}</p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <div className="mb-4 flex flex-wrap gap-2">
          {interests.slice(0, 3).map((interest) => (
            <Badge key={interest} variant="secondary" className="text-xs">
              {interest}
            </Badge>
          ))}
        </div>
        <p className="mb-4 flex-1 text-sm text-gray-600">{snippet}</p>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/clinic/doctors/${slug}`}>View Profile</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
