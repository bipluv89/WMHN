'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertCircle, Clock, Phone, Mail, FileText } from 'lucide-react';

const referralSchema = z.object({
  doctorName: z.string().min(1, 'Doctor name is required'),
  practiceName: z.string().min(1, 'Practice name is required'),
  providerNumber: z.string().optional(),
  doctorPhone: z.string().min(1, 'Contact phone is required'),
  doctorEmail: z.string().email('Valid email is required'),

  patientName: z.string().min(1, 'Patient name is required'),
  patientDob: z.string().min(1, 'Date of birth is required'),
  patientPhone: z.string().min(1, 'Patient phone is required'),
  patientEmail: z.string().email('Valid email is required').or(z.literal('')),
  medicareNumber: z.string().optional(),

  referralReason: z.string().min(10, 'Please provide details (minimum 10 characters)'),
  priority: z.enum(['routine', 'soon', 'urgent'], {
    required_error: 'Please select a priority',
  }),
});

type ReferralFormData = z.infer<typeof referralSchema>;

export default function ReferralsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReferralFormData>({
    resolver: zodResolver(referralSchema),
  });

  const onSubmit = async (data: ReferralFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Referrals"
        description="Information for GPs and specialists referring patients to our practice"
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <FileText className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle className="text-lg">Referral Required</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  A current written referral from a GP or specialist is required for all
                  haematology consultations to ensure Medicare rebates are available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <Clock className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle className="text-lg">Wait Times</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Routine referrals: 2-4 weeks. Semi-urgent: 1-2 weeks. Urgent cases: same or
                  next day. We triage all referrals based on clinical priority.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#7A1F3D]/10">
                  <Phone className="h-5 w-5 text-[#7A1F3D]" />
                </div>
                <CardTitle className="text-lg">Urgent Referrals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  For urgent cases, please call us directly on (03) 9123 4567. We can arrange
                  same-day or next-day assessment for patients requiring urgent review.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Referral Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">What We Need</h3>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li>• Detailed referral letter outlining clinical history and reason for referral</li>
                  <li>• Recent blood test results (full blood count, film, iron studies as appropriate)</li>
                  <li>• Any relevant imaging reports or specialist letters</li>
                  <li>• Current medication list</li>
                  <li>• Patient contact details</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-gray-900">What Happens Next</h3>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li>• All referrals are reviewed by a haematologist within 24 hours</li>
                  <li>• We contact the patient to arrange an appointment</li>
                  <li>• Consultation reports are sent to the referring doctor promptly after each visit</li>
                  <li>• We maintain regular communication for shared care patients</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Online Referral Form</CardTitle>
              <p className="text-sm text-gray-600">
                Complete this form to refer a patient to West Melbourne Haematology Network
              </p>
            </CardHeader>
            <CardContent>
              {submitStatus === 'success' && (
                <Alert className="mb-6 border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Referral submitted successfully. We will contact the patient within 2-3 business days.
                  </AlertDescription>
                </Alert>
              )}

              {submitStatus === 'error' && (
                <Alert className="mb-6 border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    Failed to submit referral. Please try again or call us directly on (03) 9123 4567.
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Referring Doctor Details</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="doctorName">Doctor Name *</Label>
                      <Input
                        id="doctorName"
                        {...register('doctorName')}
                        className={errors.doctorName ? 'border-red-500' : ''}
                      />
                      {errors.doctorName && (
                        <p className="mt-1 text-sm text-red-600">{errors.doctorName.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="practiceName">Practice Name *</Label>
                      <Input
                        id="practiceName"
                        {...register('practiceName')}
                        className={errors.practiceName ? 'border-red-500' : ''}
                      />
                      {errors.practiceName && (
                        <p className="mt-1 text-sm text-red-600">{errors.practiceName.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="providerNumber">Provider Number (optional)</Label>
                      <Input
                        id="providerNumber"
                        {...register('providerNumber')}
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="doctorPhone">Contact Phone *</Label>
                        <Input
                          id="doctorPhone"
                          type="tel"
                          {...register('doctorPhone')}
                          className={errors.doctorPhone ? 'border-red-500' : ''}
                        />
                        {errors.doctorPhone && (
                          <p className="mt-1 text-sm text-red-600">{errors.doctorPhone.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="doctorEmail">Email *</Label>
                        <Input
                          id="doctorEmail"
                          type="email"
                          {...register('doctorEmail')}
                          className={errors.doctorEmail ? 'border-red-500' : ''}
                        />
                        {errors.doctorEmail && (
                          <p className="mt-1 text-sm text-red-600">{errors.doctorEmail.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Patient Details</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="patientName">Patient Full Name *</Label>
                      <Input
                        id="patientName"
                        {...register('patientName')}
                        className={errors.patientName ? 'border-red-500' : ''}
                      />
                      {errors.patientName && (
                        <p className="mt-1 text-sm text-red-600">{errors.patientName.message}</p>
                      )}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="patientDob">Date of Birth *</Label>
                        <Input
                          id="patientDob"
                          type="date"
                          {...register('patientDob')}
                          className={errors.patientDob ? 'border-red-500' : ''}
                        />
                        {errors.patientDob && (
                          <p className="mt-1 text-sm text-red-600">{errors.patientDob.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="medicareNumber">Medicare Number (optional)</Label>
                        <Input
                          id="medicareNumber"
                          {...register('medicareNumber')}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="patientPhone">Patient Phone *</Label>
                        <Input
                          id="patientPhone"
                          type="tel"
                          {...register('patientPhone')}
                          className={errors.patientPhone ? 'border-red-500' : ''}
                        />
                        {errors.patientPhone && (
                          <p className="mt-1 text-sm text-red-600">{errors.patientPhone.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="patientEmail">Patient Email *</Label>
                        <Input
                          id="patientEmail"
                          type="email"
                          {...register('patientEmail')}
                          className={errors.patientEmail ? 'border-red-500' : ''}
                        />
                        {errors.patientEmail && (
                          <p className="mt-1 text-sm text-red-600">{errors.patientEmail.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Clinical Details</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="referralReason">Reason for Referral *</Label>
                      <Textarea
                        id="referralReason"
                        rows={6}
                        placeholder="Please include relevant clinical history, current symptoms, recent blood test results, and specific question for haematologist..."
                        {...register('referralReason')}
                        className={errors.referralReason ? 'border-red-500' : ''}
                      />
                      {errors.referralReason && (
                        <p className="mt-1 text-sm text-red-600">{errors.referralReason.message}</p>
                      )}
                    </div>

                    <div>
                      <Label>Priority *</Label>
                      <RadioGroup defaultValue="routine" className="mt-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="routine" id="routine" {...register('priority')} />
                          <Label htmlFor="routine" className="font-normal">
                            Routine (2-4 weeks)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="soon" id="soon" {...register('priority')} />
                          <Label htmlFor="soon" className="font-normal">
                            Soon (1-2 weeks)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="urgent" id="urgent" {...register('priority')} />
                          <Label htmlFor="urgent" className="font-normal">
                            Urgent (same/next day) - please also call us
                          </Label>
                        </div>
                      </RadioGroup>
                      {errors.priority && (
                        <p className="mt-1 text-sm text-red-600">{errors.priority.message}</p>
                      )}
                    </div>

                    <div className="rounded-lg bg-gray-50 p-4">
                      <p className="text-sm text-gray-600">
                        <strong>Attachments:</strong> File upload functionality will be added soon.
                        For now, please email referral letters and test results to{' '}
                        <a href="mailto:referrals@westmelbhaem.com.au" className="text-[#7A1F3D] hover:underline">
                          referrals@westmelbhaem.com.au
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 border-t pt-6">
                  <Button type="button" variant="outline" onClick={() => reset()}>
                    Clear Form
                  </Button>
                  <Button type="submit" disabled={isSubmitting} className="bg-[#7A1F3D] hover:bg-[#5A1730]">
                    {isSubmitting ? 'Submitting...' : 'Submit Referral'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-8 border-[#7A1F3D] bg-[#7A1F3D]/5">
            <CardHeader>
              <CardTitle>Prefer to Refer by Phone, Fax, or Email?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Phone: (03) 9123 4567
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Fax: (03) 9123 4568
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Email: referrals@westmelbhaem.com.au
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
