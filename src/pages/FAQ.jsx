const FAQ = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold mb-6">FAQ</h1>
      <p className="mb-4">Frequently Asked Questions will be answered here.</p>
      <h2 className="text-3xl font-extrabold mb-4">Support and Resources</h2>
      <p className="mb-4">Our dedicated support team is here to assist you every step of the way. Access our resources for troubleshooting, best practices, and additional guidance:</p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">Developer Guides: Step-by-step integration tutorials.</li>
        <li className="mb-2">FAQs: Answers to common questions.</li>
        <li className="mb-2">Community Forums: Connect with other developers and share insights.</li>
        <li className="mb-2">Contact Support: Reach out to our support team for personalized assistance.</li>
      </ul>
    </div>
  );
};

export default FAQ;