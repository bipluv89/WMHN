import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { DoctorCard } from '@/components/doctor-card';
import { doctors } from '@/lib/doctors-data';

export const metadata: Metadata = {
  title: 'Our Doctors',
  description: 'Meet our experienced team of consultant haematologists specializing in blood disorders.',
};

export default function DoctorsPage() {
  return (
    <>
      <PageHeader
        title="Our Doctors"
        description="Meet our experienced team of consultant haematologists, each bringing specialized expertise in different areas of blood disorders."
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.slug}
              name={doctor.name}
              title={`${doctor.title}, ${doctor.postNominals}`}
              slug={doctor.slug}
              interests={doctor.interests}
              snippet={doctor.snippet}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
