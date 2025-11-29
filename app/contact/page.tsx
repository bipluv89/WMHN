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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  userType: z.enum(['patient', 'family', 'gp', 'other'], {
    required_error: 'Please select who you are',
  }),
  message: z.string().min(10, 'Please provide a message (minimum 10 characters)'),
  verificationAnswer: z.string().refine((val) => val === '7', {
    message: 'Incorrect answer. Please try again.',
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedUserType, setSelectedUserType] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
        setSelectedUserType('');
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
        title="Contact Us"
        description="Get in touch with West Melbourne Haematology Network"
      />

      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="mb-2 flex items-center text-[#7A1F3D]">
                      <MapPin className="mr-2 h-5 w-5" />
                      <h3 className="font-semibold">Address</h3>
                    </div>
                    <p className="text-gray-600">{siteConfig.contact.address.full}</p>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center text-[#7A1F3D]">
                      <Phone className="mr-2 h-5 w-5" />
                      <h3 className="font-semibold">Phone & Fax</h3>
                    </div>
                    <p className="text-gray-600">
                      Phone: {siteConfig.contact.phone}
                      <br />
                      Fax: {siteConfig.contact.fax}
                    </p>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center text-[#7A1F3D]">
                      <Mail className="mr-2 h-5 w-5" />
                      <h3 className="font-semibold">Email</h3>
                    </div>
                    <p className="text-gray-600">
                      <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#7A1F3D]">
                        {siteConfig.contact.email}
                      </a>
                    </p>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center text-[#7A1F3D]">
                      <Clock className="mr-2 h-5 w-5" />
                      <h3 className="font-semibold">Office Hours</h3>
                    </div>
                    <p className="text-gray-600">
                      {siteConfig.contact.hours.weekdays}
                      <br />
                      {siteConfig.contact.hours.weekend}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src={siteConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="West Melbourne Haematology Network Location"
                ></iframe>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-sm text-gray-600">
                    For general enquiries, please complete the form below. We aim to respond
                    within 1-2 business days.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitStatus === 'success' && (
                    <Alert className="mb-6 border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Thank you for your message. We will respond within 1-2 business days.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === 'error' && (
                    <Alert className="mb-6 border-red-200 bg-red-50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
                        Failed to send message. Please try again or call us directly.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        {...register('name')}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                      />
                    </div>

                    <div>
                      <Label htmlFor="userType">I am a *</Label>
                      <Select
                        value={selectedUserType}
                        onValueChange={(value) => {
                          setSelectedUserType(value);
                          setValue('userType', value as any);
                        }}
                      >
                        <SelectTrigger className={errors.userType ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="patient">Patient</SelectItem>
                          <SelectItem value="family">Family member</SelectItem>
                          <SelectItem value="gp">GP / Referring Doctor</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.userType && (
                        <p className="mt-1 text-sm text-red-600">{errors.userType.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="How can we help you?"
                        {...register('message')}
                        className={errors.message ? 'border-red-500' : ''}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="verification">What is 3 + 4? *</Label>
                      <Input
                        id="verification"
                        type="text"
                        placeholder="Enter your answer"
                        {...register('verificationAnswer')}
                        className={errors.verificationAnswer ? 'border-red-500' : ''}
                      />
                      {errors.verificationAnswer && (
                        <p className="mt-1 text-sm text-red-600">{errors.verificationAnswer.message}</p>
                      )}
                      <p className="mt-1 text-xs text-gray-500">This helps us prevent spam</p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#7A1F3D] hover:bg-[#5A1730]"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Alert className="mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>For urgent medical matters,</strong> please call us directly or contact
                  your GP. This form is for general enquiries only and is not monitored outside
                  business hours.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
