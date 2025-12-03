import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { DoctorForm } from '@/components/doctor-form';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export default async function EditDoctorPage({ params }: { params: { id: string } }) {
  const { data: doctor, error } = await supabase
    .from('doctors')
    .select('*')
    .eq('id', params.id)
    .maybeSingle();

  if (error || !doctor) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title="Edit Doctor"
        description={`Update profile for ${doctor.name}`}
      />
      <Section>
        <DoctorForm doctor={doctor} />
      </Section>
    </>
  );
}
