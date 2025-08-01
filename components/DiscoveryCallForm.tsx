"use client";
import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/ayesha-azhar-shaikh/discovery-call";

export default function DiscoveryCallForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Send to Google Sheets via API route
    setSubmitted(true);
    setLoading(false);
    setTimeout(() => {
      if (typeof window !== "undefined" && (window as any).Calendly?.initPopupWidget) {
        (window as any).Calendly.initPopupWidget({
          url: `${CALENDLY_URL}?name=${encodeURIComponent(form.name)}&email=${encodeURIComponent(form.email)}`,
        });
      }
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="p-6 text-center">
        <div className="text-2xl mb-2">✅ Thank you! Next, you’ll book your Discovery Call…</div>
        <div className="text-gray-600">The booking calendar will appear in a moment. If not, <button className="underline text-blue-600" onClick={() => (window as any).Calendly?.initPopupWidget && (window as any).Calendly.initPopupWidget({ url: `${CALENDLY_URL}?name=${encodeURIComponent(form.name)}&email=${encodeURIComponent(form.email)}` })}>click here</button>.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto bg-white p-8 rounded-xl shadow">
      <div>
        <label className="block mb-1 font-medium">Name *</label>
        <input name="name" required value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email *</label>
        <input name="email" type="email" required value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Message or coaching interest</label>
        <textarea name="message" value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2" />
      </div>
      <div className="flex items-center">
        <input name="subscribe" type="checkbox" checked={form.subscribe} onChange={handleChange} className="mr-2" />
        <label>Yes, add me to your email list</label>
      </div>
      <button type="submit" disabled={loading} className="w-full bg-[#28A745] text-white rounded-full py-3 text-lg hover:bg-[#218838] transition-all">
        {loading ? "Submitting..." : "Request Discovery Call"}
      </button>
    </form>
  );
} 