import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Microscope, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about West Melbourne Haematology Network, our team, and our commitment to providing expert care for blood disorders.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Expert haematology care for Melbourne's western communities"
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Who We Are
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              West Melbourne Haematology Network is a group of experienced consultant haematologists
              dedicated to providing comprehensive care for blood disorders in Melbourne's western
              communities. Established to address the growing need for specialist haematology services
              in the west, we bring together expertise across all areas of benign and malignant
              haematology.
            </p>
            <p className="mb-6 text-lg text-gray-600">
              Our team works closely with local hospitals, GPs, and other specialists to ensure
              coordinated, patient-centred care. We believe in the importance of clear communication,
              compassionate support, and evidence-based treatment approaches that respect each
              patient's individual needs and values.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Our Areas of Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We provide comprehensive care across the full spectrum of haematological conditions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Malignant Haematology</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Acute and chronic leukaemias</li>
                <li>• Hodgkin and non-Hodgkin lymphoma</li>
                <li>• Multiple myeloma and related disorders</li>
                <li>• Myelodysplastic syndromes</li>
                <li>• Myeloproliferative neoplasms</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Benign Haematology</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Anaemia (all types)</li>
                <li>• Iron deficiency and iron overload</li>
                <li>• Vitamin B12 and folate deficiency</li>
                <li>• Haemolytic anaemias</li>
                <li>• Bone marrow failure syndromes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Haemostasis & Thrombosis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Bleeding disorders</li>
                <li>• Thrombophilia and clotting disorders</li>
                <li>• Anticoagulation management</li>
                <li>• Platelet disorders</li>
                <li>• Complex coagulation cases</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Our Approach to Care
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#7A1F3D] pl-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Comprehensive Diagnostic Workup
              </h3>
              <p className="text-gray-600">
                We use the latest diagnostic techniques and work with leading pathology services
                to ensure accurate diagnosis. Our doctors have extensive experience interpreting
                complex blood tests and bone marrow examinations.
              </p>
            </div>

            <div className="border-l-4 border-[#7A1F3D] pl-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Evidence-Based Treatment
              </h3>
              <p className="text-gray-600">
                Our treatment recommendations are based on the latest clinical evidence and
                guidelines. Where appropriate, we can facilitate access to clinical trials,
                giving our patients access to innovative new therapies.
              </p>
            </div>

            <div className="border-l-4 border-[#7A1F3D] pl-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Collaborative Care
              </h3>
              <p className="text-gray-600">
                We work closely with your GP, oncologists, surgeons, and other specialists to
                coordinate your care. We maintain regular communication with referring doctors
                and provide comprehensive reports after each consultation.
              </p>
            </div>

            <div className="border-l-4 border-[#7A1F3D] pl-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Long-Term Follow-Up
              </h3>
              <p className="text-gray-600">
                Many haematological conditions require ongoing monitoring. We provide long-term
                follow-up care, monitoring for disease progression or recurrence, and managing
                treatment side effects.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#7A1F3D]/5">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Our Values
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7A1F3D]">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Compassion</h3>
            <p className="text-gray-600">
              We understand that facing a blood disorder can be frightening. We provide
              compassionate, supportive care with respect for each patient's unique situation.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7A1F3D]">
                <Microscope className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Excellence</h3>
            <p className="text-gray-600">
              We are committed to excellence in clinical care, staying current with the latest
              advances in haematology to provide the best possible outcomes.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7A1F3D]">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">Communication</h3>
            <p className="text-gray-600">
              We believe in clear, honest communication. We take time to explain diagnoses and
              treatment options, ensuring patients and families can make informed decisions.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Meet Our Team
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Our team of experienced consultant haematologists brings together expertise across
            all areas of blood disorders. Each doctor has undergone extensive specialist training
            and maintains active involvement in continuing education and research.
          </p>
          <Button asChild size="lg">
            <Link href="/clinic/doctors">
              Our Doctors
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
