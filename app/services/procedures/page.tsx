import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Syringe, TestTube, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Procedures',
  description: 'Information about procedures performed at West Melbourne Haematology Network including iron infusions, bone marrow biopsies, and venesection.',
};

const procedures = [
  {
    icon: Syringe,
    title: 'Iron Infusion',
    what: 'Iron infusion is a procedure where iron is delivered directly into your bloodstream through a vein. This is a highly effective way to treat iron deficiency anaemia, especially when oral iron tablets are not suitable or haven\'t worked.',
    why: 'Your doctor may recommend iron infusion if you have iron deficiency anaemia and oral iron supplements have caused side effects, haven\'t worked, or cannot be absorbed properly. Iron infusions are particularly useful for people with ongoing blood loss, chronic kidney disease, inflammatory bowel disease, or who are pregnant and unable to tolerate oral iron.',
    expect: 'Iron infusions are performed in our clinic. After a brief consultation to review your recent blood tests and check for any contraindications, a small cannula will be inserted into a vein in your arm. The iron solution is then infused slowly over 15-30 minutes while you sit comfortably. You\'ll be monitored throughout the infusion and for 30 minutes afterwards. Most people experience no side effects, though some may notice a metallic taste or feel slightly flushed.',
    preparation: [
      'Eat a normal breakfast or lunch before your appointment',
      'Bring a list of your current medications',
      'Wear comfortable clothing with sleeves that can be rolled up',
      'Allow 1.5-2 hours for the entire appointment'
    ],
    aftercare: [
      'You can resume normal activities immediately',
      'Drink plenty of fluids',
      'Minor side effects like headache or muscle aches usually resolve within 24-48 hours',
      'Contact us if you develop a rash, difficulty breathing, or severe abdominal pain',
      'We\'ll arrange follow-up blood tests in 4-6 weeks to check your response'
    ]
  },
  {
    icon: TestTube,
    title: 'Bone Marrow Biopsy',
    what: 'A bone marrow biopsy involves taking a small sample of bone marrow for examination under a microscope. This important test helps diagnose many blood disorders including leukaemias, lymphomas, myeloma, and other conditions affecting blood cell production.',
    why: 'Your doctor has recommended a bone marrow biopsy because blood tests have shown abnormalities that need further investigation. Examining bone marrow cells directly provides crucial information about blood cell production and can detect conditions that don\'t show up in regular blood tests. The results guide diagnosis and treatment decisions.',
    expect: 'The procedure is performed in our clinic and takes about 30 minutes. You\'ll lie on your side or front while the doctor cleans and numbs a small area of skin over your hip bone. Once the area is completely numb, a special needle is used to collect a small sample of bone marrow. Most patients describe brief pressure or discomfort during the actual sampling, but the local anaesthetic prevents sharp pain. Our doctors perform many bone marrow biopsies and use techniques to minimise discomfort.',
    preparation: [
      'You can eat and drink normally before the procedure',
      'Continue your regular medications unless advised otherwise',
      'Inform us if you take blood thinners like warfarin, aspirin, or clopidogrel',
      'Arrange someone to drive you home',
      'Wear comfortable, loose clothing'
    ],
    aftercare: [
      'Rest for the remainder of the day',
      'Keep the site dry for 24 hours',
      'You may experience tenderness at the biopsy site for a few days - simple painkillers like paracetamol or ibuprofen usually help',
      'A small bruise at the site is normal',
      'Avoid strenuous activity or heavy lifting for 48 hours',
      'Contact us if you develop significant pain, swelling, bleeding, or signs of infection',
      'Results typically take 5-7 days - we\'ll contact you to schedule a follow-up appointment'
    ]
  },
  {
    icon: Activity,
    title: 'Therapeutic Venesection',
    what: 'Therapeutic venesection (also called phlebotomy) involves removing blood from your body, similar to donating blood. This treatment is used to manage conditions where you have too many red blood cells or excess iron in your blood.',
    why: 'Your doctor has recommended venesection because you have a condition that causes your body to produce too many red blood cells (such as polycythaemia vera) or accumulate too much iron (such as haemochromatosis). Removing blood regularly helps keep your blood counts or iron levels in a safe range and reduces the risk of complications.',
    expect: 'The procedure is performed in our clinic and is very similar to blood donation. You\'ll sit comfortably in a chair while a nurse or doctor inserts a needle into a vein in your arm. Blood flows through tubing into a collection bag. The amount removed depends on your condition - typically 400-500ml (similar to a standard blood donation). The process takes 10-15 minutes. Most people tolerate the procedure well with minimal discomfort.',
    preparation: [
      'Drink plenty of fluids the day before and morning of your appointment',
      'Eat a good breakfast or lunch before your appointment',
      'Wear comfortable clothing with sleeves that can easily be rolled up',
      'Bring something to read or entertainment for a brief wait time'
    ],
    aftercare: [
      'Rest for 10-15 minutes before leaving',
      'Drink plenty of fluids for the rest of the day',
      'Avoid strenuous exercise or heavy lifting for 24 hours',
      'Remove the bandage after a few hours',
      'Some people feel slightly tired or lightheaded - this is normal and should resolve quickly',
      'Regular venesections may be needed - we\'ll monitor your blood counts and schedule treatments as required'
    ]
  }
];

export default function ProceduresPage() {
  return (
    <>
      <PageHeader
        title="Procedures"
        description="Information about procedures we perform in our clinic"
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 rounded-lg bg-[#7A1F3D]/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Safe, Expert Procedures
            </h2>
            <p className="text-gray-600">
              We perform a range of procedures in our clinic, delivered by experienced haematologists
              in a comfortable setting. We take time to explain each procedure thoroughly and ensure
              you feel comfortable and informed.
            </p>
          </div>

          <div className="space-y-6">
            {procedures.map((procedure) => (
              <Card key={procedure.title} className="overflow-hidden">
                <CardHeader className="bg-gray-50">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                    <procedure.icon className="h-6 w-6 text-[#7A1F3D]" />
                  </div>
                  <CardTitle className="text-2xl">{procedure.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="what">
                      <AccordionTrigger className="text-left font-semibold">
                        What is {procedure.title.toLowerCase()}?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {procedure.what}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="why">
                      <AccordionTrigger className="text-left font-semibold">
                        Why is it done?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {procedure.why}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="expect">
                      <AccordionTrigger className="text-left font-semibold">
                        What to expect on the day
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {procedure.expect}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="preparation">
                      <AccordionTrigger className="text-left font-semibold">
                        Preparation
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {procedure.preparation.map((item, index) => (
                            <li key={index} className="flex items-start text-gray-600">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A1F3D]"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="aftercare">
                      <AccordionTrigger className="text-left font-semibold">
                        Aftercare
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {procedure.aftercare.map((item, index) => (
                            <li key={index} className="flex items-start text-gray-600">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A1F3D]"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-[#7A1F3D] bg-[#7A1F3D]/5">
            <CardHeader>
              <CardTitle>Questions About Your Procedure?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                If you have questions about an upcoming procedure, please don't hesitate to contact
                our clinic. Our team is here to ensure you feel informed and comfortable. We can
                discuss the procedure in more detail and address any concerns you may have.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
