import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Connect this to your backend)');
    console.log(formData);
    // TODO: Connect to your backend API
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Nairobi, Kenya',
      link: null,
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+254 758 815 721',
      link: 'tel:+254758815721',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@damaninexus.com',
      link: 'mailto:info@damaninexus.com',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#191970] to-[#000080] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">Ready to transform your business with technology? Let's talk!</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 bg-[#FFFAFA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#191970] mb-8">Get In Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#191970] text-[#FFD700] p-3 rounded-full">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#191970] mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-gray-600 hover:text-[#191970] transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-[#191970] mb-3">WhatsApp</h3>
              <p className="text-gray-600 text-sm mb-4">Chat with us directly on WhatsApp</p>
              <a
                href="https://wa.me/254758815721"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#22c55e] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#191970] mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#191970] focus:border-transparent outline-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#191970] focus:border-transparent outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 700 000 000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#191970] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#191970] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#191970] focus:border-transparent outline-none"
                >
                  <option value="">Select a service...</option>
                  <option value="web">Web & Business Systems</option>
                  <option value="gis">GIS Services</option>
                  <option value="remote">Remote Sensing</option>
                  <option value="hardware">Hardware & IoT</option>
                  <option value="health">Health Informatics</option>
                  <option value="agriculture">Agriculture Technology</option>
                  <option value="data">Data & Analytics</option>
                  <option value="cloud">Cloud & DevOps</option>
                  <option value="security">Cybersecurity</option>
                  <option value="training">Training & Consulting</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#191970] focus:border-transparent outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#191970] text-[#FFD700] py-3 rounded-md font-semibold hover:bg-[#000080] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Schedule Consultation CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#191970] mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Schedule a consultation to discuss your technology needs and how we can help transform your business.
          </p>
          <button className="bg-[#FFD700] text-[#191970] px-8 py-3 rounded-lg font-semibold hover:bg-[#FFC700] transition-colors">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;