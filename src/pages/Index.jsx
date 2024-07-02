import logo from '../../public/images/logo.png';
import homepageImage from '../../public/images/nexuspay_homepage.png';

const Index = () => {
  return (
    <div className="text-center">
      <img src={logo} alt="NexusPay Logo" className="mx-auto mb-8 h-32 w-32 object-contain" />
      <h1 className="text-3xl font-bold mb-4">Welcome to NexusPay API Documentation</h1>
      <p className="mb-8">NexusPay, developed by Nexus Core Technologies, is a powerful and versatile payment gateway designed to simplify and secure online transactions for businesses of all sizes. Our comprehensive API enables seamless integration with your applications, providing a reliable and efficient way to manage payments, subscriptions, and financial operations.</p>
      <img src={homepageImage} alt="NexusPay Homepage" className="mx-auto mb-8 h-auto w-full max-w-screen-md object-contain" />
    </div>
  );
};

export default Index;