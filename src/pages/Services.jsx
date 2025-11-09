import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles, Award, Users, Star, Clock } from 'lucide-react';

const Services = () => {
  const allServices = [
    {
      title: 'Web & Business Systems',
      description: 'SME Management, ERP, CRM, HR & Payroll Systems for modern businesses',
      image: '/images/web-services.jpg',
      features: ['Custom ERP Solutions', 'CRM Systems', 'HR & Payroll Management', 'Business Process Automation', 'E-commerce Platforms', 'Custom Web Applications']
    },
    {
      title: 'GIS Services',
      description: 'GIS Mapping, Spatial Analysis, Geodatabase Development, and Urban Planning',
      image: '/images/gis-services.jpg',
      features: ['Spatial Data Analysis', 'Urban Planning Solutions', 'Geodatabase Development', 'Map Visualization', 'Location Intelligence', 'GIS Consulting']
    },
    {
      title: 'Remote Sensing',
      description: 'Satellite Imagery Analysis, Environmental Monitoring, and Precision Agriculture',
      image: '/images/remote-sensing.jpg',
      features: ['Satellite Image Analysis', 'Environmental Monitoring', 'Precision Agriculture', 'Land Use Mapping', 'Change Detection', 'Vegetation Analysis']
    },
    {
      title: 'Hardware & IoT',
      description: 'CCTV, Biometrics, IoT Devices, and Networking Infrastructure',
      image: '/images/hardware-iot.jpg',
      features: ['CCTV Installation', 'Biometric Systems', 'IoT Device Integration', 'Network Infrastructure', 'Smart Building Solutions', 'Security Systems']
    },
    {
      title: 'Solar Energy',
      description: 'Sustainable solar energy solutions for homes and businesses',
      image: '/images/solar-energy.jpg',
      features: ['Solar Panel Installation', 'Energy Audits', 'Battery Storage Systems', 'Solar Maintenance', 'Off-grid Solutions', 'Energy Monitoring']
    },
    {
      title: 'Health Informatics',
      description: 'EHR, Hospital Management, Telemedicine Platforms, Medical Data Analytics',
      image: '/images/helthcare-informatics.jpg',
      features: ['Electronic Health Records', 'Hospital Management Systems', 'Telemedicine Platforms', 'Medical Data Analytics', 'Patient Portal Systems', 'Healthcare Compliance']
    },
    {
      title: 'Agriculture Technology',
      description: 'Precision Farming, Smart Irrigation, Crop & Soil Monitoring, Farm Management Systems',
      image: '/images/agriculture-technology.jpg',
      features: ['Smart Farming Solutions', 'Crop Monitoring Systems', 'Irrigation Automation', 'Farm Management Software', 'Soil Analysis', 'Yield Prediction']
    },
    {
      title: 'Data & Analytics',
      description: 'Business Intelligence, Data Warehousing, Predictive Analytics, AI & ML Solutions',
      image: '/images/data-analytics.jpg',
      features: ['Business Intelligence', 'Predictive Analytics', 'AI & ML Solutions', 'Data Warehousing', 'Data Visualization', 'Big Data Processing']
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud Hosting, CI/CD Automation, Containerization, Cloud Migrations',
      image: '/images/cloud-devops.jpg',
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Container Orchestration', 'Cloud Infrastructure', 'DevOps Consulting', 'Cloud Security']
    },
    {
      title: 'Cybersecurity',
      description: 'Network Security, Endpoint Protection, Penetration Testing, Data Privacy & Compliance',
      image: '/images/cybersecurity.jpg',
      features: ['Network Security', 'Penetration Testing', 'Security Audits', 'Data Privacy Compliance', 'Endpoint Protection', 'Security Training']
    },
    {
      title: 'Digital Marketing',
      description: 'SEO, Social Media Marketing, and Digital Advertising Solutions',
      image: '/images/digital-marketing.jpg',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Marketing', 'PPC Advertising', 'Email Marketing', 'Analytics & Reporting']
    },
    {
      title: 'Mobile App Development',
      description: 'iOS, Android, and Cross-platform Mobile Application Development',
      image: '/images/mobile-app.jpg',
      features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'Mobile UI/UX Design', 'App Maintenance', 'App Store Optimization']
    },
  ];

  const serviceStats = [
    { number: '12', label: 'Service Categories', icon: Award },
    { number: '100+', label: 'Sub-Services', icon: Sparkles },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '24/7', label: 'Support', icon: Clock },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-32 px-4 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#191970]/5 to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-16 h-16 text-[#FFD700] mx-auto" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#191970]">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Comprehensive technology solutions designed to transform your business operations and drive growth across multiple domains.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {serviceStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                >
                  <Icon className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
                  <div className="text-5xl font-bold text-[#191970] mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-4">Complete Service Portfolio</h2>
            <p className="text-gray-600 text-lg">Explore our comprehensive range of technology solutions across all business domains</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191970]/90 via-[#191970]/50 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-[#191970] mb-3">Key Features:</p>
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FFD700] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[#191970] font-semibold hover:text-[#FFD700] transition-colors group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-lg">
              Delivering specialized solutions across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Healthcare', 'Agriculture', 'Education', 'Finance', 'Manufacturing', 'Retail', 'Real Estate', 'Government'].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center border border-gray-100"
              >
                <Star className="w-10 h-10 text-[#FFD700] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#191970]">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
   <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700] opacity-10 rounded-full blur-3xl"
        ></motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-16 h-16 text-[#191970] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray mb-10 leading-relaxed">
              Can't find exactly what you're looking for? We specialize in creating custom technology solutions tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#191970] px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-2xl"
              >
                Discuss Your Needs
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#FFD700] text-[#FFD700] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#FFD700] hover:text-[#191970] transition-all transform hover:scale-105"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Services;