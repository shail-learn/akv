import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { amount } = body;

    if (!amount) {
      return Response.json({ error: 'Amount is required' }, { status: 400 });
    }

    const order = await razorpay.orders.create({
      amount: amount * 100, // ₹1 = 100 paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1,
    });

    return Response.json(order);
  } catch (error) {
    console.error('[RAZORPAY_ORDER_ERROR]', error);
    return Response.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
