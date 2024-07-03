
import React from 'react';

const Introduction = () => {
  return (
    <div className="introduction space-y-8">
      <h1 className="text-4xl font-bold mb-6">Introduction</h1>

      <section id="what-is-nexuspay" className="space-y-4">
        <h2 className="text-3xl font-semibold">What is NexusPay?</h2>
        <p>NexusPay provides a comprehensive payment solution that allows merchants to accept payments through various methods seamlessly. Our API offers a unified way to integrate multiple payment methods with minimal effort.</p>
      </section>

      <section id="features" className="space-y-4">
        <h2 className="text-3xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Easy integration</strong> with multiple payment methods</li>
          <li><strong>Secure and reliable transactions</strong></li>
          <li><strong>Comprehensive API documentation</strong></li>
          <li><strong>Real-time transaction updates</strong></li>
        </ul>
      </section>

      <section id="how-to-use" className="space-y-4">
        <h2 className="text-3xl font-semibold">How to Use This Documentation</h2>
        <p>This documentation is designed to provide all the information you need to integrate with the NexusPay API:</p>
        <ul>
          <li>Start with the <a href="/getting-started" className="font-bold text-blue-600">Getting Started</a> guide to learn how to authenticate and make your first API request.</li>
          <li>Refer to the <a href="/api-reference" className="font-bold text-blue-600">API Reference</a> for detailed information on all available endpoints, parameters, and example requests.</li>
          <li>Check the <a href="/faq" className="font-bold text-blue-600">FAQ</a> for answers to common questions.</li>
        </ul>
      </section>
    </div>
  );
};

export default Introduction;
