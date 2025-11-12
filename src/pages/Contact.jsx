import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xovyvvry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
          _template: 'box'
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert('Error sending message. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
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
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Send className="w-16 h-16 text-[#FFD700] mx-auto" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#191970]">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Ready to transform your business with technology? Let's talk!
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-[#191970] mb-8">Get In Touch</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-[#191970] to-[#000080] text-[#FFD700] p-4 rounded-full shadow-lg">
                        <Icon size={28} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#191970] mb-2 text-lg">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-[#FFD700] transition-colors text-lg"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-lg">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="mt-8 bg-gradient-to-br from-[#25D366]/10 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="font-bold text-[#191970] mb-3 text-xl">WhatsApp</h3>
              <p className="text-gray-600 mb-6">Chat with us directly on WhatsApp for quick responses</p>
              <a
                href="https://wa.me/254758815721"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#22c55e] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl shadow-2xl border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-[#191970] mb-8">Send Us a Message</h2>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-6 bg-green-50 border-2 border-green-500 rounded-xl flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-green-800 font-bold">Message sent successfully!</p>
                  <p className="text-green-700 text-sm">We'll get back to you soon.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#191970] outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#191970] outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 700 000 000"
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#191970] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Company (Optional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#191970] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Service Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#191970] outline-none transition-all"
                >
                  <option value="">Select a service...</option>
                  <option value="web">Web & Business Systems</option>
                  <option value="gis">GIS Services</option>
                  <option value="remote">Remote Sensing</option>
                  <option value="hardware">Hardware & IoT</option>
                  <option value="solar">Solar Energy</option>
                  <option value="health">Health Informatics</option>
                  <option value="agriculture">Agriculture Technology</option>
                  <option value="data">Data & Analytics</option>
                  <option value="cloud">Cloud & DevOps</option>
                  <option value="security">Cybersecurity</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#191970] outline-none resize-none transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#191970] to-[#000080] text-[#FFD700] py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#FFD700] border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Schedule Consultation CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-white p-12 rounded-3xl shadow-2xl border border-gray-100"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#191970] mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Schedule a consultation to discuss your technology needs and how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254758815721"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFC700] text-[#191970] px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Schedule Consultation
            </a>
            <a
              href="tel:+254758815721"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#191970] text-[#191970] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#191970] hover:text-[#FFD700] transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;