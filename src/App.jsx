import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Zap, Settings, Rocket, Ship, Factory, Brain, BarChart3, Users, FileText, ArrowRight } from 'lucide-react';

const WATTApp = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Divisions', id: 'divisions' },
    { name: 'Projects', id: 'projects' },
    { name: 'Research', id: 'research' },
    { name: 'Careers', id: 'careers' },
    { name: 'About', id: 'about' }
  ];

  const divisions = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Energy',
      description: 'Large-scale electricity generation and cross-border power infrastructure. Operating across Africa with global capability.',
      capabilities: ['Power Generation', 'Grid Infrastructure', 'Transmission Systems', 'Energy Analytics']
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Mining Systems',
      description: 'Advanced machinery and automation systems for industrial-scale mining operations.',
      capabilities: ['Extraction Systems', 'Processing Equipment', 'Safety Systems', 'Remote Operations']
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Aerospace Systems',
      description: 'Propulsion, guidance, and structural systems for aerospace applications.',
      capabilities: ['Propulsion Engineering', 'Avionics Systems', 'Structural Design', 'Testing Facilities']
    },
    {
      icon: <Ship className="w-8 h-8" />,
      title: 'Marine Systems',
      description: 'Marine propulsion, navigation, and autonomous vessel technology.',
      capabilities: ['Marine Propulsion', 'Navigation Systems', 'Autonomous Control', 'Power Systems']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Automation & Intelligence',
      description: 'AI-driven systems for industrial automation and intelligent infrastructure.',
      capabilities: ['Industrial AI', 'Predictive Analytics', 'Smart Infrastructure', 'Process Optimization']
    }
  ];

  const projects = [
    {
      title: 'Cross-Border Energy Interconnector',
      region: 'West Africa',
      capacity: '2,400 MW',
      status: 'Operational',
      year: '2024'
    },
    {
      title: 'Integrated Power Complex',
      region: 'Central Africa',
      capacity: '1,800 MW',
      status: 'Under Construction',
      year: '2025'
    },
    {
      title: 'Smart Grid Infrastructure',
      region: 'East Africa',
      capacity: '3,200 MW',
      status: 'Engineering Phase',
      year: '2026'
    }
  ];

  const stats = [
    { value: '12+', label: 'Countries of Operation' },
    { value: '8.5 GW', label: 'Generation Capacity' },
    { value: '2,400+', label: 'Engineering Professionals' },
    { value: '99.97%', label: 'System Reliability' }
  ];

  const ScrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img
                src="/logo/watt-logo1.png"
                alt="WATT Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="text-2xl font-bold tracking-tight">WATT</div>
                <div className="text-xs text-gray-400 tracking-wide">TBAF HOLDINGS</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => ScrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${activeSection === item.id ? 'text-orange-500' : 'text-gray-300 hover:text-white'}`}
                >
                  {item.name}
                </button>
              ))}
              <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
                Portal Login
              </button>
            </div>

            <button
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/98 backdrop-blur-lg border-t border-gray-800">
            <div className="px-6 py-6 space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => ScrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-white py-2"
                >
                  {item.name}
                </button>
              ))}
              <button className="w-full bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg text-sm font-medium">
                Portal Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center mb-4">
              <img
                src="/logo/watt-logo2.png"
                alt="WATT Logo"
                className="w-90 h-90 lg:w-96 lg:h-96 object-contain -mb-12"
              />
              <h1 className="text-7xl lg:text-9xl font-bold mb-2 tracking-tighter">
                WATT
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-400 tracking-wide font-light">
              Engineering Science Through Technology
            </p>
          </div>
        </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
              An integrated global engineering and energy company designing advanced systems for mining, aerospace, marine, and intelligent infrastructure. Operating large-scale electricity generation and cross-border power infrastructure across Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => ScrollToSection('divisions')} className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">
                Explore Divisions <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button onClick={() => ScrollToSection('projects')} className="border border-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                View Projects
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section id="divisions" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-4">Divisions</h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Integrated engineering capabilities across energy, industrial systems, and advanced technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {divisions.map((division, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group">
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                  {division.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{division.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{division.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {division.capabilities.map((cap, i) => (
                    <div key={i} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                      {cap}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-4">Infrastructure</h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Large-scale power generation and cross-border energy infrastructure projects.
            </p>
          </div>

          <div className="space-y-4">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gradient-to-r from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-8 hover:border-orange-500/50 transition-all group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.region}</p>
                  </div>
                  <div className="flex flex-wrap gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-orange-500">{project.capacity}</div>
                      <div className="text-xs text-gray-500">Capacity</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-500">{project.status}</div>
                      <div className="text-xs text-gray-500">Status</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{project.year}</div>
                      <div className="text-xs text-gray-500">Target</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">Research & Innovation</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Our engineering research labs focus on next-generation energy systems, AI-driven industrial optimization, and sustainable technology integration.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Advanced materials for high-efficiency power systems</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Machine learning for predictive grid management</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Autonomous systems for industrial operations</span>
                </li>
              </ul>
              <button className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center">
                View Research Papers <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 rounded-xl p-6">
                <BarChart3 className="w-8 h-8 text-orange-500 mb-3" />
                <div className="text-3xl font-bold mb-2">42+</div>
                <div className="text-sm text-gray-400">Active Research Projects</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/30 rounded-xl p-6">
                <Users className="w-8 h-8 text-blue-500 mb-3" />
                <div className="text-3xl font-bold mb-2">180+</div>
                <div className="text-sm text-gray-400">Research Scientists</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-transparent border border-green-500/30 rounded-xl p-6">
                <FileText className="w-8 h-8 text-green-500 mb-3" />
                <div className="text-3xl font-bold mb-2">230+</div>
                <div className="text-sm text-gray-400">Published Papers</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 rounded-xl p-6">
                <Settings className="w-8 h-8 text-purple-500 mb-3" />
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="text-sm text-gray-400">Patents Filed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-24 px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">Engineering Careers</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Join world-class engineers building the future of industrial technology and energy infrastructure.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">Electrical Engineering</h3>
              <p className="text-gray-400 mb-4">Power systems, grid infrastructure, and energy analytics</p>
              <button className="text-orange-500 hover:text-orange-400 font-semibold flex items-center mx-auto">
                View Roles <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">Systems Engineering</h3>
              <p className="text-gray-400 mb-4">Industrial automation, controls, and AI integration</p>
              <button className="text-orange-500 hover:text-orange-400 font-semibold flex items-center mx-auto">
                View Roles <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">Research & Development</h3>
              <p className="text-gray-400 mb-4">Next-generation technologies and materials science</p>
              <button className="text-orange-500 hover:text-orange-400 font-semibold flex items-center mx-auto">
                View Roles <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
            Explore All Positions
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold mb-12 text-center">About WATT</h2>
          
          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <p>
              WATT is an integrated global engineering and energy company operating under TBAF Holdings (The Blessed Amofa Family Holdings). We design, manufacture, and deploy advanced machinery, propulsion systems, and intelligent infrastructure across multiple industrial sectors.
            </p>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Engineering Philosophy</h3>
              <p className="text-gray-400">
                We believe in engineering-first design, where technical excellence drives innovation. Our systems are built for reliability, scalability, and long-term performance in demanding environments. We prioritize substance over marketing, delivering real infrastructure that powers economies and enables progress.
              </p>
            </div>
            
            <p>
              Our energy division operates large-scale electricity generation facilities and cross-border transmission infrastructure, with a strong operational focus in Africa and the capability to serve other regions globally. We design and build our own generation equipment, control systems, and grid technology.
            </p>
            
            <p>
              WATT does not sell its internal equipment publicly. We deliver electricity, industrial services, and large-scale engineering infrastructure to governments, utilities, and industrial partners.
            </p>
            
            <div className="bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 pl-6 py-4">
              <p className="text-white font-semibold text-xl">
                "Engineering Science Through Technology"
              </p>
              <p className="text-gray-400 mt-2">
                Our motto reflects our commitment to applying rigorous scientific principles through advanced technology to solve complex engineering challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo/watt-logo1.png"
                  alt="WATT Logo"
                  className="w-12 h-12 object-contain"
                />
                <div className="text-xl font-bold">WATT</div>
              </div>
              <p className="text-sm text-gray-500">Engineering Science Through Technology</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Divisions</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Energy</li>
                <li>Mining Systems</li>
                <li>Aerospace</li>
                <li>Marine</li>
                <li>Automation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>About</li>
                <li>Research</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-900 pt-8 text-center text-sm text-gray-600">
            <p>© 2026 WATT. A TBAF Holdings Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WATTApp;
