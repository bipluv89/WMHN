import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DoctorCard } from '@/components/doctor-card';
import { Section } from '@/components/section';
import { ArrowRight, Droplet, Activity, Syringe, Microscope, FileText, Users } from 'lucide-react';
import { doctors } from '@/lib/doctors-data';
import { siteConfig } from '@/lib/siteConfig';

const conditions = [
  {
    icon: Droplet,
    title: 'Anaemia & Iron Deficiency',
    description: 'Comprehensive assessment and treatment of all types of anaemia, including iron deficiency, vitamin deficiencies, and complex cases.',
  },
  {
    icon: Activity,
    title: 'Clotting & Bleeding Disorders',
    description: 'Expert management of thrombophilia, bleeding disorders, anticoagulation, and complex haemostasis issues.',
  },
  {
    icon: Microscope,
    title: 'Leukaemia & Lymphoma',
    description: 'Specialist care for blood cancers including acute and chronic leukaemias, Hodgkin and non-Hodgkin lymphoma.',
  },
  {
    icon: Activity,
    title: 'Myeloma & Plasma Cell Disorders',
    description: 'Expert diagnosis and management of multiple myeloma, MGUS, and related plasma cell conditions.',
  },
  {
    icon: Syringe,
    title: 'Bone Marrow Biopsy',
    description: 'Performed in our clinic with local anaesthetic for diagnosis and monitoring of blood disorders.',
  },
  {
    icon: Droplet,
    title: 'Iron Infusion Therapy',
    description: 'Safe, effective intravenous iron therapy for patients who cannot tolerate or absorb oral iron.',
  },
];

export default function Home() {
  const featuredDoctors = doctors.slice(0, 3);

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#7A1F3D]/5 via-white to-gray-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Specialist Haematology Care in Melbourne's West
            </h1>
            <p className="mb-8 text-lg text-gray-600 sm:text-xl">
              Expert care for blood disorders with a focus on compassionate treatment,
              evidence-based medicine, and close collaboration with your GP and local hospitals.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#7A1F3D] hover:bg-[#5A1730]">
                <Link href="/referrals">
                  Request an Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services/patient-resources">Information for Patients</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            About Our Clinic
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            West Melbourne Haematology Network is a group of experienced consultant haematologists
            dedicated to providing comprehensive care for blood disorders. We bring together expertise
            across benign and malignant haematology, serving Melbourne's western communities with
            accessible, high-quality specialist care.
          </p>
          <p className="mb-8 text-lg text-gray-600">
            Our practice is built on collaboration—working closely with your GP, local hospitals,
            and other specialists to ensure coordinated, patient-centred care that respects your
            individual needs and values.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/clinic/about">
              More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Our Doctors
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Meet our experienced team of consultant haematologists, each bringing specialized
            expertise in different areas of blood disorders.
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredDoctors.map((doctor) => (
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

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/clinic/doctors">
              Meet the Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            Conditions & Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We provide expert care across the full spectrum of haematological conditions
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition) => (
            <Card key={condition.title} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <condition.icon className="h-6 w-6 text-[#7A1F3D]" />
                </div>
                <CardTitle className="text-lg">{condition.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{condition.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services/conditions">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      <Section className="bg-[#7A1F3D]/5">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Research & Clinical Trials
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We're committed to advancing haematology through research and clinical trials
            </p>
          </div>

          <Card className="border-[#7A1F3D]">
            <CardContent className="pt-6">
              <p className="mb-4 text-gray-600">
                Our involvement in clinical research means our patients may have access to innovative
                new treatments before they become widely available. We participate in trials across
                lymphoma, myeloma, myeloproliferative neoplasms, and other blood disorders.
              </p>
              <p className="mb-6 text-gray-600">
                Clinical trial participation is voluntary and may not be suitable for everyone.
                We provide detailed information to help you make informed decisions about your care.
              </p>
              <Button asChild className="bg-[#7A1F3D] hover:bg-[#5A1730]">
                <Link href="/research">
                  Our Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            For Patients & GPs
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-t-4 border-t-[#7A1F3D]">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                <Users className="h-6 w-6 text-[#7A1F3D]" />
              </div>
              <CardTitle className="text-2xl">For Patients</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">What to Expect</h3>
                <p className="text-sm text-gray-600">
                  Learn about your first appointment, what to bring, and how we can help with
                  your blood disorder diagnosis and treatment.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Preparing for Tests</h3>
                <p className="text-sm text-gray-600">
                  Information about blood tests, bone marrow biopsies, and other procedures
                  to help you feel prepared and informed.
                </p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href="/services/patient-resources">Patient Resources</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-[#7A1F3D]">
            <CardHeader>
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                <FileText className="h-6 w-6 text-[#7A1F3D]" />
              </div>
              <CardTitle className="text-2xl">For GPs & Specialists</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Referral Pathways</h3>
                <p className="text-sm text-gray-600">
                  Information about how to refer patients, expected wait times, and what
                  information helps us provide optimal care.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">Urgent Referrals</h3>
                <p className="text-sm text-gray-600">
                  For urgent cases, call us directly on {siteConfig.contact.phone} and we can
                  arrange same-day or next-day assessment.
                </p>
              </div>
              <Button asChild className="w-full bg-[#7A1F3D] hover:bg-[#5A1730]">
                <Link href="/referrals">Referral Information</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Location & Contact
            </h2>
            <p className="text-lg text-gray-600">Visit us in West Melbourne, close to Southern Cross Station</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Address</h3>
                  <p className="text-sm text-gray-600">{siteConfig.contact.address.full}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Phone</h3>
                  <p className="text-sm text-gray-600">{siteConfig.contact.phone}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Office Hours</h3>
                  <p className="text-sm text-gray-600">
                    {siteConfig.contact.hours.weekdays}
                    <br />
                    {siteConfig.contact.hours.weekend}
                  </p>
                </div>
                <Button asChild className="w-full">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </CardContent>
            </Card>

            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="West Melbourne Haematology Network Location"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
