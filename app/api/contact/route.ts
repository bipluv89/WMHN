import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log('===== CONTACT FORM SUBMISSION =====');
    console.log('From:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      type: data.userType,
    });
    console.log('Message:', data.message);
    console.log('Verification Answer:', data.verificationAnswer);
    console.log('Timestamp:', new Date().toISOString());
    console.log('===================================');

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will respond within 1-2 business days.',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
