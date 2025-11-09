import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowLeft, Heart, FileText, Video, BarChart } from 'lucide-react';

const HealthInformatics = () => {
  const solutions = [
    {
      icon: FileText,
      title: 'Electronic Health Records (EHR)',
      description: 'Comprehensive patient record management systems with secure data storage and easy access',
    },
    {
      icon: Heart,
      title: 'Hospital Management Systems',
      description: 'End-to-end hospital operations management including appointments, billing, and inventory',
    },
    {
      icon: Video,
      title: 'Telemedicine Platforms',
      description: 'Remote consultation platforms connecting patients with healthcare providers virtually',
    },
    {
      icon: BarChart,
      title: 'Medical Data Analytics',
      description: 'Advanced analytics for clinical insights, patient outcomes, and operational efficiency',
    },
  ];

  const features = [
    'Patient Registration & Demographics',
    'Appointment Scheduling',
    'Clinical Documentation',
    'Laboratory Information System (LIS)',
    'Pharmacy Management',
    'Billing & Insurance Claims',
    'Inventory & Supply Chain',
    'Reporting & Analytics Dashboard',
  ];

  const benefits = [
    'Improved patient care quality',
    'Enhanced data security and privacy (HIPAA compliant)',
    'Streamlined workflow and reduced paperwork',
    'Better coordination among healthcare providers',
    'Reduced medical errors',
    'Cost savings through operational efficiency',
  ];

  const clients = [
    'Hospitals & Clinics',
    'Diagnostic Centers',
    'Pharmacies',
    'Health Insurance Companies',
    'Medical Research Institutions',
    'Telehealth Providers',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-96 bg-gradient-to-br from-[#191970] to-[#000080]">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Health Informatics"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div>
            <Link to="/services" className="inline-flex items-center text-[#FFD700] mb-4 hover:underline">
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Health Informatics</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Modern healthcare technology solutions for improved patient care and operational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#191970] mb-6">Transforming Healthcare Delivery</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Health Informatics solutions empower healthcare organizations to deliver better patient 
                care through digital transformation. We develop comprehensive systems that streamline 
                operations, enhance clinical workflows, and improve patient outcomes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From EHR systems to telemedicine platforms, we provide secure, scalable, and user-friendly 
                solutions that comply with healthcare regulations and industry best practices.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Healthcare Technology"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 bg-[#FFFAFA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#191970] text-center mb-12">Our Healthcare Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-[#191970] text-[#FFD700] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#191970] mb-2">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#191970] text-center mb-12">System Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#FFFAFA] p-6 rounded-lg shadow-md">
                <div className="bg-[#191970] text-[#FFD700] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  <Check size={20} />
                </div>
                <h3 className="text-base font-semibold text-[#191970]">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Clients */}
      <section className="py-20 px-4 bg-[#FFFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#191970] mb-6">Key Benefits</h2>
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
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#191970] mb-6">Who We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {clients.map((client, index) => (
                  <div key={index} className="bg-[#FFFAFA] p-4 rounded-lg">
                    <p className="text-gray-700 font-medium text-sm">{client}</p>
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
          <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Ready to Modernize Your Healthcare Operations?</h2>
          <p className="text-white mb-8">
            Let's discuss how our health informatics solutions can transform your facility
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FFD700] text-[#191970] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFC700] transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HealthInformatics;