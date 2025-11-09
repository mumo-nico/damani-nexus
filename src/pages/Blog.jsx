import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Future of GIS Technology in Africa',
      excerpt: 'Exploring how Geographic Information Systems are transforming industries across the continent, from urban planning to agriculture.',
      date: 'Nov 1, 2025',
      author: 'Damani Team',
      category: 'GIS',
      readTime: '5 min read',
      image: '🗺️',
    },
    {
      title: 'Smart Agriculture: IoT Solutions for Kenyan Farmers',
      excerpt: 'Discover how Internet of Things devices are revolutionizing farming practices and increasing crop yields for small-scale farmers.',
      date: 'Oct 28, 2025',
      author: 'Damani Team',
      category: 'Agriculture',
      readTime: '7 min read',
      image: '🌾',
    },
    {
      title: 'Cybersecurity Best Practices for SMEs',
      excerpt: 'Essential security measures every small and medium enterprise should implement to protect their business data and operations.',
      date: 'Oct 25, 2025',
      author: 'Damani Team',
      category: 'Security',
      readTime: '6 min read',
      image: '🔒',
    },
    {
      title: 'Digital Transformation in Healthcare',
      excerpt: 'How health informatics and telemedicine platforms are improving patient care and healthcare delivery in East Africa.',
      date: 'Oct 20, 2025',
      author: 'Damani Team',
      category: 'Health Tech',
      readTime: '8 min read',
      image: '🏥',
    },
    {
      title: 'Cloud Migration: A Complete Guide for Businesses',
      excerpt: 'Everything you need to know about moving your business operations to the cloud, from planning to execution.',
      date: 'Oct 15, 2025',
      author: 'Damani Team',
      category: 'Cloud',
      readTime: '10 min read',
      image: '☁️',
    },
    {
      title: 'Remote Sensing Applications in Environmental Conservation',
      excerpt: 'Learn how satellite imagery and remote sensing technology are being used to monitor and protect natural resources.',
      date: 'Oct 10, 2025',
      author: 'Damani Team',
      category: 'Environment',
      readTime: '6 min read',
      image: '🛰️',
    },
  ];

  const categories = [
    'All',
    'GIS',
    'Agriculture',
    'Security',
    'Health Tech',
    'Cloud',
    'IoT',
    'Environment',
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#191970] to-[#000080] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-200">Insights, updates, and technology trends</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#191970] text-[#FFD700]'
                    : 'bg-[#FFFAFA] text-gray-700 hover:bg-[#191970] hover:text-[#FFD700]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 bg-[#FFFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#191970] to-[#000080] flex items-center justify-center">
                  <span className="text-6xl">{post.image}</span>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#FFD700] bg-[#191970] px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#191970] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                    </div>
                    <button className="text-[#191970] font-medium text-sm hover:text-[#FFD700] transition-colors flex items-center gap-1">
                      Read <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center bg-[#FFFAFA] p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-[#191970] mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to receive the latest insights, technology trends, and company updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#191970] focus:border-transparent outline-none"
            />
            <button className="bg-[#191970] text-[#FFD700] px-6 py-3 rounded-md font-semibold hover:bg-[#000080] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;