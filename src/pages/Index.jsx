import { Link } from "react-router-dom";
import logo from '../../public/images/logo.png';

const Index = () => {
  return (
    <div className="text-center">
      <img src={logo} alt="NexusPay Logo" className="mx-auto mb-8 h-32 w-32" />
      <h1 className="text-3xl font-bold mb-4">Welcome to NexusPay API Documentation</h1>
      <p className="mb-8">NexusPay, developed by Nexus Core Technologies, is a powerful and versatile payment gateway designed to simplify and secure online transactions for businesses of all sizes. Our comprehensive API enables seamless integration with your applications, providing a reliable and efficient way to manage payments, subscriptions, and financial operations.</p>
      <div className="space-y-4">
        <Link to="/introduction" className="text-blue-500 hover:underline">Introduction</Link>
        <Link to="/getting-started" className="text-blue-500 hover:underline">Getting Started</Link>
        <Link to="/api-reference" className="text-blue-500 hover:underline">API Reference</Link>
        <Link to="/faq" className="text-blue-500 hover:underline">FAQ</Link>
      </div>
    </div>
  );
};

export default Index;