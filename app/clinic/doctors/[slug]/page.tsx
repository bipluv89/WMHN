import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { doctors } from '@/lib/doctors-data';

export async function generateStaticParams() {
  return doctors.map((doctor) => ({
    slug: doctor.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const doctor = doctors.find((d) => d.slug === params.slug);

  if (!doctor) {
    return {
      title: 'Doctor Not Found',
    };
  }

  return {
    title: doctor.name,
    description: doctor.snippet,
  };
}

export default function DoctorDetailPage({ params }: { params: { slug: string } }) {
  const doctor = doctors.find((d) => d.slug === params.slug);

  if (!doctor) {
    notFound();
  }

  return (
    <>
      <PageHeader title={doctor.name} description={doctor.role} />

      <Section>
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/clinic/doctors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Doctors
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="mb-2 flex flex-wrap gap-2">
                  {doctor.interests.map((interest) => (
                    <Badge key={interest} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-2xl">{doctor.title}, {doctor.postNominals}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {doctor.bio.map((paragraph, index) => (
                  <p key={index} className="text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Qualifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  {doctor.qualifications.map((qual, index) => (
                    <li key={index}>• {qual}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Clinical Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  {doctor.interests.map((interest, index) => (
                    <li key={index}>• {interest}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#7A1F3D]/5">
              <CardHeader>
                <CardTitle>Request an Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-gray-600">
                  To see {doctor.name.split(' ')[1]}, please ask your GP for a referral.
                </p>
                <Button asChild className="w-full">
                  <Link href="/referrals">Referral Information</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
