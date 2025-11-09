import React from 'react';

const About = () => {
  const impact = [
    { number: '50+', label: 'Happy Clients' },
    { number: '100+', label: 'Projects Completed' },
    { number: '24/7', label: 'Hours Of Support' },
    { number: '10+', label: 'Team Members' },
  ];

  const approach = [
    { step: '1', title: 'Understand', description: 'We analyze your business needs and challenges' },
    { step: '2', title: 'Design', description: 'Create tailored solutions that fit your requirements' },
    { step: '3', title: 'Implement', description: 'Deploy solutions with minimal business disruption' },
    { step: '4', title: 'Support', description: 'Provide ongoing maintenance and optimization' },
  ];

  const coreValues = [
    'Innovation in every solution',
    'Client-focused approach',
    'Quality and reliability',
    'Sustainable technology practices',
  ];

  const domains = [
    'Web & Business Systems',
    'GIS & Remote Sensing',
    'Hardware & IoT',
    'Health Informatics',
    'Agriculture Technology',
  ];

  const industries = [
    'Small & Medium Enterprises',
    'Healthcare Institutions',
    'Agricultural Organizations',
    'Government Agencies',
    'Educational Institutions',
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-32 px-4 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#191970]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#191970]">About Damani Nexus</h1>
          <p className="text-xl md:text-2xl text-gray-600">Tech for Every Terrain - Innovative solutions for modern challenges</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-[#191970] mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the leading technology partner for businesses across Africa, providing innovative solutions that drive growth and efficiency.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-[#191970] mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We deliver cutting-edge technology solutions tailored to the unique needs of SMEs, agriculture, healthcare, and government sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#191970] mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded with a vision to bridge the technology gap in emerging markets, Damani Nexus combines deep technical expertise with local market understanding to deliver solutions that truly work.
          </p>
        </div>
      </section>

      {/* Core Values & Technology Domains */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Core Values */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#191970] mb-6">Core Values</h3>
            <ul className="space-y-3">
              {coreValues.map((value, index) => (
                <li key={index} className="text-gray-600 flex items-start gap-3">
                  <span className="text-[#FFD700] mt-1 text-xl">✓</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Domains */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#191970] mb-6">Technology Domains</h3>
            <ul className="space-y-3">
              {domains.map((domain, index) => (
                <li key={index} className="text-gray-600 flex items-start gap-3">
                  <span className="text-[#FFD700] mt-1 text-xl">✓</span>
                  <span>{domain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Served */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#191970] mb-6">Industries Served</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index} className="text-gray-600 flex items-start gap-3">
                  <span className="text-[#FFD700] mt-1 text-xl">✓</span>
                  <span>{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#191970] text-center mb-6">Our Impact</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Numbers that reflect our commitment to excellence</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impact.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all border border-gray-100">
                <div className="text-5xl font-bold text-[#191970] mb-3">{item.number}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#191970] text-center mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-[#191970] to-[#000080] text-[#FFD700] w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#191970] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;