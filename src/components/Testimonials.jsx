import React from 'react';

const reviews = [
  { name: 'Jane Doe', role: 'CTO', company: 'TechFirm', text: 'SoftSell helped our team recover over $5,000 from unused licenses.' },
  { name: 'John Smith', role: 'IT Manager', company: 'CodeCo', text: 'Super smooth and professional service. Highly recommend!' },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Customer Testimonials</h2>
      <div className="grid gap-8 px-4 md:grid-cols-2">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 italic">"{review.text}"</p>
            <h4 className="font-bold">{review.name}</h4>
            <p className="text-sm text-gray-600">{review.role}, {review.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}