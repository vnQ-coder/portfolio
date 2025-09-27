const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and TypeScript. Responsive, fast, and user-friendly solutions.',
      icon: '🌐',
      features: [
        'React & Next.js Applications',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'Custom CMS Development',
        'API Integration',
        'Performance Optimization'
      ]
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.',
      icon: '📱',
      features: [
        'React Native Development',
        'iOS & Android Apps',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ]
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions using AWS, Azure, and other leading cloud platforms.',
      icon: '☁️',
      features: [
        'AWS & Azure Migration',
        'Microservices Architecture',
        'DevOps & CI/CD',
        'Container Orchestration',
        'Database Optimization',
        'Security Implementation'
      ]
    },
    {
      title: 'Consulting & Strategy',
      description: 'Strategic technology consulting to help businesses make informed decisions and optimize their digital transformation journey.',
      icon: '💼',
      features: [
        'Technology Roadmap Planning',
        'Digital Transformation',
        'Architecture Review',
        'Team Building & Training',
        'Process Optimization',
        'Vendor Selection'
      ]
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces designed with user experience at the forefront, following modern design principles.',
      icon: '🎨',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Visual Design Systems',
        'Responsive Design',
        'Accessibility Compliance',
        'Design-to-Development Handoff'
      ]
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and 24/7 support to ensure your applications run smoothly and securely.',
      icon: '🔧',
      features: [
        'Bug Fixes & Updates',
        'Performance Monitoring',
        'Security Patches',
        'Feature Enhancements',
        '24/7 Technical Support',
        'Regular Health Checks'
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h4>
              <p className="text-gray-600 text-sm">
                Understanding your business goals, requirements, and challenges through detailed consultation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Planning</h4>
              <p className="text-gray-600 text-sm">
                Creating a detailed project roadmap with timelines, milestones, and resource allocation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Development</h4>
              <p className="text-gray-600 text-sm">
                Building your solution using agile methodologies with regular updates and feedback cycles.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Launch</h4>
              <p className="text-gray-600 text-sm">
                Deploying your solution and providing ongoing support to ensure continued success.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can help transform your ideas into reality with cutting-edge technology solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
