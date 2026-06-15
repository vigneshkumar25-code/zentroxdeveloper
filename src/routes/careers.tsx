import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/careers')({
  head: () => ({
    meta: [
      { title: 'Careers & Jobs – ZENTROX DEVELOPER PRIVATE LIMITED | Join Our Team' },
      { name: 'description', content: 'Join ZENTROX DEVELOPER PRIVATE LIMITED. Explore current openings, internship opportunities, and developer positions. Apply online for software development and IT roles in Lucknow.' },
    ],
  }),
  component: CareersPage,
})

function CareersPage() {
  return (
    <>
      <PageHero />
      <WhyJoinUs />
      <OpenPositions />
      <ApplySection />
    </>
  )
}

function PageHero() {
  return (
    <section className="hero-gradient text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%"><defs><pattern id="g8" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#g8)"/></svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-brand-700 bg-opacity-60 text-brand-200 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-brand-500 border-opacity-40">Join Our Team</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-5">Build Your Career at ZENTROX</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">Join a passionate team of technology professionals building innovative software solutions that make a real difference for businesses across India and beyond.</p>
      </div>
    </section>
  )
}

function WhyJoinUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Life at Zentrox</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Work With Us?</h2>
          <div className="section-divider mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🚀', title: 'Exciting Projects', desc: 'Work on diverse, challenging projects spanning multiple industries and technology domains — no two days are the same.' },
            { icon: '📚', title: 'Continuous Learning', desc: 'Access to training resources, certifications, conferences, and mentorship programs to accelerate your professional growth.' },
            { icon: '🤝', title: 'Collaborative Culture', desc: 'A supportive, inclusive team environment where ideas are valued, collaboration is encouraged, and everyone\'s voice matters.' },
            { icon: '💰', title: 'Competitive Compensation', desc: 'Market-competitive salaries, performance bonuses, and equity opportunities for senior roles.' },
            { icon: '⚖️', title: 'Work-Life Balance', desc: 'Flexible working arrangements, generous leave policies, and a culture that respects boundaries and personal time.' },
            { icon: '🌐', title: 'Global Exposure', desc: 'Opportunity to work with clients across India and internationally, gaining valuable cross-cultural business experience.' },
          ].map((b) => (
            <div key={b.title} className="bg-slate-50 rounded-xl p-7 border border-slate-100 card-hover">
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="font-heading font-semibold text-slate-900 text-base mb-2">{b.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const openings = [
  {
    title: 'Full Stack Developer',
    type: 'Full-time',
    location: 'Lucknow, UP (Hybrid)',
    experience: '2–5 years',
    skills: ['React / Node.js', 'PostgreSQL / MongoDB', 'REST APIs', 'Git'],
    desc: 'We\'re looking for an experienced Full Stack Developer to design and build web applications from frontend to backend. You\'ll work with modern frameworks and cloud infrastructure.',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Mobile App Developer (Flutter)',
    type: 'Full-time',
    location: 'Lucknow, UP (Hybrid)',
    experience: '2–4 years',
    skills: ['Flutter / Dart', 'Firebase', 'REST APIs', 'Android / iOS'],
    desc: 'Build beautiful, performant cross-platform mobile applications using Flutter. You\'ll work closely with the design and backend teams to deliver production-ready apps.',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'Database Administrator (DBA)',
    type: 'Full-time',
    location: 'Lucknow, UP',
    experience: '3–6 years',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Performance Tuning'],
    desc: 'Manage, optimize, and maintain our clients\' database systems. Responsibilities include schema design, query optimization, backup strategies, and disaster recovery.',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Lucknow, UP (Hybrid)',
    experience: '2–4 years',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    desc: 'Create compelling user interfaces and experiences for web and mobile applications. You\'ll conduct user research, create wireframes, and collaborate with developers.',
    badge: 'bg-pink-100 text-pink-700',
  },
  {
    title: 'Software Licensing Specialist',
    type: 'Full-time',
    location: 'Lucknow, UP',
    experience: '2–5 years',
    skills: ['License Management', 'SAM Tools', 'Compliance', 'Negotiation'],
    desc: 'Manage software licensing compliance, vendor relationships, and license optimization for our clients. Experience with SAM tools and enterprise agreement negotiation is a plus.',
    badge: 'bg-green-100 text-green-700',
  },
  {
    title: 'Software Development Intern',
    type: 'Internship (3–6 months)',
    location: 'Lucknow, UP',
    experience: 'Fresher / 0–1 year',
    skills: ['Any Programming Language', 'Problem Solving', 'Eagerness to Learn'],
    desc: 'A 3–6 month internship for students or recent graduates passionate about software development. You\'ll work on real projects, get mentored by senior developers, and build your portfolio.',
    badge: 'bg-yellow-100 text-yellow-700',
  },
]

function OpenPositions() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Current Openings</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
          <div className="section-divider mx-auto" />
        </div>
        <div className="space-y-4">
          {openings.map((job) => (
            <div key={job.title} className="bg-white rounded-xl border border-slate-100 p-6 card-hover">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-heading font-bold text-slate-900 text-lg">{job.title}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${job.badge}`}>{job.type}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      {job.experience}
                    </span>
                  </div>
                </div>
                <a href="#apply" className="btn-primary text-sm flex-shrink-0">Apply Now</a>
              </div>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{job.desc}</p>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((s) => (
                  <span key={s} className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-full border border-brand-100">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ApplySection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', position: '', experience: '', linkedin: '', portfolio: '', message: '', 'bot-field': '',
  })

  const upd = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((d) => ({ ...d, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')
    try {
      const resp = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'careers', ...formData }).toString(),
      })
      setFormState(resp.ok ? 'success' : 'error')
    } catch {
      setFormState('error')
    }
  }

  return (
    <section id="apply" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Apply Online</p>
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Submit Your Application</h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-slate-600">Don't see a role that fits? We always welcome talented individuals — send us your resume and we'll be in touch when the right opportunity arises.</p>
        </div>

        {formState === 'success' ? (
          <div className="text-center py-14 bg-green-50 rounded-2xl border border-green-200">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="font-heading font-bold text-xl text-green-800 mb-2">Application Submitted!</h3>
            <p className="text-green-700">Thank you for applying. Our HR team will review your application and reach out within 5 business days.</p>
          </div>
        ) : (
          <form name="careers" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <input type="hidden" name="form-name" value="careers" />
            <p className="hidden"><input name="bot-field" value={formData['bot-field']} onChange={upd('bot-field')} /></p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={upd('name')} placeholder="Your full name" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                <input type="email" name="email" required value={formData.email} onChange={upd('email')} placeholder="your@email.com" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={upd('phone')} placeholder="+91 XXXXX XXXXX" className="form-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Position Applying For</label>
                <select name="position" value={formData.position} onChange={upd('position')} className="form-input">
                  <option value="">Select a position</option>
                  {openings.map((j) => <option key={j.title}>{j.title}</option>)}
                  <option>Other / Speculative Application</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Years of Experience</label>
                <select name="experience" value={formData.experience} onChange={upd('experience')} className="form-input">
                  <option value="">Select experience</option>
                  <option>Fresher (0–1 year)</option>
                  <option>1–2 years</option>
                  <option>2–5 years</option>
                  <option>5–10 years</option>
                  <option>10+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">LinkedIn Profile</label>
                <input type="url" name="linkedin" value={formData.linkedin} onChange={upd('linkedin')} placeholder="https://linkedin.com/in/..." className="form-input" />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-2">Portfolio / GitHub URL</label>
              <input type="url" name="portfolio" value={formData.portfolio} onChange={upd('portfolio')} placeholder="https://github.com/..." className="form-input" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Cover Letter / Message</label>
              <textarea name="message" rows={5} value={formData.message} onChange={upd('message')} placeholder="Tell us about yourself, your skills, and why you want to join ZENTROX DEVELOPER..." className="form-input resize-none" />
            </div>
            {formState === 'error' && (
              <p className="text-red-600 text-sm mb-4">Something went wrong. Please try again or email us directly.</p>
            )}
            <button type="submit" disabled={formState === 'submitting'} className="btn-primary w-full justify-center text-base py-3.5">
              {formState === 'submitting' ? 'Submitting Application...' : 'Submit Application'}
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
