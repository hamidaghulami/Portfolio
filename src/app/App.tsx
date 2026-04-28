import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Code2, Briefcase, User, ChevronDown, Sparkles, ExternalLink, Heart } from 'lucide-react';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

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

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 92 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Next.js', level: 82 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'Git', level: 88 },
    { name: 'Figma', level: 85 },
    { name: 'REST APIs', level: 87 },
    { name: 'GraphQL', level: 72 },
  ];

  const projects = [
    {
      title: 'MindSpace – Mental Wellness App',
      description: 'A calming full-stack wellness platform with mood tracking, guided meditation timers, and personalized insight reports.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      link: 'https://github.com/hamidaghulami'
    },
    {
      title: 'TalentBridge – Job Portal',
      description: 'Smart job matching portal connecting Afghan professionals with global opportunities, featuring resume parsing and filters.',
      tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma'],
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      link: 'https://github.com/hamidaghulami'
    },
    {
      title: 'EduVerse – Learning Platform',
      description: 'Interactive e-learning platform with video courses, quizzes, progress tracking, and community discussion boards.',
      tech: ['React', 'Express', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      link: 'https://github.com/hamidaghulami'
    },
    {
      title: 'NomadCart – E-Commerce',
      description: 'Artisan marketplace celebrating Afghan crafts with multi-currency support, real-time inventory, and Stripe payments.',
      tech: ['Next.js', 'Stripe', 'Supabase', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      link: 'https://github.com/hamidaghulami'
    },
    {
      title: 'DataPulse – Analytics Dashboard',
      description: 'Real-time business intelligence dashboard with customizable widgets, export capabilities, and AI-powered trend detection.',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      link: 'https://github.com/hamidaghulami'
    },
    {
      title: 'GreenTrace – Eco Tracker',
      description: 'Carbon footprint tracking app with gamification, community challenges, and personalized sustainability recommendations.',
      tech: ['React Native', 'Firebase', 'TypeScript', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1542601906897-12b0b6cfd908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      link: 'https://github.com/hamidaghulami'
    },
  ];

  const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

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
              I craft purposeful digital experiences — blending clean code with thoughtful design
              to build products that empower users and make a real impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
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
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Hamida Ghulami"
                className="w-full h-full object-cover"
              />
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
              <p className="text-sm font-bold" style={{ color: '#e2e8f0' }}>📍 Available Worldwide</p>
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
                I'm a passionate full-stack developer with 4+ years of experience crafting scalable,
                user-centric web applications. I specialize in React and Node.js ecosystems,
                with an eye for design and an obsession for clean, maintainable code.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#94a3b8' }}>
                Driven by purpose, I love building technology that bridges gaps — whether for education,
                business, or social impact. My background spans frontend artistry to backend architecture.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
                When I'm not shipping code, I'm learning new technologies, mentoring aspiring developers,
                or hiking somewhere with a good view and even better Wi-Fi.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '20+', label: 'Projects Delivered' },
                { value: '10+', label: 'Happy Clients' },
                { value: '∞', label: 'Lines of Code' },
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

      {/* ── Skills ── */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="w-7 h-7" style={{ color: '#38bdf8' }} />
            <h2 className="text-4xl font-bold">Skills & Technologies</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-2xl p-5"
                style={{ background: 'rgba(15,15,26,0.6)', border: '1px solid rgba(56,189,248,0.15)' }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold" style={{ color: '#e2e8f0' }}>{skill.name}</span>
                  <span className="text-xs font-bold" style={{ color: '#38bdf8' }}>{skill.level}%</span>
                </div>
                <div className="rounded-full h-1.5 overflow-hidden" style={{ background: 'rgba(56,189,248,0.1)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      background: 'linear-gradient(90deg, #7c3aed, #38bdf8)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        className="py-24 px-6"
        style={{ background: 'rgba(139,92,246,0.04)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-7 h-7" style={{ color: '#a78bfa' }} />
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project) => (
              <div
                key={project.title}
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
                <div className="aspect-video overflow-hidden relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                    style={{ background: 'rgba(124,58,237,0.7)' }}
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#e2e8f0' }}>{project.title}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#64748b' }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ background: 'rgba(124,58,237,0.2)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.2)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
            I'm always excited about new projects, collaborations, and conversations.
            Drop me a message — I'd love to hear from you.
          </p>

          <div
            className="rounded-3xl p-10 mb-10"
            style={{
              background: 'rgba(15,15,26,0.7)',
              border: '1px solid rgba(167,139,250,0.2)',
              boxShadow: '0 0 60px rgba(124,58,237,0.15)',
            }}
          >
            <p className="text-2xl font-bold mb-2" style={{ color: '#a78bfa' }}>hamida.ghulami@email.com</p>
            <p className="text-sm mb-8" style={{ color: '#64748b' }}>Response guaranteed within 24 hours</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:hamida.ghulami@email.com">
                <Button
                  size="lg"
                  className="gap-2 font-semibold"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)', border: 'none', color: '#fff' }}
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
              </a>
              <a href="https://github.com/hamidaghulami" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 font-semibold"
                  style={{ borderColor: '#a78bfa', color: '#a78bfa', background: 'transparent' }}
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/hamidaghulami" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 font-semibold"
                  style={{ borderColor: '#38bdf8', color: '#38bdf8', background: 'transparent' }}
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </a>
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