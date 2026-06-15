import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us – ZENTROX DEVELOPER PRIVATE LIMITED' },
      { name: 'description', content: 'Learn about ZENTROX DEVELOPER PRIVATE LIMITED, a technology-focused organization providing innovative software solutions and licensing services in Lucknow, India.' },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <PageHero
        badge="Who We Are"
        title="About ZENTROX DEVELOPER"
        subtitle="A technology-focused organization dedicated to delivering innovative software solutions, IT services, and digital transformation across India."
      />
      <MissionVision />
      <CoreValues />
      <TechExpertise />
      <CustomerCommitment />
    </>
  )
}

function PageHero({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  return (
    <section className="hero-gradient text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%"><defs><pattern id="g2" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#g2)"/></svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-brand-700 bg-opacity-60 text-brand-200 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-brand-500 border-opacity-40">{badge}</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-5">{title}</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  )
}

function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About text */}
          <div>
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-5">Who We Are</h2>
            <div className="section-divider mb-6" />
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                ZENTROX DEVELOPER PRIVATE LIMITED is a forward-thinking technology company headquartered in Lucknow, Uttar Pradesh, India. We specialize in delivering comprehensive Information Technology services including IT design, custom software development, software licensing, database solutions, and software distribution.
              </p>
              <p>
                Founded with a commitment to excellence, we serve clients across India and internationally, helping businesses of all sizes harness the power of technology to achieve their goals. Our multidisciplinary team of software engineers, designers, and technology consultants brings together deep domain expertise and a passion for innovation.
              </p>
              <p>
                Whether you are a startup looking to build your first product or an enterprise seeking to modernize your IT infrastructure, ZENTROX DEVELOPER delivers solutions that are reliable, scalable, and aligned with your business objectives.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-6">
            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses by delivering innovative, reliable, and cost-effective technology solutions that drive growth, efficiency, and digital transformation. We strive to be a trusted technology partner that consistently exceeds client expectations through excellence in software development and IT services.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To become a leading technology solutions provider recognized globally for our commitment to innovation, quality, and client success. We envision a future where every business, regardless of size, can access world-class IT solutions that transform their operations and accelerate their growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const values = [
  { icon: '⭐', title: 'Excellence', desc: 'We pursue the highest standards in every solution we deliver, ensuring quality and reliability in all our work.' },
  { icon: '🤝', title: 'Integrity', desc: 'We operate with complete transparency, honesty, and ethical conduct in all our client and partner relationships.' },
  { icon: '💡', title: 'Innovation', desc: 'We continuously explore new technologies and approaches to deliver cutting-edge solutions to our clients.' },
  { icon: '👥', title: 'Client Focus', desc: 'Our clients\' success is our success. Every decision we make is guided by what is best for those we serve.' },
  { icon: '🔒', title: 'Security', desc: 'We embed security-first principles into every software solution and business practice we follow.' },
  { icon: '📈', title: 'Growth', desc: 'We are committed to continuous learning, improvement, and the professional growth of our team and clients.' },
]

function CoreValues() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">What Drives Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <div className="section-divider mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-xl p-6 border border-slate-100 card-hover">
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="font-heading font-semibold text-slate-900 text-lg mb-2">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const techAreas = [
  { area: 'Frontend', techs: ['React', 'Vue.js', 'Angular', 'Next.js', 'TailwindCSS'] },
  { area: 'Backend', techs: ['Node.js', 'Python', 'Java', '.NET', 'PHP', 'Go'] },
  { area: 'Mobile', techs: ['Flutter', 'React Native', 'Android (Kotlin)', 'iOS (Swift)'] },
  { area: 'Database', techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle'] },
  { area: 'Cloud', techs: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'] },
  { area: 'Tools', techs: ['Git', 'Jenkins', 'Jira', 'Figma', 'Postman'] },
]

function TechExpertise() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Technology Stack</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Technology Expertise</h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-slate-600 max-w-xl mx-auto">We work with a broad range of modern technologies to deliver robust, scalable solutions.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techAreas.map((t) => (
            <div key={t.area} className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-heading font-semibold text-brand-700 text-base mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-500" />
                {t.area}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t.techs.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-full border border-brand-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CustomerCommitment() {
  return (
    <section className="py-20 hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-brand-300 font-semibold text-sm uppercase tracking-widest mb-3">Our Promise</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">Our Commitment to Customers</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              At ZENTROX DEVELOPER, every client relationship is built on trust, transparency, and a genuine commitment to your success. We don't just build software — we build partnerships.
            </p>
            <p className="text-slate-300 leading-relaxed">
              From the initial consultation through long-term support, our dedicated team ensures your technology investments deliver measurable ROI and competitive advantages.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Dedicated Account Manager', desc: 'A single point of contact who understands your business.' },
              { title: 'Transparent Reporting', desc: 'Regular progress updates, sprint reviews, and milestone reports.' },
              { title: 'Post-Launch Support', desc: 'Ongoing maintenance and 24/7 technical support after delivery.' },
              { title: 'SLA Guarantees', desc: 'Service level agreements ensuring uptime, response times, and quality.' },
            ].map((c) => (
              <div key={c.title} className="bg-brand-800 bg-opacity-50 rounded-xl p-5 border border-brand-600 border-opacity-30">
                <h4 className="font-semibold text-white text-sm mb-2">{c.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
