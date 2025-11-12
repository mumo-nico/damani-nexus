import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronRight, ArrowRight, Sparkles, Zap, Shield, Clock, Award, Users, CheckCircle, Star } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const heroSlides = [
    {
      title: "Tech for Every Terrain",
      subtitle: "For those who believe in beautiful software",
      description: "Transforming ideas into powerful digital solutions that drive business growth",
      cta: "Start Your Journey",
      image: "/images/web-services.jpg"
    },
    {
      title: "Build Complex Software",
      subtitle: "For those who need to build complex software and projects",
      description: "Enterprise-grade systems designed for scalability and performance",
      cta: "Explore Solutions",
      image: "/images/data-analytics.jpg"
    },
    {
      title: "Reveal Product Beauty",
      subtitle: "For those who need technology to reveal beauty of products",
      description: "Crafting exceptional digital experiences that captivate and convert",
      cta: "See Our Work",
      image: "/images/digital-marketing.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '98%', label: 'Success Rate', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock },
  ];

  const services = [
    {
      title: 'Web & Business Systems',
      description: 'SME Management, ERP, CRM, HR & Payroll Systems for modern businesses',
      image: '/images/web-services.jpg',
      features: ['Custom ERP Solutions', 'CRM Systems', 'HR & Payroll', 'Business Analytics']
    },
    {
      title: 'GIS Services',
      description: 'GIS Mapping, Spatial Analysis, Geodatabase Development, and Urban Planning',
      image: '/images/gis-services.jpg',
      features: ['Spatial Analysis', 'Urban Planning', 'Geodatabase Dev', 'Map Visualization']
    },
    {
      title: 'Remote Sensing',
      description: 'Satellite Imagery Analysis, Environmental Monitoring, and Precision Agriculture',
      image: '/images/remote-sensing.jpg',
      features: ['Satellite Analysis', 'Environmental Monitoring', 'Precision Agriculture', 'Land Use Mapping']
    },
    {
      title: 'Hardware & IoT',
      description: 'CCTV, Biometrics, IoT Devices, and Networking Infrastructure',
      image: '/images/hardware-iot.jpg',
      features: ['CCTV Systems', 'Biometric Solutions', 'IoT Integration', 'Network Setup']
    },
    {
      title: 'Solar Energy',
      description: 'Sustainable solar energy solutions for homes and businesses',
      image: '/images/solar-energy.jpg',
      features: ['Solar Installation', 'Energy Audits', 'Battery Storage', 'Maintenance']
    },
    {
      title: 'Health Informatics',
      description: 'EHR, Hospital Management, Telemedicine Platforms, Medical Data Analytics',
      image: '/images/helthcare-informatics.jpg',
      features: ['EHR Systems', 'Hospital Management', 'Telemedicine', 'Health Analytics']
    },
    {
      title: 'Agriculture Technology',
      description: 'Precision Farming, Smart Irrigation, Crop & Soil Monitoring',
      image: '/images/agriculture-technology.jpg',
      features: ['Smart Farming', 'Crop Monitoring', 'Irrigation Systems', 'Farm Management']
    },
    {
      title: 'Data & Analytics',
      description: 'Business Intelligence, Data Warehousing, Predictive Analytics, AI & ML',
      image: '/images/data-analytics.jpg',
      features: ['Business Intelligence', 'Predictive Analytics', 'AI Solutions', 'Data Warehousing']
    },
  ];

  const whyChoose = [
    {
      title: 'Proven Expertise',
      description: '5+ years of experience delivering cutting-edge technology solutions across multiple industries in East Africa.',
      icon: Award
    },
    {
      title: 'Rapid Implementation',
      description: 'Fast deployment and quick turnaround times without compromising on quality or functionality.',
      icon: Zap
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance to ensure your systems run smoothly.',
      icon: Clock
    },
    {
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability standards to protect your business data and operations.',
      icon: Shield
    },
    {
      title: 'Cost-Effective',
      description: 'Competitive pricing with transparent costs and excellent return on investment for your business.',
      icon: CheckCircle
    },
    {
      title: 'Local Understanding',
      description: 'Deep understanding of East African business environment and regulatory requirements.',
      icon: Users
    },
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'We analyze your needs and define project scope' },
    { step: '02', title: 'Design', description: 'Creating beautiful, functional designs' },
    { step: '03', title: 'Development', description: 'Building robust, scalable solutions' },
    { step: '04', title: 'Deployment', description: 'Launching and optimizing your solution' },
    { step: '05', title: 'Support', description: 'Ongoing maintenance and improvements' },
  ];

  const testimonials = [
    {
      name: 'John Kamau',
      role: 'CEO, AgriTech Solutions',
      content: 'Damani Nexus transformed our farm management system. The precision agriculture tools have increased our yield by 30%.',
      rating: 5
    },
    {
      name: 'Sarah Wanjiku',
      role: 'Director, HealthCare Plus',
      content: 'Their hospital management system streamlined our operations. Patient satisfaction has never been higher.',
      rating: 5
    },
    {
      name: 'David Omondi',
      role: 'Founder, Urban Planners Ltd',
      content: 'The GIS solutions provided by Damani Nexus are world-class. Highly recommend their services.',
      rating: 5
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden bg-white">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#191970]/95 via-[#191970]/85 to-[#191970]/70"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: currentSlide === index ? 0 : 50,
                    opacity: currentSlide === index ? 1 : 0
                  }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <motion.div
                    className="inline-block mb-6"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Sparkles className="text-[#FFD700] w-16 h-16 mx-auto drop-shadow-2xl" />
                  </motion.div>

                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
                    {slide.title}
                  </h1>

                  <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-[#FFD700] font-light drop-shadow-lg">
                    {slide.subtitle}
                  </p>

                  <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-100 drop-shadow-lg">
                    {slide.description}
                  </p>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#FFD700] text-[#191970] px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-2xl"
                  >
                    {slide.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? 'w-12 bg-[#191970]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-4">
              Trusted by Businesses Across East Africa
            </h2>
            <p className="text-gray-600 text-lg">Numbers that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
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

      {/* Services Showcase with Images */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions designed to transform your business operations and drive growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191970]/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-[#FFD700]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-[#191970] font-semibold text-sm hover:text-[#FFD700] transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg">
              A proven methodology that delivers exceptional results
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#191970] via-[#FFD700] to-[#191970] transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#191970] to-[#000080] rounded-full flex items-center justify-center text-[#FFD700] text-2xl font-bold shadow-xl">
                      {item.step}
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="absolute inset-0 bg-[#FFD700] rounded-full opacity-20"
                    ></motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-[#191970] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-4">
              Why Choose Damani Nexus?
            </h2>
            <p className="text-gray-600 text-lg">
              We deliver exceptional technology solutions that drive real business results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#191970] to-[#000080] rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#191970] mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real stories from businesses we've helped transform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-[#191970]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-gray-600 text-lg">
              We leverage the latest technologies to build robust solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['React', 'Django', 'Python', 'PostgreSQL', 'Node.js',  'AWS', 'Docker', 'TensorFlow', 'ArcGIS', 'MongoDB', 'Kubernetes', 'Flutter'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all flex items-center justify-center border border-gray-100"
              >
                <span className="text-[#191970] font-semibold text-center">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD700] opacity-10 rounded-full blur-3xl"
        ></motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-16 h-16 text-[#191970] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#191970]">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-10 text-gray leading-relaxed">
              Let's discuss how Damani Nexus can help you leverage technology for growth and efficiency.
              Our team of experts is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#191970] px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-2xl"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#FFD700] text-[#FFD700] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#FFD700] hover:text-[#191970] transition-all transform hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;