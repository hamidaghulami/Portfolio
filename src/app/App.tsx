import { useState, useEffect } from 'react';
import { Mail, Code2, Briefcase, User, ChevronDown, Sparkles, Heart, GraduationCap, Languages, Phone, MapPin } from 'lucide-react';
import { Button } from './components/ui/button';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const competencies = [
    {
      title: 'Web Design and Development',
      items: ['HTML', 'CSS', 'PHP', 'JavaScript', 'ASP.NET', 'WordPress', 'CodeIgniter', 'Adobe Dreamweaver'],
    },
    {
      title: 'Graphic and Multimedia Design',
      items: ['Adobe Photoshop', 'Adobe Premiere', 'Adobe Flash', 'Ulead Video Studio'],
    },
    {
      title: 'IT and Networking',
      items: ['Network setup', 'Server hosting', 'Email creation', 'Security checks'],
    },
    {
      title: 'Hardware and Software Support',
      items: ['Troubleshooting', 'Installation', 'Maintenance'],
    },
    {
      title: 'Office and Productivity Tools',
      items: ['Microsoft Office Suite', 'Windows', 'Mac OS'],
    },
    {
      title: 'Digital Media Management',
      items: ['Social media pages', 'Group management', 'Content creation'],
    },
  ];

  const workItems = [
    {
      title: 'Web Flow Web Designing Services (2021-2022)',
      role: 'Web Developer and Designer',
      points: [
        'Designed responsive websites with HTML, CSS, PHP, JavaScript, and WordPress.',
        'Implemented UI and UX improvements to improve user experience.',
        'Managed hosting, server security, and email creation for clients.',
        'Translated business needs into functional web solutions with clients.',
      ],
      highlights: ['Corporate website layouts', 'E-commerce templates', 'Portfolio branding sites'],
      quote: 'Web Developer and Designer at Web Flow Web Designing Services.',
    },
    {
      title: 'Multimedia and Graphic Design',
      role: 'Creative Design Specialist',
      points: [
        'Built logo and brand identity assets for multiple use cases.',
        'Designed social graphics and promotional banners.',
        'Produced short video edits and multimedia presentations.',
        'Created educational visual content for IT training.',
      ],
      highlights: ['Photoshop', 'Premiere', 'Flash', 'Ulead Video Studio'],
      quote: 'Designing with Adobe Photoshop, Adobe Premiere, Adobe Flash, and Ulead Video Studio.',
    },
    {
      title: 'Irshad High School (2018-2019)',
      role: 'IT Instructor',
      points: [
        'Prepared lesson plans for computer literacy and web fundamentals.',
        'Built visual teaching materials and practical lab exercises.',
        'Trained students in operating systems, MS Office, and networking basics.',
      ],
      highlights: ['IT instruction', 'Teaching materials', 'Hands-on training'],
      quote: 'IT instructor at Irshad High School from 20 March 2018 to 20 March 2019.',
    },
    {
      title: 'Independent Election Commission of Afghanistan (2019-2020)',
      role: 'Bayometric Employee and Admin Writer',
      points: [
        'Prepared official documents, reports, and digital records.',
        'Handled biometric systems and data entry workflows.',
        'Supported IT operations during election process periods.',
      ],
      highlights: ['Documentation', 'Biometric workflows', 'Operational IT support'],
      quote: 'Admin writer at the Independent Election Commission of Afghanistan.',
    },
  ];

  const strengths = [
    'Strong interpersonal and communication skills.',
    'Excellent time and project management.',
    'Able to work independently or in collaborative teams.',
    'Fast learner with adaptability to new technologies.',
  ];

  const navLinks = ['home', 'about', 'competencies', 'work', 'contact'];

  return (
    <div className="size-full overflow-y-auto" style={{ background: '#0f0f1a', color: '#e2e8f0' }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(15,15,26,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(139,92,246,0.2)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" style={{ color: '#a78bfa' }} />
            <span className="font-bold text-lg tracking-wide" style={{ color: '#e2e8f0' }}>HG</span>
          </div>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="capitalize text-sm font-medium transition-all duration-200"
                style={{
                  color: activeSection === link ? '#a78bfa' : '#94a3b8',
                  textShadow: activeSection === link ? '0 0 12px rgba(167,139,250,0.6)' : 'none',
                }}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ width: 480, height: 480, background: '#7c3aed', top: '-80px', left: '-120px' }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ width: 360, height: 360, background: '#0ea5e9', bottom: '60px', right: '-80px' }}
        />

        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#a78bfa' }}>
              ✦ Full Stack Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Hi, I'm{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a78bfa 0%, #38bdf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hamida
              </span>
              <br />
              <span style={{ color: '#e2e8f0' }}>Ghulami</span>
            </h1>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: '#94a3b8', maxWidth: 480 }}>
              Computer Science graduate blending creativity with technical precision across web development,
              multimedia design, IT instruction, and administrative technology roles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('work')}
                size="lg"
                className="font-semibold px-8"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', border: 'none', color: '#fff' }}
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="font-semibold px-8"
                style={{ borderColor: '#a78bfa', color: '#a78bfa', background: 'transparent' }}
              >
                Let's Talk
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                width: 360,
                height: 400,
                boxShadow: '0 0 60px rgba(124,58,237,0.35)',
                border: '2px solid rgba(167,139,250,0.25)',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(56,189,248,0.15))',
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div
                  className="rounded-full size-48 flex items-center justify-center text-7xl font-extrabold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.45), rgba(56,189,248,0.45))',
                    color: '#f8fafc',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  HG
                </div>
              </div>
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(15,15,26,0.85) 100%)' }}
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute bottom-6 left-0 rounded-2xl px-5 py-3 shadow-xl"
              style={{
                background: 'rgba(15,15,26,0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(167,139,250,0.3)',
              }}
            >
              <p className="text-xs font-medium" style={{ color: '#a78bfa' }}>Open to opportunities</p>
              <p className="text-sm font-bold" style={{ color: '#e2e8f0' }}>Based in Kabul, Afghanistan</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60"
        >
          <ChevronDown className="w-7 h-7" style={{ color: '#a78bfa' }} />
        </button>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        className="py-24 px-6"
        style={{ background: 'rgba(139,92,246,0.04)' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <User className="w-7 h-7" style={{ color: '#a78bfa' }} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#94a3b8' }}>
                I am Hamida Gholami, a Computer Science graduate with a strong foundation in web development,
                multimedia design, IT instruction, and administrative technology roles.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#94a3b8' }}>
                My work blends creativity with technical precision, shaped by hands-on experience in education,
                multimedia design, and professional web design services.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
                With a TOEFL score of 101, strong communication skills, and fluency in English, Farsi, and Pashto,
                I bring both technical expertise and cross-cultural communication strength to every team and classroom.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '101', label: 'TOEFL Score' },
                { value: '3', label: 'Languages' },
                { value: '4+', label: 'Role Areas' },
                { value: '2018+', label: 'Professional Track' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-6 text-center"
                  style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}
                >
                  <p className="text-4xl font-extrabold mb-1" style={{ color: '#a78bfa' }}>{stat.value}</p>
                  <p className="text-sm" style={{ color: '#64748b' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Competencies ── */}
      <section id="competencies" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="w-7 h-7" style={{ color: '#38bdf8' }} />
            <h2 className="text-4xl font-bold">Core Competencies</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {competencies.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl p-5"
                style={{ background: 'rgba(15,15,26,0.6)', border: '1px solid rgba(56,189,248,0.15)' }}
              >
                <h3 className="font-semibold mb-3" style={{ color: '#e2e8f0' }}>{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: 'rgba(56,189,248,0.16)', color: '#bae6fd', border: '1px solid rgba(56,189,248,0.2)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section
        id="work"
        className="py-24 px-6"
        style={{ background: 'rgba(139,92,246,0.04)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-7 h-7" style={{ color: '#a78bfa' }} />
            <h2 className="text-4xl font-bold">Selected Creative and Technical Work</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            {workItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl overflow-hidden group transition-all duration-300"
                style={{
                  background: 'rgba(15,15,26,0.7)',
                  border: '1px solid rgba(167,139,250,0.15)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(124,58,237,0.35)';
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(167,139,250,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(167,139,250,0.15)';
                }}
              >
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#e2e8f0' }}>{item.title}</h3>
                  <p className="text-sm mb-4" style={{ color: '#a78bfa' }}>{item.role}</p>
                  <ul className="text-sm mb-4 leading-relaxed space-y-2" style={{ color: '#94a3b8' }}>
                    {item.points.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ background: 'rgba(124,58,237,0.2)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.2)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs mt-4 italic" style={{ color: '#64748b' }}>
                    {item.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strengths and Additional Info ── */}
      <section id="strengths" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-7">
          <div
            className="rounded-2xl p-7"
            style={{ background: 'rgba(15,15,26,0.6)', border: '1px solid rgba(56,189,248,0.15)' }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Languages className="w-6 h-6" style={{ color: '#38bdf8' }} />
              <h3 className="text-2xl font-bold">Professional Strengths</h3>
            </div>
            <ul className="space-y-3" style={{ color: '#94a3b8' }}>
              {strengths.map((entry) => (
                <li key={entry}>- {entry}</li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl p-7"
            style={{ background: 'rgba(15,15,26,0.6)', border: '1px solid rgba(167,139,250,0.2)' }}
          >
            <div className="flex items-center gap-3 mb-5">
              <GraduationCap className="w-6 h-6" style={{ color: '#a78bfa' }} />
              <h3 className="text-2xl font-bold">Additional Academic Offer</h3>
            </div>
            <p style={{ color: '#94a3b8' }}>
              In 2022, I received an offer from the University of Limerick for a program in DevOps and Data Analytics.
              At that time, I prioritized work commitments and could not pursue the program.
            </p>
          </div>

          <div
            className="rounded-2xl p-7 lg:col-span-2"
            style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(167,139,250,0.2)' }}
          >
            <h3 className="text-2xl font-bold mb-4">References</h3>
            <ul className="space-y-3" style={{ color: '#cbd5e1' }}>
              <li>- Zia Ahmad Nikzad, Secretariat Office Director, Independent Election Commission of Afghanistan.</li>
              <li>- Ruhullah Fasihi, CEO and Founder, Web Flow Web Designing Services.</li>
              <li>- References available upon request.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail className="w-7 h-7" style={{ color: '#38bdf8' }} />
            <h2 className="text-4xl font-bold">Let's Connect</h2>
          </div>
          <p className="text-lg mb-12" style={{ color: '#94a3b8' }}>
            This portfolio reflects my journey as a creative technologist, combining design, development,
            IT expertise, and communication skills. I am committed to high-quality digital solutions and continuous growth.
          </p>

          <div
            className="rounded-3xl p-10 mb-10"
            style={{
              background: 'rgba(15,15,26,0.7)',
              border: '1px solid rgba(167,139,250,0.2)',
              boxShadow: '0 0 60px rgba(124,58,237,0.15)',
            }}
          >
            <p className="text-2xl font-bold mb-2" style={{ color: '#a78bfa' }}>HamidaGholami90@gmail.com</p>
            <p className="text-sm mb-8" style={{ color: '#64748b' }}>Available for projects, training, and consulting</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:HamidaGholami90@gmail.com">
                <Button
                  size="lg"
                  className="gap-2 font-semibold"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', border: 'none', color: '#fff' }}
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
              </a>
              <a href="tel:+93789535272">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 font-semibold"
                  style={{ borderColor: '#38bdf8', color: '#38bdf8', background: 'transparent' }}
                >
                  <Phone className="w-5 h-5" />
                  +93 (0) 789 535 272
                </Button>
              </a>
              <div
                className="px-4 py-3 rounded-xl flex items-center gap-2"
                style={{ border: '1px solid rgba(148,163,184,0.35)', color: '#cbd5e1' }}
              >
                <MapPin className="w-4 h-4" />
                Dasht-e-Barchi, Kabul, Afghanistan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-center"
        style={{ borderTop: '1px solid rgba(167,139,250,0.1)', background: 'rgba(15,15,26,0.9)' }}
      >
        <p className="text-sm flex items-center justify-center gap-1" style={{ color: '#475569' }}>
          Crafted with <Heart className="w-4 h-4 inline" style={{ color: '#a78bfa' }} /> by Hamida Ghulami &copy; 2026
        </p>
      </footer>
    </div>
  );
}