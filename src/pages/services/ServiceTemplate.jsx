import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';

// TEMPLATE: Copy this file and customize for each service
// 1. Rename the component
// 2. Update the hero image URL
// 3. Update title and description
// 4. Customize features, benefits, and applications arrays
// 5. Update CTA text

const ServiceTemplate = () => {
  const features = [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 4',
    'Feature 5',
    'Feature 6',
  ];

  const benefits = [
    'Benefit 1',
    'Benefit 2',
    'Benefit 3',
    'Benefit 4',
  ];

  const applications = [
    'Application 1',
    'Application 2',
    'Application 3',
    'Application 4',
  ];

  return (
    <div>
      {/* Hero - Update image URL and text */}
      <section className="relative h-96 bg-gradient-to-br from-[#191970] to-[#000080]">
        <div className="absolute inset-0">
          <img 
            src="YOUR_IMAGE_URL_HERE" 
            alt="Service Name"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div>
            <Link to="/services" className="inline-flex items-center text-[#FFD700] mb-4 hover:underline">
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Service Name</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Brief description of the service
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#191970] mb-6">What We Offer</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Detailed description of what this service provides. Explain the value proposition
                and how it helps businesses solve their problems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Additional information about the service, its scope, and unique selling points.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Service illustration"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-[#FFFAFA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#191970] text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#191970] text-[#FFD700] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <Check size={20} />
                </div>
                <h3 className="text-lg font-semibold text-[#191970]">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Applications */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#191970] mb-6">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-[#FFD700] rounded-full p-1 mt-1">
                      <Check size={16} className="text-[#191970]" />
                    </div>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FFFAFA] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#191970] mb-6">Applications</h3>
              <div className="grid grid-cols-1 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700 font-medium">{app}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#191970]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Ready to Get Started?</h2>
          <p className="text-white mb-8">
            Contact us to learn more about how this service can benefit your organization
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FFD700] text-[#191970] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFC700] transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate;