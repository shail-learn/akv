'use client';
import { useState } from 'react';
import Script from 'next/script';

export default function DonatePage() {
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    setLoading(true);

    const res = await fetch('/data/razorpay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 500 }),
    });

    const data = await res.json();

    if (!data.id) {
      alert('Error: Razorpay order not created.');
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: 'Donation Drive',
      description: 'Thank you for donating!',
      order_id: data.id,
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      theme: { color: '#3399cc' }
    };

    const razor = new window.Razorpay(options);
    razor.open();
    setLoading(false);
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>Donate ₹5</h1>
      <button onClick={handleDonate} disabled={loading}>
        {loading ? 'Processing...' : 'Donate Now'}
      </button>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
