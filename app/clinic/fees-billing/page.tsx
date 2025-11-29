import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, CreditCard, FileText, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fees & Billing',
  description: 'Information about consultation fees, Medicare rebates, and payment options at West Melbourne Haematology Network.',
};

export default function FeesBillingPage() {
  return (
    <>
      <PageHeader
        title="Fees & Billing"
        description="Information about our fees, Medicare rebates, and payment options"
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <Alert className="mb-8">
            <Info className="h-4 w-4" />
            <AlertDescription>
              We are a private specialist practice. Fees apply for all consultations and procedures.
              Medicare rebates are available for patients with a valid referral.
            </AlertDescription>
          </Alert>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <FileText className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle>Consultation Fees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Initial Consultation</h3>
                  <p className="text-sm text-gray-600">
                    Initial consultations typically last 45-60 minutes and involve a comprehensive
                    review of your medical history, examination, and discussion of test results and
                    management options.
                  </p>
                  <div className="mt-3 rounded-lg bg-gray-50 p-4">
                    <p className="text-sm">
                      <span className="font-semibold">Fee:</span> Approximately $300-400
                      <br />
                      <span className="font-semibold">Medicare rebate:</span> Approximately $150-200
                      <br />
                      <span className="font-semibold">Out-of-pocket:</span> Approximately $150-200
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Follow-Up Consultation</h3>
                  <p className="text-sm text-gray-600">
                    Follow-up appointments are typically 20-30 minutes and involve review of test
                    results, monitoring of your condition, and adjustment of management as needed.
                  </p>
                  <div className="mt-3 rounded-lg bg-gray-50 p-4">
                    <p className="text-sm">
                      <span className="font-semibold">Fee:</span> Approximately $200-300
                      <br />
                      <span className="font-semibold">Medicare rebate:</span> Approximately $80-120
                      <br />
                      <span className="font-semibold">Out-of-pocket:</span> Approximately $120-180
                    </p>
                  </div>
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    Fees are indicative only and may vary depending on the complexity and duration
                    of the consultation. You will be advised of the fee at the time of booking.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <HelpCircle className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle>Procedure Fees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Bone Marrow Biopsy</h3>
                  <p className="text-sm text-gray-600">
                    Bone marrow examination is performed in our clinic under local anaesthesia.
                  </p>
                  <div className="mt-3 rounded-lg bg-gray-50 p-4">
                    <p className="text-sm">
                      <span className="font-semibold">Fee:</span> Approximately $400-500
                      <br />
                      <span className="font-semibold">Medicare rebate:</span> Approximately $200-250
                      <br />
                      <span className="font-semibold">Out-of-pocket:</span> Approximately $200-250
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Iron Infusion</h3>
                  <p className="text-sm text-gray-600">
                    Iron infusion therapy is administered in our clinic. The cost includes the
                    consultation, infusion medication, and monitoring.
                  </p>
                  <div className="mt-3 rounded-lg bg-gray-50 p-4">
                    <p className="text-sm">
                      <span className="font-semibold">Total cost:</span> Approximately $500-700
                      <br />
                      <span className="font-semibold">Medicare rebate:</span> Available for consultation component
                      <br />
                      <span className="font-semibold">PBS subsidy:</span> May be available for medication
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <CreditCard className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle>Payment Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Payment Methods</h3>
                  <p className="mb-3 text-sm text-gray-600">
                    We accept the following payment methods:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• EFTPOS (credit and debit cards)</li>
                    <li>• Cash</li>
                    <li>• Bank transfer (for larger invoices)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">When to Pay</h3>
                  <p className="text-sm text-gray-600">
                    Payment is expected on the day of your consultation. You will receive an
                    itemized receipt which you can submit to Medicare for your rebate through
                    the Medicare Express Plus app or at a Medicare service centre.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Medicare Claims</h3>
                  <p className="text-sm text-gray-600">
                    In most cases, we will process your Medicare claim electronically on the day.
                    The Medicare rebate will be deposited directly into your nominated bank account
                    within 3-5 business days. Please ensure your Medicare details are up to date.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bulk Billing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-gray-600">
                  Bulk billing (no out-of-pocket cost) may be available in specific circumstances:
                </p>
                <ul className="mb-4 space-y-2 text-sm text-gray-600">
                  <li>• Patients with a valid Pensioner Concession Card</li>
                  <li>• Patients with a valid Health Care Card</li>
                  <li>• Children under 16 years of age</li>
                  <li>• Commonwealth Seniors Health Card holders</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Please mention your concession status when booking your appointment.
                  Bulk billing is subject to availability and card holder eligibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Private Health Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-gray-600">
                  Private health insurance does not typically cover out-of-hospital specialist
                  consultations. However, some policies may provide a rebate for certain procedures.
                  We recommend checking with your health fund for details.
                </p>
                <p className="text-sm text-gray-600">
                  If you are admitted to hospital for treatment, your private health insurance
                  may cover hospital and medical costs. We work with all major private hospitals
                  in the western suburbs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#7A1F3D]">
              <CardHeader>
                <CardTitle>Questions About Fees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-gray-600">
                  If you have questions about fees or payment options, please don't hesitate to
                  contact our reception team. We understand that medical costs can be a concern
                  and we're happy to discuss your individual circumstances.
                </p>
                <p className="text-sm text-gray-600">
                  Financial concerns should never prevent you from seeking medical care. Please
                  speak with us if you're experiencing financial difficulty.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
