import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { DoctorForm } from '@/components/doctor-form';

export const dynamic = 'force-dynamic';

export default function NewDoctorPage() {
  return (
    <>
      <PageHeader
        title="Add New Doctor"
        description="Create a new doctor profile"
      />
      <Section>
        <DoctorForm />
      </Section>
    </>
  );
}
