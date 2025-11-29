import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Microscope, FlaskConical, Users, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Research & Clinical Trials',
  description: 'Learn about our commitment to research and how clinical trials benefit patients with blood disorders.',
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        title="Research & Clinical Trials"
        description="Advancing haematology through research and innovation"
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Why Research Matters
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              Research is at the heart of improving outcomes for patients with blood disorders.
              At West Melbourne Haematology Network, we're committed to advancing the field
              of haematology through participation in clinical research and trials.
            </p>
            <p className="mb-8 text-lg text-gray-600">
              Our involvement in research means our patients may have access to innovative
              new treatments before they become widely available. It also ensures that our
              practice is guided by the latest evidence and that we stay at the forefront
              of developments in haematology.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Benefits of Research Participation
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <FlaskConical className="h-6 w-6 text-[#7A1F3D]" />
                </div>
                <CardTitle>Access to New Treatments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Clinical trial participants may access promising new therapies years before
                  they become available as standard treatment. These trials test cutting-edge
                  approaches that may be more effective than current options.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <Users className="h-6 w-6 text-[#7A1F3D]" />
                </div>
                <CardTitle>Expert Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Research participants receive close monitoring and comprehensive care. Clinical
                  trials involve frequent assessments and detailed follow-up, ensuring any issues
                  are identified and addressed promptly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <Heart className="h-6 w-6 text-[#7A1F3D]" />
                </div>
                <CardTitle>Contributing to Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  By participating in research, you help advance medical knowledge and improve
                  outcomes for future patients. Your contribution helps researchers understand
                  diseases better and develop more effective treatments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Our Research Focus Areas
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <Microscope className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle className="text-xl">Lymphoid Malignancies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We participate in clinical trials investigating new treatments for lymphoma,
                  chronic lymphocytic leukaemia, and related conditions. This includes studies
                  of novel targeted therapies, immunotherapies, and combination treatment approaches.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <Microscope className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle className="text-xl">Multiple Myeloma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our team is involved in research examining new treatments for myeloma, including
                  novel drug combinations, maintenance therapy strategies, and approaches for
                  relapsed or refractory disease.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <Microscope className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle className="text-xl">Myeloproliferative Neoplasms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We participate in studies exploring new therapies for polycythaemia vera,
                  essential thrombocythaemia, and myelofibrosis, including JAK inhibitors
                  and other targeted treatments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <Microscope className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle className="text-xl">Supportive Care Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Beyond treatment trials, we're interested in research that improves quality
                  of life, manages treatment side effects, and optimizes supportive care for
                  patients with blood disorders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-[#7A1F3D]/5">
        <div className="mx-auto max-w-4xl">
          <Card className="border-[#7A1F3D]">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-2xl">Evidence-Based Practice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Beyond conducting research, we ensure our practice is informed by the latest
                clinical evidence. Our doctors regularly review medical literature, attend
                national and international conferences, and participate in continuing medical
                education.
              </p>
              <p className="text-gray-600">
                This commitment to evidence-based practice means you can be confident that
                treatment recommendations are based on the best available scientific evidence,
                adapted to your individual circumstances.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            Clinical Trial Participation
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Is a Clinical Trial Right for You?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Not every patient is suitable for every clinical trial. Trials have specific
                  eligibility criteria based on diagnosis, disease stage, previous treatments,
                  and other factors. If you're interested in clinical trial participation, we'll
                  discuss whether any current trials might be appropriate for your situation.
                </p>
                <p className="text-gray-600">
                  Participation is always voluntary. We'll provide detailed information about
                  any trial, including potential benefits and risks, to help you make an informed
                  decision. You're free to decline participation or withdraw from a trial at any
                  time without affecting your standard care.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A1F3D]"></span>
                    <span>Detailed explanation of the trial purpose, procedures, and potential outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A1F3D]"></span>
                    <span>Written information to take home and discuss with family</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A1F3D]"></span>
                    <span>Informed consent process to ensure you understand all aspects of participation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A1F3D]"></span>
                    <span>More frequent monitoring and follow-up than standard care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A1F3D]"></span>
                    <span>Ongoing communication about your progress and any findings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Interested in Learning More?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            If you're interested in clinical trial participation or have questions about our
            research activities, please discuss this with your haematologist during your
            consultation. We're happy to provide more information about current and upcoming
            research opportunities.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}

function Heart({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
