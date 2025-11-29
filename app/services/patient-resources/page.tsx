import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { FAQAccordion } from '@/components/faq-accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient Resources',
  description: 'Helpful information and resources for patients of West Melbourne Haematology Network.',
};

const faqs = [
  {
    question: 'Do I need a referral?',
    answer: 'Yes, a current referral from your GP or another specialist is required to see a haematologist in our practice. Referrals are valid for 12 months from the date of issue. Medicare rebates are only available if you have a valid referral.'
  },
  {
    question: 'What should I bring to my appointment?',
    answer: 'Please bring your referral letter, Medicare card, any relevant health care cards, a list of current medications, previous test results or reports, and any questions you\'d like to discuss. If you have medical imaging (scans), please bring the CD or ensure they are available on the hospital system.'
  },
  {
    question: 'How long will my appointment take?',
    answer: 'Initial consultations typically last 45-60 minutes. Follow-up appointments are usually 20-30 minutes. Please arrive 10 minutes early to complete any necessary paperwork.'
  },
  {
    question: 'How are test results communicated?',
    answer: 'We will contact you once important test results are available, typically via phone call. A copy of your results and our report will also be sent to your referring doctor. For routine monitoring blood tests, results may be communicated at your next scheduled appointment if all is well.'
  },
  {
    question: 'What if I need to change or cancel my appointment?',
    answer: 'Please call us as soon as possible if you need to change or cancel your appointment. We require at least 24 hours notice. This allows us to offer the appointment to another patient who may need it.'
  },
  {
    question: 'Can I bring someone with me?',
    answer: 'Yes, you are very welcome to bring a family member, friend, or carer to your appointment. We encourage this, especially for initial consultations or when important decisions need to be made.'
  },
  {
    question: 'Will I see the same doctor each time?',
    answer: 'We aim for continuity of care, so you will generally see the same haematologist for your follow-up appointments. If your doctor is unavailable, another member of our team may see you - they will have full access to your medical records.'
  },
  {
    question: 'How do I get my prescriptions?',
    answer: 'We can provide prescriptions during your consultation. For ongoing medications, we can arrange regular prescriptions or work with your GP for repeat scripts. Some specialist medications require special arrangements through hospital pharmacies.'
  }
];

export default function PatientResourcesPage() {
  return (
    <>
      <PageHeader
        title="Patient Resources"
        description="Helpful information for your visit and ongoing care"
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <Card className="mb-12 border-[#7A1F3D] bg-[#7A1F3D]/5">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-2xl">First Visit Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#7A1F3D]" />
                  <span className="text-gray-700">Referral letter from your GP or specialist</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#7A1F3D]" />
                  <span className="text-gray-700">Medicare card and any health care concession cards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#7A1F3D]" />
                  <span className="text-gray-700">List of current medications (or bring the medications with you)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#7A1F3D]" />
                  <span className="text-gray-700">Recent blood test results and any relevant reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#7A1F3D]" />
                  <span className="text-gray-700">List of any allergies or adverse reactions to medications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#7A1F3D]" />
                  <span className="text-gray-700">Questions you would like to ask (write them down so you don't forget)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-[#7A1F3D]" />
                  <span className="text-gray-700">Arrive 10 minutes early to complete paperwork</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Downloadable Resources
            </h2>
            <p className="mb-6 text-gray-600">
              We provide information sheets to help you understand your condition and prepare
              for procedures. These resources will be available for download soon.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="flex items-center p-6">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <FileText className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">New Patient Questionnaire</h3>
                    <p className="text-sm text-gray-600">Complete before your first visit</p>
                  </div>
                  <Button variant="ghost" size="sm" disabled>
                    <Download className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-6">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <FileText className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Iron Infusion Information</h3>
                    <p className="text-sm text-gray-600">What to expect</p>
                  </div>
                  <Button variant="ghost" size="sm" disabled>
                    <Download className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-6">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <FileText className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Bone Marrow Biopsy Guide</h3>
                    <p className="text-sm text-gray-600">Preparation and aftercare</p>
                  </div>
                  <Button variant="ghost" size="sm" disabled>
                    <Download className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center p-6">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <FileText className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Understanding Your Blood Tests</h3>
                    <p className="text-sm text-gray-600">Patient guide</p>
                  </div>
                  <Button variant="ghost" size="sm" disabled>
                    <Download className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Downloads will be available soon. In the meantime, please contact our clinic if you
              need specific information.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Need More Information?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                If you can't find the information you're looking for, please don't hesitate to
                contact our clinic. Our reception team is available to answer questions and
                provide assistance.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
