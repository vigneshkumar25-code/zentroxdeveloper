import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/licensing')({
  head: () => ({
    meta: [
      { title: 'Software Licensing Services – ZENTROX DEVELOPER PRIVATE LIMITED' },
      { name: 'description', content: 'Comprehensive software licensing services including end-user licensing, subscription-based licensing, database licensing, enterprise licensing, and license management solutions.' },
    ],
  }),
  component: LicensingPage,
})

function LicensingPage() {
  return (
    <>
      <PageHero />
      <LicensingOverview />
      <LicensingTypes />
      <LicensingBenefits />
      <FAQSection />
      <CtaSection />
    </>
  )
}

function PageHero() {
  return (
    <section className="hero-gradient text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%"><defs><pattern id="g5" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#g5)"/></svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-brand-700 bg-opacity-60 text-brand-200 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-brand-500 border-opacity-40">Software Licensing</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-5">Software Licensing Services</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">End-to-end software licensing solutions — from license acquisition and compliance to subscription management and enterprise agreements.</p>
      </div>
    </section>
  )
}

function LicensingOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-5">Comprehensive Software Licensing Solutions</h2>
            <div className="section-divider mb-6" />
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Software licensing is the legal framework that governs how software can be used, distributed, and commercialized. ZENTROX DEVELOPER provides complete software licensing services to help businesses navigate this complex landscape with confidence and compliance.
              </p>
              <p>
                Whether you need help acquiring the right licenses for your business operations, setting up licensing models for your own software products, or managing an enterprise software license portfolio, our licensing specialists have the expertise to guide you.
              </p>
              <p>
                We help software vendors design and implement licensing strategies that protect their intellectual property while maximizing revenue, and help businesses optimize their software spending through proper license management.
              </p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100">
              <h3 className="font-heading font-bold text-slate-900 text-xl mb-6">Key Licensing Services</h3>
              <ul className="space-y-4">
                {[
                  'Software license procurement and management',
                  'License compliance auditing and reporting',
                  'Subscription licensing model design',
                  'Enterprise agreement negotiation support',
                  'Software Asset Management (SAM)',
                  'License key generation and management systems',
                  'End-user license agreement (EULA) consultation',
                  'License renewal management and alerts',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const licenseTypes = [
  {
    icon: '👤',
    title: 'End-User Licensing (EULA)',
    desc: 'Standard end-user license agreements that define the terms under which individual users may use a software product. We help create, implement, and enforce EULAs that protect your intellectual property while providing users with clear usage rights.',
    points: ['Single-user licenses', 'Named user licenses', 'Concurrent user licenses', 'Device-based licenses'],
  },
  {
    icon: '🔄',
    title: 'Subscription-Based Licensing',
    desc: 'Recurring revenue models where users pay periodically (monthly, annual) for continued software access. Includes license provisioning, billing integration, automatic renewal, and access management upon subscription changes.',
    points: ['Monthly & annual plans', 'Tiered feature access', 'Automatic renewal management', 'Grace period handling'],
  },
  {
    icon: '🗄️',
    title: 'Database Licensing',
    desc: 'Specialized licensing for database software including Oracle, Microsoft SQL Server, PostgreSQL, and others. We help businesses understand, optimize, and remain compliant with complex database licensing models.',
    points: ['Per-processor licensing', 'Named user plus', 'Cloud licensing models', 'On-premise vs cloud'],
  },
  {
    icon: '⚖️',
    title: 'Commercial Software Rights',
    desc: 'Complete legal framework for commercial software products covering intellectual property rights, redistribution agreements, OEM licensing, and value-added reseller (VAR) agreements.',
    points: ['OEM licensing', 'VAR agreements', 'Reseller programs', 'White-label rights'],
  },
  {
    icon: '🏢',
    title: 'Enterprise Licensing Solutions',
    desc: 'Large-scale enterprise license agreements (ELA) providing unlimited or broadly scoped usage rights at negotiated enterprise rates. Simplifies license management for large organizations with predictable annual costs.',
    points: ['Unlimited user licenses', 'Site licenses', 'Volume discounts', 'Multi-year agreements'],
  },
  {
    icon: '📊',
    title: 'License Management',
    desc: 'Software Asset Management services to track, optimize, and maintain software licenses across your organization. Avoid costly compliance penalties and over-spending with proper license governance.',
    points: ['License inventory tracking', 'Compliance monitoring', 'Renewal management', 'Cost optimization'],
  },
]

function LicensingTypes() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">License Types</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Software Licensing Options We Offer</h2>
          <div className="section-divider mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {licenseTypes.map((t) => (
            <div key={t.title} className="bg-white rounded-xl p-7 border border-slate-100 card-hover">
              <div className="text-3xl mb-4">{t.icon}</div>
              <h3 className="font-heading font-semibold text-slate-900 text-lg mb-3">{t.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{t.desc}</p>
              <ul className="space-y-1.5">
                {t.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LicensingBenefits() {
  return (
    <section className="py-20 hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-300 font-semibold text-sm uppercase tracking-widest mb-3">Why It Matters</p>
          <h2 className="font-heading text-3xl font-bold mb-4">Benefits of Proper Software Licensing</h2>
          <div className="w-16 h-1 bg-brand-400 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🛡️', title: 'Legal Compliance', desc: 'Avoid costly penalties, audits, and litigation by maintaining proper license compliance across your organization.' },
            { icon: '💰', title: 'Cost Optimization', desc: 'Eliminate over-licensing waste and identify gaps to optimize your software spend and negotiate better agreements.' },
            { icon: '🔒', title: 'IP Protection', desc: 'Protect your intellectual property and software investments through legally sound licensing frameworks.' },
            { icon: '📈', title: 'Revenue Generation', desc: 'For software vendors, well-designed licensing models create predictable, recurring revenue streams.' },
          ].map((b) => (
            <div key={b.title} className="text-center p-6 bg-brand-800 bg-opacity-40 rounded-xl border border-brand-600 border-opacity-30">
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="font-heading font-semibold text-white mb-3">{b.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    q: 'What is a software license and why do I need one?',
    a: 'A software license is a legal agreement that grants you the right to use a software product under specific terms and conditions. Without proper licensing, you may be in violation of intellectual property laws. Every business using commercial software needs valid licenses to operate legally.',
  },
  {
    q: 'What is the difference between perpetual and subscription licensing?',
    a: 'A perpetual license is a one-time purchase that grants you the right to use a specific version of the software indefinitely. A subscription license grants you access to the software for a defined period (monthly or annual) and usually includes updates and support during the subscription.',
  },
  {
    q: 'What is Software Asset Management (SAM)?',
    a: 'Software Asset Management is the practice of managing and optimizing the purchasing, deployment, maintenance, utilization, and disposal of software applications within an organization. SAM helps ensure compliance and reduce costs.',
  },
  {
    q: 'How can ZENTROX DEVELOPER help with our software licensing strategy?',
    a: 'We can audit your current software licenses, identify compliance risks, design licensing models for your software products, implement license management systems, and negotiate better terms with vendors. Our experts handle the full lifecycle of software license management.',
  },
  {
    q: 'What happens during a software license audit?',
    a: 'A software license audit involves reviewing all software installed across your organization and comparing it against purchased licenses. We identify under-licensed software (compliance risk), over-licensed software (cost waste), and provide a roadmap to achieve compliance.',
  },
  {
    q: 'Can you help us set up subscription-based licensing for our software product?',
    a: 'Yes, we specialize in designing and implementing subscription licensing models including feature-tiered plans, payment gateway integration, license key generation, access management, and renewal automation for software vendors.',
  },
]

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <div className="section-divider mx-auto" />
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-sm">{faq.q}</span>
                <svg className={`w-5 h-5 text-brand-600 flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
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
        <h2 className="font-heading text-3xl font-bold text-slate-900 mb-5">Need Licensing Guidance?</h2>
        <p className="text-slate-600 mb-8">Our licensing specialists are ready to help you navigate software licensing compliance and strategy.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/contact" className="btn-primary">Get a Free Consultation</a>
          <a href="mailto:info@zentroxdeveloperecommerce.com" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-brand-600 text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-colors">
            Email Our Experts
          </a>
        </div>
      </div>
    </section>
  )
}
