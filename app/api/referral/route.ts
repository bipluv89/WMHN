import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log('===== REFERRAL SUBMISSION =====');
    console.log('Referring Doctor:', {
      name: data.doctorName,
      practice: data.practiceName,
      providerNumber: data.providerNumber,
      phone: data.doctorPhone,
      email: data.doctorEmail,
    });
    console.log('Patient:', {
      name: data.patientName,
      dob: data.patientDob,
      phone: data.patientPhone,
      email: data.patientEmail,
      medicare: data.medicareNumber,
    });
    console.log('Clinical Details:', {
      reason: data.referralReason,
      priority: data.priority,
    });
    console.log('Timestamp:', new Date().toISOString());
    console.log('==============================');

    return NextResponse.json({
      success: true,
      message: 'Referral submitted successfully. We will contact the patient within 2-3 business days to schedule an appointment.',
    });
  } catch (error) {
    console.error('Error processing referral:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit referral. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
