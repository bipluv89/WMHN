'use client';

import { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { DoctorForm } from '@/components/doctor-form';
import { AuthGuard } from '@/components/auth-guard';
import { supabase, type Doctor } from '@/lib/supabase';

function EditDoctorContent() {
  const params = useParams();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDoctor() {
      const { data, error } = await supabase
        .from('doctors')
        .select('*')
        .eq('id', params.id as string)
        .maybeSingle();

      if (error || !data) {
        notFound();
      } else {
        setDoctor(data);
      }
      setLoading(false);
    }

    loadDoctor();
  }, [params.id]);

  if (loading) {
    return (
      <>
        <PageHeader title="Edit Doctor" description="Loading..." />
        <Section>
          <div className="text-center text-gray-500">Loading doctor information...</div>
        </Section>
      </>
    );
  }

  if (!doctor) {
    return null;
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

export default function EditDoctorPage() {
  return (
    <AuthGuard>
      <EditDoctorContent />
    </AuthGuard>
  );
}
