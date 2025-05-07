import React from 'react';

const features = [
  { icon: '🔒', text: 'Fast & Secure Process' },
  { icon: '💡', text: 'Transparent Pricing' },
  { icon: '☎️', text: '24/7 Support' },
  { icon: '🏆', text: 'Trusted by 10,000+ Clients' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {features.map((feature, idx) => (
          <div key={idx} className="p-6 border rounded-lg shadow-sm">
            <div className="text-3xl mb-2">{feature.icon}</div>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}