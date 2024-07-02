import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Documentation Site</h1>
      <p className="mb-8">Explore the sections below to get started:</p>
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