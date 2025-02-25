import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About VeggieShop</h1>
        
        <div className="prose lg:prose-lg">
          <p className="text-lg mb-6">
            Welcome to VeggieShop, your trusted source for fresh, locally-sourced vegetables. 
            We believe in bringing the freshness of the farm directly to your table.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            Our mission is to provide our customers with the highest quality vegetables 
            while supporting local farmers and promoting sustainable agriculture practices.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Farm-fresh vegetables delivered to your doorstep</li>
            <li className="mb-2">Support for local farmers and communities</li>
            <li className="mb-2">Sustainable and eco-friendly practices</li>
            <li className="mb-2">Wide variety of seasonal produce</li>
            <li className="mb-2">Competitive prices and excellent service</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
          <p className="mb-6">
            We are committed to providing you with the best shopping experience possible. 
            From carefully selecting our produce to ensuring timely delivery, we strive 
            to exceed your expectations at every step.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Email: support@veggieshop.com</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p>Address: 123 Fresh Street, Veggie City, VC 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
