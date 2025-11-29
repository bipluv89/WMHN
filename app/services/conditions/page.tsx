import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplet, Activity, Heart, TrendingUp, Shield, Stethoscope } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Conditions We Treat',
  description: 'Comprehensive care for all blood disorders including anaemia, leukaemia, lymphoma, myeloma, and clotting disorders.',
};

const conditions = [
  {
    icon: Droplet,
    category: 'Anaemia & Red Cell Disorders',
    description: 'Anaemia occurs when you don\'t have enough healthy red blood cells to carry adequate oxygen to your tissues. This can make you feel tired and weak. There are many types of anaemia, each with different causes.',
    details: 'We diagnose and treat all types of anaemia including iron deficiency, vitamin B12 and folate deficiency, anaemia of chronic disease, haemolytic anaemias, and hereditary red cell disorders such as thalassaemia and sickle cell disease.',
    when: [
      'Persistent fatigue and weakness',
      'Pale skin and nail beds',
      'Shortness of breath with minimal exertion',
      'Unexplained anaemia on blood tests',
      'Family history of hereditary blood disorders'
    ]
  },
  {
    icon: Activity,
    category: 'White Cell & Lymphoid Disorders',
    description: 'Lymphomas and chronic lymphocytic leukaemia (CLL) are cancers that affect lymphocytes, a type of white blood cell. These conditions can affect lymph nodes, bone marrow, and other organs.',
    details: 'We provide expert care for all types of lymphoma (Hodgkin and non-Hodgkin), chronic lymphocytic leukaemia, and related conditions. Treatment may include watchful waiting, chemotherapy, immunotherapy, targeted therapy, or referral for stem cell transplant.',
    when: [
      'Persistent enlarged lymph nodes',
      'Unexplained fever, night sweats, or weight loss',
      'Abnormal lymphocyte counts on blood tests',
      'Fatigue and recurrent infections',
      'Newly diagnosed lymphoma requiring specialist assessment'
    ]
  },
  {
    icon: Heart,
    category: 'Plasma Cell Disorders & Myeloma',
    description: 'Multiple myeloma and related plasma cell disorders affect the bone marrow and can cause bone pain, anaemia, kidney problems, and increased infection risk. Early diagnosis and treatment are important.',
    details: 'We specialize in diagnosing and managing myeloma, MGUS (monoclonal gammopathy of undetermined significance), smouldering myeloma, and related conditions. We work closely with transplant centres when stem cell transplantation is appropriate.',
    when: [
      'Bone pain, particularly in the back or ribs',
      'Unexplained anaemia or kidney problems',
      'Abnormal protein detected in blood or urine tests',
      'Recurrent infections',
      'High calcium levels on blood tests'
    ]
  },
  {
    icon: TrendingUp,
    category: 'Myeloproliferative Neoplasms',
    description: 'Myeloproliferative neoplasms (MPNs) are chronic blood disorders where the bone marrow produces too many blood cells. Common types include polycythaemia vera, essential thrombocythaemia, and myelofibrosis.',
    details: 'We provide long-term management of MPNs, monitoring for complications and disease progression. Treatment aims to reduce the risk of blood clots and manage symptoms. Regular monitoring and medication adjustments are often needed.',
    when: [
      'Elevated red cell, white cell, or platelet counts',
      'History of unusual blood clots',
      'Enlarged spleen detected on examination or scan',
      'Unexplained itching, especially after hot showers',
      'Known diagnosis requiring ongoing management'
    ]
  },
  {
    icon: Shield,
    category: 'Clotting & Bleeding Disorders',
    description: 'Disorders of haemostasis affect your blood\'s ability to clot properly. Bleeding disorders cause excessive bleeding, while thrombophilia increases the risk of blood clots.',
    details: 'We manage haemophilia, von Willebrand disease, platelet disorders, and other bleeding conditions. We also assess and treat thrombophilia, manage anticoagulation therapy, and provide guidance for patients with recurrent clots.',
    when: [
      'Excessive or prolonged bleeding',
      'Easy bruising',
      'Family history of bleeding or clotting disorders',
      'History of unusual blood clots (DVT, PE)',
      'Requiring complex anticoagulation management',
      'Pregnancy planning with known bleeding/clotting disorder'
    ]
  },
  {
    icon: Stethoscope,
    category: 'Other Benign Blood Disorders',
    description: 'We also manage various other non-malignant blood conditions including bone marrow failure syndromes, white cell disorders, and unexplained blood count abnormalities.',
    details: 'This includes conditions such as aplastic anaemia, neutropenia, eosinophilia, and other less common blood disorders. We perform comprehensive diagnostic workup and coordinate with other specialists when needed.',
    when: [
      'Persistent low blood counts (anaemia, low white cells, or low platelets)',
      'Elevated white cell or eosinophil counts',
      'Unexplained blood count abnormalities',
      'Suspected bone marrow failure',
      'Complex cases requiring specialist input'
    ]
  },
  {
    icon: Activity,
    category: 'Acute Leukaemias',
    description: 'Acute leukaemias (AML and ALL) are aggressive blood cancers requiring urgent specialist assessment and treatment. Early diagnosis and prompt treatment initiation are critical.',
    details: 'If acute leukaemia is suspected, we arrange urgent assessment and coordinate immediate referral to a tertiary centre for intensive treatment. We provide ongoing shared care and follow-up after initial treatment.',
    when: [
      'Very high or very low white cell counts',
      'Severe anaemia or thrombocytopenia',
      'Bone marrow failure on blood tests',
      'Unexplained fever and severe fatigue',
      'Bleeding or bruising',
      'Requires urgent same-day assessment'
    ]
  }
];

export default function ConditionsPage() {
  return (
    <>
      <PageHeader
        title="Conditions We Treat"
        description="We provide expert diagnosis and treatment for the full spectrum of blood disorders, from common conditions to rare and complex cases."
      />

      <Section>
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 rounded-lg bg-[#7A1F3D]/5 p-6">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Comprehensive Haematology Care
            </h2>
            <p className="text-gray-600">
              Our team has extensive experience across all areas of haematology. We provide thorough
              diagnostic workup, evidence-based treatment, and long-term monitoring. Whether you have
              a common condition like iron deficiency anaemia or a complex blood cancer, we're here
              to provide expert, compassionate care.
            </p>
          </div>

          <div className="space-y-8">
            {conditions.map((condition) => (
              <Card key={condition.category} className="overflow-hidden">
                <CardHeader className="bg-gray-50">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                    <condition.icon className="h-6 w-6 text-[#7A1F3D]" />
                  </div>
                  <CardTitle className="text-2xl">{condition.category}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">What is it?</h3>
                      <p className="text-gray-600">{condition.description}</p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">How we can help</h3>
                      <p className="text-gray-600">{condition.details}</p>
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        When to see a haematologist
                      </h3>
                      <ul className="space-y-1.5">
                        {condition.when.map((item, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7A1F3D]"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 border-[#7A1F3D] bg-[#7A1F3D]/5">
            <CardHeader>
              <CardTitle>Not Sure If We Can Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                If you're unsure whether your condition requires haematology input, please discuss
                with your GP. They can assess your situation and provide a referral if specialist
                review would be helpful.
              </p>
              <p className="text-gray-600">
                We accept referrals for all blood disorders, including complex or unusual cases that
                require specialist expertise.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
