"use client";
import { useCart } from "@/contect/CartContect";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    paymentMethod: "credit-card",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create order object
    const order = {
      customer: formData,
      items: cartItems,
      total: cartTotal * 1.1, // Including 10% tax
      orderDate: new Date().toISOString(),
      status: "processing",
    };

    // Save order to localStorage (replace with API call in production)
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Clear cart and redirect
    clearCart();
    window.location.href = "/order-confirmation";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Customer Information Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">First Name</label>
              <input
                type="text"
                required
                className="w-full p-3 border rounded"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Last Name</label>
              <input
                type="text"
                required
                className="w-full p-3 border rounded"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full p-3 border rounded"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Address</label>
            <input
              type="text"
              required
              className="w-full p-3 border rounded"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">City</label>
              <input
                type="text"
                required
                className="w-full p-3 border rounded"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Country</label>
              <select
                required
                className="w-full p-3 border rounded"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              >
                <option value="">Select Country</option>
                <option value="US">Tigray</option>
                <option value="UK">Afar</option>
                <option value="CA">Amhara</option>
                <option value="CA">Oromia</option>
                <option value="CA">Somali or Hare</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Payment Method</label>
            <select
              required
              className="w-full p-3 border rounded"
              value={formData.paymentMethod}
              onChange={(e) =>
                setFormData({ ...formData, paymentMethod: e.target.value })
              }
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%):</span>
                <span>${(cartTotal * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${(cartTotal * 1.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
