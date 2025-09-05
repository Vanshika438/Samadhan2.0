import Link from 'next/link';

export default function ConfirmationPage() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Order Confirmed!</h1>
      <p className="text-lg mb-8">Thank you for your purchase. Your order is being processed.</p>
      <Link href="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
        Continue Shopping
      </Link>
    </div>
  );
}
