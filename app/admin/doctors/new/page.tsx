'use client';

import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { DoctorForm } from '@/components/doctor-form';
import { AuthGuard } from '@/components/auth-guard';

export default function NewDoctorPage() {
  return (
    <AuthGuard>
      <PageHeader
        title="Add New Doctor"
        description="Create a new doctor profile"
      />
      <Section>
        <DoctorForm />
      </Section>
    </AuthGuard>
  );
}
