import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
      <form className="max-w-xl mx-auto text-left space-y-4" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required className="w-full p-2 border rounded" />
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange} className="w-full p-2 border rounded" />
        <select name="type" value={form.type} onChange={handleChange} required className="w-full p-2 border rounded">
          <option value="">Select License Type</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Adobe">Adobe</option>
          <option value="Autodesk">Autodesk</option>
          <option value="Other">Other</option>
        </select>
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </section>
  );
}