"use client";
import Link from "next/link";

export default function OrderConfirmation() {
  // Get last order from localStorage
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  const lastOrder = orders[orders.length - 1];

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Order Confirmed! 🎉</h1>
      <p className="text-lg mb-8">Thank you for your purchase!</p>

      <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg text-left">
        <h2 className="text-xl font-bold mb-4">Order Details</h2>
        <p>
          <strong>Order Number:</strong> #{Date.now()}
        </p>
        <p>
          <strong>Date:</strong>{" "}
          {new Date(lastOrder?.orderDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Total:</strong> ${lastOrder?.total.toFixed(2)}
        </p>

        <h3 className="text-lg font-bold mt-6 mb-2">Shipping to:</h3>
        <p>
          {lastOrder?.customer.firstName} {lastOrder?.customer.lastName}
        </p>
        <p>{lastOrder?.customer.address}</p>
        <p>
          {lastOrder?.customer.city}, {lastOrder?.customer.country}
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
