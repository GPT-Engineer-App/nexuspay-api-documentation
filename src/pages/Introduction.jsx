
import React from 'react';

const Introduction = () => {
  return (
    <div className="introduction">
      <h1>Introduction</h1>

      <section id="what-is-nexuspay">
        <h2>What is NexusPay?</h2>
        <p>NexusPay provides a comprehensive payment solution that allows merchants to accept payments through various methods seamlessly. Our API offers a unified way to integrate multiple payment methods with minimal effort.</p>
      </section>

      <section id="features">
        <h2>Features</h2>
        <ul>
          <li>Easy integration with multiple payment methods</li>
          <li>Secure and reliable transactions</li>
          <li>Comprehensive API documentation</li>
          <li>Real-time transaction updates</li>
        </ul>
      </section>

      <section id="how-to-use">
        <h2>How to Use This Documentation</h2>
        <p>This documentation is designed to provide all the information you need to integrate with the NexusPay API:</p>
        <ul>
          <li>Start with the <a href="/getting-started">Getting Started</a> guide to learn how to authenticate and make your first API request.</li>
          <li>Refer to the <a href="/api-reference">API Reference</a> for detailed information on all available endpoints, parameters, and example requests.</li>
          <li>Check the <a href="/faq">FAQ</a> for answers to common questions.</li>
        </ul>
      </section>
    </div>
  );
};

export default Introduction;
