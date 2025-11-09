import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Package, Wrench, Laptop } from 'lucide-react';

const Shop = () => {
  const comingSoonFeatures = [
    {
      icon: Laptop,
      title: 'Hardware Products',
      description: 'Browse our selection of networking equipment, IoT devices, and more',
    },
    {
      icon: Package,
      title: 'Software Solutions',
      description: 'Pre-built software packages and licenses for your business',
    },
    {
      icon: Wrench,
      title: 'Service Packages',
      description: 'Ready-to-purchase service bundles at competitive prices',
    },
    {
      icon: ShoppingCart,
      title: 'Easy Checkout',
      description: 'Secure payment processing with multiple payment options',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#191970] to-[#000080] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop</h1>
          <p className="text-xl text-gray-200">Coming Soon - Browse our products and solutions</p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 px-4 bg-[#FFFAFA]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-3xl font-bold text-[#191970] mb-4">Our Online Shop is Coming Soon!</h2>
            <p className="text-gray-600 text-lg mb-6">
              We're working hard to bring you an amazing shopping experience for all your technology needs. 
              Our shop will feature hardware products, software solutions, and service packages.
            </p>
            <p className="text-gray-600 mb-6">
              In the meantime, feel free to contact us directly for any product inquiries or to place an order.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#191970] text-[#FFD700] px-8 py-3 rounded-lg font-semibold hover:bg-[#000080] transition-colors"
            >
              Contact Us for Orders
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-[#191970] text-center mb-8">What to Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comingSoonFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="bg-[#191970] text-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-lg font-semibold text-[#191970] mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Categories Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-[#191970] text-center mb-8">Popular Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFFAFA] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h4 className="text-lg font-semibold text-[#191970] mb-2">Computers & Laptops</h4>
              <p className="text-gray-600 text-sm">Business-grade computers and laptops</p>
            </div>
            <div className="bg-[#FFFAFA] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="text-lg font-semibold text-[#191970] mb-2">Security Equipment</h4>
              <p className="text-gray-600 text-sm">CCTV cameras, access control systems</p>
            </div>
            <div className="bg-[#FFFAFA] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">📡</div>
              <h4 className="text-lg font-semibold text-[#191970] mb-2">Networking Gear</h4>
              <p className="text-gray-600 text-sm">Routers, switches, and access points</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-[#FFFAFA]">
        <div className="max-w-2xl mx-auto text-center bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-[#191970] mb-4">Get Notified When We Launch</h3>
          <p className="text-gray-600 mb-6">
            Be the first to know when our online shop goes live. Sign up for updates and exclusive launch offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#191970] focus:border-transparent outline-none"
            />
            <button className="bg-[#191970] text-[#FFD700] px-6 py-3 rounded-md font-semibold hover:bg-[#000080] transition-colors whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;