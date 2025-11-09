import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Twitter, ChevronRight } from 'lucide-react';

const Footer = () => {
  const usefulLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
  ];

  const services = [
    { name: 'Web Systems', path: '/services' },
    { name: 'GIS Services', path: '/services' },
    { name: 'Remote Sensing', path: '/services' },
    { name: 'Hardware & IoT', path: '/services' },
  ];

  const socialLinks = [
    { Icon: Twitter, link: '#', label: 'Twitter' },
    { Icon: Facebook, link: '#', label: 'Facebook' },
    { Icon: Instagram, link: '#', label: 'Instagram' },
    { Icon: Linkedin, link: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#191970] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-[#FFD700] text-2xl font-bold mb-4">DAMANI NEXUS</h3>
            <p className="text-[#FFD700] text-sm mb-4">Tech for Every Terrain</p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-[#FFD700]" />
                Nairobi, Kenya
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-[#FFD700]" />
                +254 758 815 721
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-[#FFD700]" />
                info@damaninexus.com
              </p>
            </div>
            <div className="flex gap-3 mt-4">
              {socialLinks.map(({ Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  aria-label={label}
                  className="bg-white/10 p-2 rounded-full hover:bg-[#FFD700] hover:text-[#191970] transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-[#FFD700] font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-[#FFD700] transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-[#FFD700] font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-sm hover:text-[#FFD700] transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-[#FFD700] font-semibold mb-4">Follow Us</h4>
            <p className="text-sm mb-4">Stay connected for the latest updates and insights</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm">
            © Copyright <span className="text-[#FFD700] font-semibold">Damani Nexus</span> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
