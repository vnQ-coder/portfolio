const Services = () => {
  const services = [
    {
      title: 'MERN Stack Development',
      description: 'Full-stack web applications built with MongoDB, Express.js, React, and Node.js. Scalable, modern solutions with robust architecture.',
      icon: '⚡',
      features: [
        'MongoDB Database Design',
        'Express.js API Development',
        'React Frontend Applications',
        'Node.js Backend Services',
        'Real-time Applications',
        'RESTful & GraphQL APIs'
      ]
    },
    {
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces built with React, TypeScript, and cutting-edge frontend technologies.',
      icon: '🎨',
      features: [
        'React & Next.js Applications',
        'TypeScript Development',
        'Responsive UI/UX Design',
        'State Management (Redux, Context)',
        'Component Libraries',
        'Performance Optimization'
      ]
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side applications with Node.js, Express.js, and scalable database solutions.',
      icon: '🔧',
      features: [
        'Node.js & Express.js APIs',
        'Database Design & Optimization',
        'Authentication & Authorization',
        'Microservices Architecture',
        'API Documentation',
        'Error Handling & Logging'
      ]
    },
    {
      title: 'Database Solutions',
      description: 'Expert MongoDB development with Mongoose ODM, data modeling, and performance optimization.',
      icon: '🗄️',
      features: [
        'MongoDB Schema Design',
        'Mongoose ODM Integration',
        'Database Performance Tuning',
        'Data Migration & Backup',
        'Indexing Strategies',
        'Query Optimization'
      ]
    },
    {
      title: 'DevOps & Deployment',
      description: 'Cloud deployment and DevOps solutions using AWS, Docker, and modern CI/CD practices.',
      icon: '☁️',
      features: [
        'AWS Cloud Services',
        'Docker Containerization',
        'CI/CD Pipeline Setup',
        'Environment Configuration',
        'Monitoring & Logging',
        'Security Implementation'
      ]
    },
    {
      title: 'Code Review & Mentoring',
      description: 'Technical leadership, code reviews, and mentoring to ensure high-quality development practices.',
      icon: '👨‍💻',
      features: [
        'Code Quality Reviews',
        'Technical Architecture Guidance',
        'Team Mentoring',
        'Best Practices Implementation',
        'Performance Audits',
        'Security Assessments'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden section-transition">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4 gradient-text">Development Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack MERN development services tailored to build scalable, modern web applications that drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-dark rounded-xl p-6 hover-lift card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 w-full btn-animate text-white py-2 px-4 rounded-lg font-semibold hover-lift">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 animate-fade-in" style={{ animationDelay: '1s' }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12 gradient-text">Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: 1, title: "Analysis", description: "Understanding your requirements, technical specifications, and defining the project architecture." },
              { number: 2, title: "Design", description: "Creating database schemas, API structure, and UI/UX wireframes for the application." },
              { number: 3, title: "Development", description: "Building the full-stack application using MERN technologies with regular code reviews and testing." },
              { number: 4, title: "Deploy", description: "Deploying to production with CI/CD pipelines and providing ongoing maintenance and support." }
            ].map((step, index) => (
              <div key={index} className="text-center animate-slide-up hover-lift" style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-rose-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold animate-pulse-glow hover-glow">
                  {step.number}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="glass-dark rounded-xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-rose-500/20 rounded-xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Build Your Next App?</h3>
              <p className="text-lg mb-6 text-gray-300">
                Let&apos;s discuss how I can help you build a scalable, modern web application using the MERN stack.
              </p>
              <button className="btn-animate text-white px-8 py-3 rounded-lg font-semibold hover-lift">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
