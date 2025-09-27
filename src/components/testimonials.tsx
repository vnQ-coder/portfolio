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
      content: 'Working with Your Name was an absolute game-changer for our startup. The team delivered a robust e-commerce platform that exceeded our expectations. Their technical expertise and attention to detail are unmatched.',
      rating: 5,
      project: 'E-commerce Platform'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, FinanceFlow',
      company: 'FinanceFlow',
      image: '/api/placeholder/80/80',
      content: 'The mobile banking app they developed for us has transformed our customer experience. The security features and user interface are outstanding. We\'ve seen a 40% increase in user engagement since launch.',
      rating: 5,
      project: 'Mobile Banking App'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Manager, HealthTech Solutions',
      company: 'HealthTech Solutions',
      image: '/api/placeholder/80/80',
      content: 'Their healthcare management system has streamlined our operations significantly. The HIPAA compliance and telemedicine features are exactly what we needed. Highly professional and reliable team.',
      rating: 5,
      project: 'Healthcare Management System'
    },
    {
      name: 'David Thompson',
      position: 'Founder, RealEstate Pro',
      company: 'RealEstate Pro',
      image: '/api/placeholder/80/80',
      content: 'The real estate platform they built has revolutionized how we manage properties and interact with clients. The virtual tour feature is incredible and has increased our sales by 60%.',
      rating: 5,
      project: 'Real Estate Platform'
    },
    {
      name: 'Lisa Wang',
      position: 'VP Engineering, DataCorp',
      company: 'DataCorp',
      image: '/api/placeholder/80/80',
      content: 'The AI analytics dashboard they created has given us insights we never had before. The machine learning models are highly accurate and the interface is intuitive. Excellent work!',
      rating: 5,
      project: 'AI Analytics Dashboard'
    },
    {
      name: 'Robert Martinez',
      position: 'IT Director, Enterprise Corp',
      company: 'Enterprise Corp',
      image: '/api/placeholder/80/80',
      content: 'Their cloud migration project was flawless. They moved our entire infrastructure to AWS with zero downtime and improved performance by 300%. Outstanding technical expertise.',
      rating: 5,
      project: 'Cloud Migration'
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
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients say about working with me and my team.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-2">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className="text-lg text-gray-700 mb-4 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-blue-600 text-sm">
                  {testimonials[currentTestimonial].position}
                </div>
                <div className="text-gray-500 text-sm">
                  Project: {testimonials[currentTestimonial].project}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${
                index === currentTestimonial 
                  ? 'border-blue-600 bg-blue-50' 
                  : 'border-gray-200'
              } hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.position}
                  </div>
                </div>
              </div>
              
              <div className="flex mb-2">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-600 text-sm mb-3">
                "{testimonial.content.length > 120 
                  ? testimonial.content.substring(0, 120) + '...' 
                  : testimonial.content}"
              </p>
              
              <div className="text-xs text-blue-600 font-medium">
                {testimonial.project}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              'TechStart Inc.',
              'FinanceFlow',
              'HealthTech Solutions',
              'RealEstate Pro',
              'DataCorp',
              'Enterprise Corp'
            ].map((company, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-gray-700 font-semibold text-sm">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-green-100">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-green-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5.0</div>
              <div className="text-green-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
