import React from 'react';

const steps = [
  { icon: '📤', title: 'Upload License' },
  { icon: '📈', title: 'Get Valuation' },
  { icon: '💸', title: 'Get Paid' },
];

export default function HowItWorks() {
  return (
    <section className="py-16 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="flex justify-center space-x-10">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md w-40">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}