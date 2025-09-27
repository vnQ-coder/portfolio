'use client'

import { useState } from 'react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: '/api/placeholder/80/80',
      content: 'Working with Your Name was exceptional. The MERN stack application he built for us is robust, scalable, and performs flawlessly. His technical expertise and clean code practices are outstanding.',
      rating: 5,
      project: 'Task Management App'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, EduTech Solutions',
      company: 'EduTech Solutions',
      image: '/api/placeholder/80/80',
      content: 'The e-learning platform he developed using MERN stack has transformed our business. The MongoDB integration and React frontend are perfectly optimized. Highly recommend his services.',
      rating: 5,
      project: 'E-Learning Platform'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Manager, SocialMedia Pro',
      company: 'SocialMedia Pro',
      image: '/api/placeholder/80/80',
      content: 'His social media dashboard built with Express.js and React is exactly what we needed. The real-time features and clean architecture make it a joy to work with. Excellent developer!',
      rating: 5,
      project: 'Social Media Dashboard'
    },
    {
      name: 'David Thompson',
      position: 'Founder, RestaurantTech',
      company: 'RestaurantTech',
      image: '/api/placeholder/80/80',
      content: 'The restaurant ordering system he built with Node.js and MongoDB has streamlined our operations. The Socket.io integration for real-time updates is seamless. Great work!',
      rating: 5,
      project: 'Restaurant Ordering System'
    },
    {
      name: 'Lisa Wang',
      position: 'VP Engineering, PropertyCorp',
      company: 'PropertyCorp',
      image: '/api/placeholder/80/80',
      content: 'The real estate portal he developed showcases excellent MERN stack skills. The MongoDB queries are optimized and the React components are well-structured. Highly professional.',
      rating: 5,
      project: 'Real Estate Portal'
    },
    {
      name: 'Robert Martinez',
      position: 'IT Director, InventoryPlus',
      company: 'InventoryPlus',
      image: '/api/placeholder/80/80',
      content: 'His inventory management system built with full MERN stack is robust and reliable. The Mongoose schemas are well-designed and the API endpoints are perfectly documented.',
      rating: 5,
      project: 'Inventory Management System'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ))
  }

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4 gradient-text">Client Testimonials</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here&apos;s what clients and colleagues say about my MERN stack development skills and professional approach.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="glass-dark rounded-xl p-8 mb-12 max-w-4xl mx-auto hover-lift animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0 animate-float">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-white text-xl font-bold">
                  {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-2">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className="text-lg text-gray-300 mb-4 italic">
                &ldquo;{testimonials[currentTestimonial].content}&rdquo;
              </blockquote>
              
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-blue-400 text-sm">
                  {testimonials[currentTestimonial].position}
                </div>
                <div className="text-gray-400 text-sm">
                  Project: {testimonials[currentTestimonial].project}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full glass hover:bg-blue-500/20 transition-all duration-300 hover-lift"
            >
              <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full glass hover:bg-blue-500/20 transition-all duration-300 hover-lift"
            >
              <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={index}
              className={`glass-dark rounded-xl p-6 border-l-4 hover-lift card-hover animate-slide-up ${
                index === currentTestimonial 
                  ? 'border-blue-500 bg-blue-500/10' 
                  : 'border-blue-500/30'
              }`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 animate-float">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {testimonial.position}
                  </div>
                </div>
              </div>
              
              <div className="flex mb-2">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-300 text-sm mb-3">
                &ldquo;{testimonial.content.length > 120 
                  ? testimonial.content.substring(0, 120) + '...' 
                  : testimonial.content}&rdquo;
              </p>
              
              <div className="text-xs text-blue-400 font-medium">
                {testimonial.project}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-bold text-white text-center mb-8 gradient-text">
            Trusted by Growing Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              'TechStart Inc.',
              'EduTech Solutions',
              'SocialMedia Pro',
              'RestaurantTech',
              'PropertyCorp',
              'InventoryPlus'
            ].map((company, index) => (
              <div
                key={index}
                className="text-center p-4 glass rounded-xl hover-lift animate-slide-up"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="text-gray-300 font-semibold text-sm hover:text-white transition-colors duration-300">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 glass-dark rounded-xl p-8 text-white animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-scale-in" style={{ animationDelay: '1.7s' }}>
                <div className="text-3xl font-bold mb-2 gradient-text">100%</div>
                <div className="text-gray-300">Project Success Rate</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '1.9s' }}>
                <div className="text-3xl font-bold mb-2 gradient-text-secondary">15+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '2.1s' }}>
                <div className="text-3xl font-bold mb-2 gradient-text">5.0</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
