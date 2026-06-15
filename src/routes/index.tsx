import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'ZENTROX DEVELOPER PRIVATE LIMITED – Innovative IT Solutions & Software Development' },
      { name: 'description', content: 'Leading IT solutions provider offering custom software development, software licensing, database solutions, web & mobile app development, and IT consulting services in India.' },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <ServicesSection />
      <StatsSection />
      <WhyUsSection />
      <SolutionsPreview />
      <InquirySection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-600 opacity-20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-400 opacity-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-brand-700 bg-opacity-60 text-brand-200 text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-brand-500 border-opacity-40">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Trusted IT Solutions Partner across India
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Innovative IT Solutions,<br />
            <span className="text-brand-300">Software Development</span><br />
            & Licensing Services
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Empowering businesses through custom software development, technology consulting, software licensing, database management, and digital transformation solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link to="/contact" className="btn-outline text-base px-8 py-3.5">
              Contact Us
            </Link>
          </div>
          {/* Quick features */}
          <div className="flex flex-wrap gap-6 mt-12">
            {['ISO-Quality Assured', '24/7 Technical Support', 'India & Global Clients', 'Agile Delivery'].map((f) => (
              <div key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60V30C360 0 1080 60 1440 30V60H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

function TrustedSection() {
  const techs = ['React', 'Node.js', 'Python', 'Java', 'AWS', 'PostgreSQL', 'MongoDB', '.NET', 'Flutter', 'Docker']
  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm font-medium mb-8 uppercase tracking-wider">Technologies We Work With</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {techs.map((t) => (
            <span key={t} className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 text-sm font-semibold hover:border-brand-300 hover:text-brand-700 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: (
      <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Software Development',
    desc: 'Custom enterprise software, SaaS platforms, and bespoke applications built to your exact specifications.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Web Application Development',
    desc: 'Responsive, high-performance web applications and corporate websites built with modern frameworks.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile applications for Android and iOS with seamless user experiences.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Software Licensing',
    desc: 'End-to-end software licensing solutions including subscription models, enterprise licenses, and rights management.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    title: 'Database Solutions',
    desc: 'Database design, administration, migration, and optimization services for relational and NoSQL databases.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Software Downloads & Distribution',
    desc: 'Managed software deployment, version management, and distribution infrastructure for your products.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'IT Consulting',
    desc: 'Strategic technology advisory, digital transformation planning, and solution architecture consulting.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'IT Design Services',
    desc: 'System design, UI/UX design, solution architecture, and digital transformation strategy.',
  },
]

function ServicesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Comprehensive IT Services</h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From concept to deployment, we deliver end-to-end technology solutions tailored to your business requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-xl p-6 border border-slate-100 card-hover">
              <div className="icon-bg mb-4">{s.icon}</div>
              <h3 className="font-heading font-semibold text-slate-900 text-base mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">
            View All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: '200+', label: 'Projects Delivered', icon: '🚀' },
  { value: '150+', label: 'Happy Clients', icon: '😊' },
  { value: '15+', label: 'Technology Stacks', icon: '⚙️' },
  { value: '24/7', label: 'Support Availability', icon: '🛡️' },
]

function StatsSection() {
  return (
    <section className="hero-gradient py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl mb-2">{s.icon}</div>
              <div className="stat-value text-4xl text-white mb-1">{s.value}</div>
              <div className="text-brand-300 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const whyUs = [
  { title: 'Experienced Team', desc: 'Our developers and consultants bring years of industry experience across multiple technology domains.' },
  { title: 'Agile Methodology', desc: 'We follow agile development practices ensuring fast delivery, transparency, and flexibility to changes.' },
  { title: 'Quality Assurance', desc: 'Rigorous testing and quality assurance processes at every stage of development.' },
  { title: 'On-Time Delivery', desc: 'We respect your timelines and consistently deliver projects on schedule without compromising quality.' },
  { title: 'Competitive Pricing', desc: 'Premium technology solutions at competitive prices designed to fit businesses of all sizes.' },
  { title: 'Long-term Support', desc: 'Ongoing maintenance, updates, and 24/7 technical support after project delivery.' },
]

function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
              Your Trusted Technology Partner
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-slate-600 leading-relaxed mb-8">
              ZENTROX DEVELOPER PRIVATE LIMITED combines deep technical expertise with a client-centric approach to deliver IT solutions that drive real business results. We partner with you from ideation through deployment and beyond.
            </p>
            <Link to="/about" className="btn-primary">
              Learn About Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          <div className="mt-12 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">{w.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const solutions = [
  { label: 'Retail', icon: '🛒' },
  { label: 'Healthcare', icon: '🏥' },
  { label: 'Education', icon: '🎓' },
  { label: 'Finance', icon: '💼' },
  { label: 'Manufacturing', icon: '🏭' },
  { label: 'Logistics', icon: '🚚' },
  { label: 'Startups', icon: '🚀' },
  { label: 'E-Commerce', icon: '🛍️' },
]

function SolutionsPreview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Industry Solutions</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Tailored for Your Industry
          </h2>
          <div className="section-divider mx-auto" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {solutions.map((s) => (
            <Link key={s.label} to="/solutions" className="bg-white rounded-xl p-4 text-center border border-slate-100 card-hover no-underline group">
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="text-xs font-medium text-slate-700 group-hover:text-brand-600 transition-colors">{s.label}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/solutions" className="btn-primary">
            Explore Solutions
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

function InquirySection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '', 'bot-field': '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')
    try {
      const resp = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'inquiry', ...formData }).toString(),
      })
      if (resp.ok) {
        setFormState('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '', 'bot-field': '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Start Your Project Today</h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-slate-600">Tell us about your project and we'll get back to you within 24 hours.</p>
        </div>

        {formState === 'success' ? (
          <div className="text-center py-12 bg-green-50 rounded-2xl border border-green-200">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-heading font-bold text-xl text-green-800 mb-2">Inquiry Submitted!</h3>
            <p className="text-green-700">Thank you! Our team will contact you within 24 hours.</p>
          </div>
        ) : (
          <form
            name="inquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
          >
            <input type="hidden" name="form-name" value="inquiry" />
            <p className="hidden"><input name="bot-field" value={formData['bot-field']} onChange={e => setFormData(d => ({ ...d, 'bot-field': e.target.value }))} /></p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={e => setFormData(d => ({ ...d, name: e.target.value }))} placeholder="Your full name" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                <input type="email" name="email" required value={formData.email} onChange={e => setFormData(d => ({ ...d, email: e.target.value }))} placeholder="your@email.com" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={e => setFormData(d => ({ ...d, phone: e.target.value }))} placeholder="+91 XXXXX XXXXX" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                <select name="service" value={formData.service} onChange={e => setFormData(d => ({ ...d, service: e.target.value }))} className="form-input">
                  <option value="">Select a service</option>
                  <option>Software Development</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Software Licensing</option>
                  <option>Database Solutions</option>
                  <option>IT Consulting</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
              <textarea name="message" rows={4} value={formData.message} onChange={e => setFormData(d => ({ ...d, message: e.target.value }))} placeholder="Describe your project requirements..." className="form-input resize-none" />
            </div>
            {formState === 'error' && (
              <p className="text-red-600 text-sm mb-4">Something went wrong. Please try again or email us directly.</p>
            )}
            <button type="submit" disabled={formState === 'submitting'} className="btn-primary w-full justify-center text-base py-3.5">
              {formState === 'submitting' ? 'Sending...' : 'Request a Consultation'}
              {formState !== 'submitting' && (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
