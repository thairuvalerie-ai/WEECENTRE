export async function verifyRecaptchaToken(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error('reCAPTCHA secret key not configured');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return true;
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.error('reCAPTCHA verification failed:', data['error-codes']);
      }
      return false;
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('reCAPTCHA verification error:', error);
    }
    return false;
  }
}
