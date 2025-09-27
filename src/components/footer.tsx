import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'MERN Stack Development', href: '#services' },
      { name: 'Frontend Development', href: '#services' },
      { name: 'Backend Development', href: '#services' },
      { name: 'Database Solutions', href: '#services' }
    ],
    portfolio: [
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'GitHub', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'Stack Overflow', href: '#' },
      { name: 'Blog', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'GitHub', href: '#', icon: '🐙' },
    { name: 'Stack Overflow', href: '#', icon: '🔍' },
    { name: 'Twitter', href: '#', icon: '🐦' }
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-gray-900 to-black">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Developer Info */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="mb-6">
              <Link href="#home" className="text-2xl font-bold gradient-text hover-glow">
                Your Name
              </Link>
              <p className="text-gray-400 mt-2 text-sm">
                Senior MERN Stack Developer
              </p>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Building scalable, modern web applications with MongoDB, Express.js, React, and Node.js. 
              Passionate about clean code and exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 hover-lift animate-float"
                  aria-label={social.name}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4 gradient-text-secondary">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index} className="animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover-glow"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Portfolio</h3>
            <ul className="space-y-2">
              {footerLinks.portfolio.map((link, index) => (
                <li key={index} className="animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover-glow"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold mb-4 gradient-text-secondary">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index} className="animate-fade-in" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover-glow"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/10 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2 gradient-text">Follow My Work</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get updates on my latest MERN stack projects and development insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 glass border border-white/20 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500/50 text-sm text-white placeholder-gray-400"
              />
              <button className="btn-animate text-white px-6 py-2 rounded-r-lg hover-lift text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © {currentYear} Your Name. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover-glow">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover-glow">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm hover-glow">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
