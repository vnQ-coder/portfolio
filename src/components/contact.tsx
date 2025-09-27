'use client'

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        service: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: 'hello@yourname.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📱',
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: '📍',
      title: 'Location',
      details: 'San Francisco, CA',
      description: 'Available for remote work'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      details: 'linkedin.com/in/yourname',
      description: 'Connect with me professionally'
    }
  ]

  const services = [
    'MERN Stack Development',
    'Frontend Development',
    'Backend Development',
    'Database Solutions',
    'DevOps & Deployment',
    'Code Review & Mentoring',
    'Other'
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden section-transition">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4 gradient-text">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to build your next MERN stack application? Let&apos;s discuss how I can help bring your ideas to life with modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-dark rounded-xl p-8 hover-lift animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-white mb-6 gradient-text">Start Your Project</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 glass bg-green-500/20 border border-green-400/30 text-green-300 rounded-lg">
                Thank you for your message! I&apos;ll get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Development Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300 text-white bg-slate-800/50"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Describe your project requirements, timeline, and any specific MERN stack features needed..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover-lift ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'btn-animate text-white'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-white mb-6 gradient-text">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 glass-dark p-4 rounded-xl hover-lift animate-slide-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  <div className="text-2xl animate-float">{info.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{info.title}</h4>
                    <p className="text-blue-400 font-medium">{info.details}</p>
                    <p className="text-gray-300 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Development Guarantee</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Response within 24 hours
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Free technical consultation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Detailed project roadmap
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Clean, documented code
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  title="LinkedIn"
                >
                  <span className="text-lg">💼</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors duration-200"
                  title="GitHub"
                >
                  <span className="text-lg">🐙</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                  title="Stack Overflow"
                >
                  <span className="text-lg">🔍</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                  title="Twitter"
                >
                  <span className="text-lg">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12 gradient-text">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-dark rounded-xl p-6 hover-lift card-hover animate-slide-up" style={{ animationDelay: '1.7s' }}>
              <h4 className="text-lg font-semibold text-white mb-3">What&apos;s your typical MERN project timeline?</h4>
              <p className="text-gray-300">
                MERN stack projects typically take 4-12 weeks depending on complexity. Simple CRUD applications take 4-6 weeks, while complex applications with real-time features can take 8-12 weeks.
              </p>
            </div>
            <div className="glass-dark rounded-xl p-6 hover-lift card-hover animate-slide-up" style={{ animationDelay: '1.9s' }}>
              <h4 className="text-lg font-semibold text-white mb-3">Do you provide code documentation?</h4>
              <p className="text-gray-300">
                Yes! I provide comprehensive documentation including API documentation, code comments, setup instructions, and deployment guides for all projects.
              </p>
            </div>
            <div className="glass-dark rounded-xl p-6 hover-lift card-hover animate-slide-up" style={{ animationDelay: '2.1s' }}>
              <h4 className="text-lg font-semibold text-white mb-3">What MERN technologies do you specialize in?</h4>
              <p className="text-gray-300">
                I specialize in MongoDB with Mongoose, Express.js APIs, React with modern hooks, Node.js server development, and additional tools like Socket.io, JWT, and AWS deployment.
              </p>
            </div>
            <div className="glass-dark rounded-xl p-6 hover-lift card-hover animate-slide-up" style={{ animationDelay: '2.3s' }}>
              <h4 className="text-lg font-semibold text-white mb-3">Do you handle database design and optimization?</h4>
              <p className="text-gray-300">
                Absolutely! I handle MongoDB schema design, indexing strategies, query optimization, and database performance tuning to ensure your application scales efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
