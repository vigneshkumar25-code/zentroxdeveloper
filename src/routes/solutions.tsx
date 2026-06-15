import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/solutions')({
  head: () => ({
    meta: [
      { title: 'Industry Solutions – Retail, Healthcare, Education & More | ZENTROX DEVELOPER' },
      { name: 'description', content: 'Industry-specific IT solutions for Retail, Healthcare, Education, Finance, Manufacturing, Logistics, Startups, and E-Commerce from ZENTROX DEVELOPER PRIVATE LIMITED.' },
    ],
  }),
  component: SolutionsPage,
})

function SolutionsPage() {
  return (
    <>
      <PageHero />
      <IndustrySolutions />
      <ProcessSection />
      <CtaSection />
    </>
  )
}

function PageHero() {
  return (
    <section className="hero-gradient text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%"><defs><pattern id="g4" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#g4)"/></svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-brand-700 bg-opacity-60 text-brand-200 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-brand-500 border-opacity-40">Industry Solutions</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-5">Technology Solutions for Every Industry</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">Tailored IT solutions addressing the unique challenges and opportunities across diverse industry verticals.</p>
      </div>
    </section>
  )
}

const industries = [
  {
    icon: '🛒',
    name: 'Retail',
    tagline: 'Modernize retail operations with smart technology',
    desc: 'From POS systems and inventory management to loyalty programs and omnichannel retail platforms, we help retailers deliver seamless shopping experiences both online and in-store.',
    features: ['Point-of-Sale Systems', 'Inventory Management', 'Customer Loyalty Programs', 'Omnichannel Platforms', 'Sales Analytics', 'Supplier Management'],
    color: 'bg-orange-50 border-orange-100',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    icon: '🏥',
    name: 'Healthcare',
    tagline: 'Digital solutions for better patient outcomes',
    desc: 'HIPAA-compliant healthcare IT solutions including Electronic Health Records (EHR), patient management systems, telemedicine platforms, and hospital information systems.',
    features: ['Electronic Health Records', 'Patient Management Systems', 'Telemedicine Platforms', 'Lab Management', 'Billing & Insurance', 'Appointment Scheduling'],
    color: 'bg-red-50 border-red-100',
    badge: 'bg-red-100 text-red-700',
  },
  {
    icon: '🎓',
    name: 'Education',
    tagline: 'EdTech solutions for modern learning',
    desc: 'Learning Management Systems (LMS), student information systems, e-learning platforms, and virtual classroom solutions that enhance educational experiences.',
    features: ['Learning Management Systems', 'Student Information Systems', 'E-Learning Platforms', 'Virtual Classrooms', 'Online Assessment', 'Fee Management'],
    color: 'bg-blue-50 border-blue-100',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    icon: '💼',
    name: 'Finance & Banking',
    tagline: 'Secure fintech solutions for financial services',
    desc: 'Secure, compliant financial software including core banking systems, payment gateways, investment management platforms, and regulatory reporting solutions.',
    features: ['Core Banking Systems', 'Payment Gateways', 'Portfolio Management', 'Risk Analytics', 'Regulatory Compliance', 'Mobile Banking Apps'],
    color: 'bg-green-50 border-green-100',
    badge: 'bg-green-100 text-green-700',
  },
  {
    icon: '🏭',
    name: 'Manufacturing',
    tagline: 'Smart manufacturing through Industry 4.0',
    desc: 'Manufacturing execution systems, quality control software, production planning tools, and IoT-integrated solutions that optimize production and reduce operational costs.',
    features: ['Manufacturing ERP', 'Quality Control Systems', 'Production Planning', 'IoT Integration', 'Supply Chain Management', 'Predictive Maintenance'],
    color: 'bg-slate-50 border-slate-200',
    badge: 'bg-slate-100 text-slate-700',
  },
  {
    icon: '🚚',
    name: 'Logistics & Supply Chain',
    tagline: 'Streamlined logistics through smart technology',
    desc: 'Fleet management, warehouse management systems, route optimization, real-time tracking, and supply chain visibility platforms for logistics companies.',
    features: ['Fleet Management', 'Warehouse Management', 'Route Optimization', 'Real-time Tracking', 'Last-mile Delivery', 'Supply Chain Analytics'],
    color: 'bg-yellow-50 border-yellow-100',
    badge: 'bg-yellow-100 text-yellow-700',
  },
  {
    icon: '🚀',
    name: 'Startups',
    tagline: 'From MVP to scale-up — we build your vision',
    desc: 'Rapid MVP development, scalable architecture, product discovery, and technology consulting specifically designed for early-stage and growth-stage startups.',
    features: ['MVP Development', 'Product Discovery', 'Scalable Architecture', 'Pitch Deck Tech Sections', 'Agile Development', 'Growth Engineering'],
    color: 'bg-purple-50 border-purple-100',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    icon: '🛍️',
    name: 'E-Commerce',
    tagline: 'Full-stack e-commerce solutions that convert',
    desc: 'End-to-end e-commerce development including storefronts, payment integration, order management, product recommendation engines, and marketplace platforms.',
    features: ['Custom Storefronts', 'Payment Integration', 'Order Management', 'Product Recommendations', 'Marketplace Development', 'Conversion Optimization'],
    color: 'bg-pink-50 border-pink-100',
    badge: 'bg-pink-100 text-pink-700',
  },
]

function IndustrySolutions() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Industries We Serve</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Solutions Built for Your Industry</h2>
          <div className="section-divider mx-auto mb-5" />
          <p className="text-slate-600 max-w-xl mx-auto">Deep domain expertise enables us to deliver solutions that understand the nuances and regulations of your industry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind) => (
            <div key={ind.name} className={`rounded-2xl p-8 border ${ind.color} card-hover bg-white`}>
              <div className="flex items-start gap-5 mb-5">
                <div className="text-4xl flex-shrink-0">{ind.icon}</div>
                <div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${ind.badge} mb-2 inline-block`}>{ind.name}</span>
                  <h3 className="font-heading text-xl font-bold text-slate-900">{ind.tagline}</h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{ind.desc}</p>
              <div className="grid grid-cols-2 gap-2">
                {ind.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-slate-600">
                    <svg className="w-3 h-3 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const process = [
  { step: '01', title: 'Discovery & Analysis', desc: 'We start by deeply understanding your business, goals, pain points, and technical requirements through structured discovery sessions.' },
  { step: '02', title: 'Solution Design', desc: 'Our architects design a tailored solution with the right technology stack, infrastructure, and development approach for your needs.' },
  { step: '03', title: 'Development & Testing', desc: 'Agile sprints with continuous testing, code reviews, and quality assurance ensure a reliable, high-quality deliverable.' },
  { step: '04', title: 'Deployment & Support', desc: 'Smooth deployment with thorough documentation, training, and ongoing support to maximize adoption and ROI.' },
]

function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Delivery Process</h2>
          <div className="section-divider mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((p) => (
            <div key={p.step} className="text-center">
              <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center mx-auto mb-5">
                <span className="font-heading font-bold text-white text-lg">{p.step}</span>
              </div>
              <h3 className="font-heading font-semibold text-slate-900 text-base mb-3">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold text-slate-900 mb-5">Don't See Your Industry?</h2>
        <p className="text-slate-600 mb-8">We work across many industries not listed here. Contact us to discuss how we can develop a custom solution for your specific business needs.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/contact" className="btn-primary">Request a Consultation</a>
          <a href="tel:+918763915207" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-brand-600 text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +91 8763915207
          </a>
        </div>
      </div>
    </section>
  )
}
