import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'IT Services – Software Development, Licensing, Database Solutions | ZENTROX DEVELOPER' },
      { name: 'description', content: 'Comprehensive IT services including custom software development, web & mobile app development, software licensing, database solutions, cloud services, and IT consulting.' },
    ],
  }),
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Comprehensive IT Services"
        subtitle="From custom software development to database management and licensing solutions — we deliver end-to-end technology services tailored to your business."
      />
      <ServiceCategories />
    </>
  )
}

function PageHero({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  return (
    <section className="hero-gradient text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%"><defs><pattern id="g3" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#g3)"/></svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-brand-700 bg-opacity-60 text-brand-200 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-brand-500 border-opacity-40">{badge}</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-5">{title}</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  )
}

const categories = [
  {
    id: 'it-design',
    title: 'Information Technology Design Services',
    icon: '🎨',
    color: 'from-purple-600 to-blue-700',
    services: [
      { name: 'System Design', desc: 'End-to-end architecture design for scalable, robust IT systems that meet your operational requirements.' },
      { name: 'UI/UX Design', desc: 'Human-centered interface design creating intuitive, accessible, and visually compelling digital experiences.' },
      { name: 'Solution Architecture', desc: 'Strategic technology blueprints aligning IT infrastructure with business goals and growth plans.' },
      { name: 'Digital Transformation', desc: 'Comprehensive roadmaps guiding organizations through technology-driven business model evolution.' },
    ],
  },
  {
    id: 'software-dev',
    title: 'Software Development Services',
    icon: '💻',
    color: 'from-blue-700 to-brand-600',
    services: [
      { name: 'Custom Software Development', desc: 'Bespoke software applications designed specifically for your unique business processes and requirements.' },
      { name: 'Enterprise Applications', desc: 'Large-scale ERP, CRM, and business management systems for enterprise-level organizations.' },
      { name: 'SaaS Development', desc: 'Multi-tenant cloud-based software-as-a-service products with subscription billing and scalable architecture.' },
      { name: 'API Development', desc: 'RESTful and GraphQL API design, development, and integration services for seamless system connectivity.' },
      { name: 'Cloud Solutions', desc: 'Cloud-native application development, migration, and optimization across AWS, GCP, and Azure.' },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development Services',
    icon: '🌐',
    color: 'from-cyan-600 to-blue-700',
    services: [
      { name: 'Corporate Websites', desc: 'Professional, SEO-optimized corporate websites that establish your brand and generate qualified leads.' },
      { name: 'E-Commerce Platforms', desc: 'Full-featured online stores with payment integration, inventory management, and analytics dashboards.' },
      { name: 'CMS Solutions', desc: 'WordPress, Drupal, and headless CMS implementations for easy content management and publishing.' },
      { name: 'Portal Development', desc: 'Customer portals, employee intranets, and partner portals with secure authentication and role management.' },
    ],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    icon: '📱',
    color: 'from-indigo-600 to-purple-700',
    services: [
      { name: 'Android Applications', desc: 'Native Android apps built with Kotlin for optimal performance and seamless integration with the Android ecosystem.' },
      { name: 'iOS Applications', desc: 'Native iOS apps developed with Swift following Apple\'s Human Interface Guidelines for exceptional user experiences.' },
      { name: 'Cross-platform Applications', desc: 'Flutter and React Native apps delivering native-like experiences across iOS and Android from a single codebase.' },
    ],
  },
  {
    id: 'licensing',
    title: 'Software Licensing Services',
    icon: '🔑',
    color: 'from-green-600 to-teal-700',
    services: [
      { name: 'Licensing of Proprietary Software', desc: 'Full lifecycle management of proprietary software licenses including acquisition, compliance, and renewal.' },
      { name: 'Software Usage Rights', desc: 'Legal framework establishment for software usage rights, intellectual property protection, and compliance.' },
      { name: 'Subscription Licensing', desc: 'SaaS and subscription-based software license models with automated billing and access management.' },
      { name: 'Enterprise Licensing Solutions', desc: 'Volume licensing agreements and enterprise license optimization to minimize costs and maximize compliance.' },
    ],
  },
  {
    id: 'database',
    title: 'Database Services',
    icon: '🗄️',
    color: 'from-orange-600 to-red-700',
    services: [
      { name: 'Database Design', desc: 'Optimized relational and NoSQL database schema design for performance, scalability, and data integrity.' },
      { name: 'Database Administration', desc: 'Professional DBA services including monitoring, tuning, backup strategies, and disaster recovery planning.' },
      { name: 'Data Management', desc: 'ETL pipelines, data warehousing, master data management, and business intelligence solutions.' },
      { name: 'Cloud Database Solutions', desc: 'Managed cloud databases on AWS RDS, Google Cloud SQL, Azure SQL with high availability configurations.' },
    ],
  },
  {
    id: 'distribution',
    title: 'Software Downloads & Distribution',
    icon: '📦',
    color: 'from-slate-600 to-slate-800',
    services: [
      { name: 'Software Deployment', desc: 'Automated deployment pipelines (CI/CD) ensuring reliable, consistent software releases across environments.' },
      { name: 'Product Distribution', desc: 'Software distribution infrastructure including CDN integration, download management, and licensing enforcement.' },
      { name: 'Download Management Systems', desc: 'Secure download portals with user authentication, download tracking, and license key delivery.' },
      { name: 'Version Management', desc: 'Software versioning strategy, release management, and automated update notification systems.' },
    ],
  },
  {
    id: 'support',
    title: 'Technical Support & Maintenance',
    icon: '🛠️',
    color: 'from-brand-700 to-brand-900',
    services: [
      { name: 'Ongoing Support', desc: '24/7 technical support with tiered SLA response times ensuring business continuity and rapid issue resolution.' },
      { name: 'Software Updates', desc: 'Regular feature enhancements, security patches, and performance improvements delivered on scheduled cycles.' },
      { name: 'Security Monitoring', desc: 'Proactive vulnerability scanning, intrusion detection, and security incident response services.' },
      { name: 'Performance Optimization', desc: 'Continuous application performance monitoring, profiling, and optimization to maintain peak efficiency.' },
    ],
  },
]

function ServiceCategories() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {categories.map((cat, i) => (
          <div key={cat.id} id={cat.id} className={`lg:grid lg:grid-cols-3 lg:gap-12 items-start ${i % 2 === 1 ? '' : ''}`}>
            <div className="mb-8 lg:mb-0">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-3xl mb-5 shadow-lg`}>
                {cat.icon}
              </div>
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">{cat.title}</h2>
              <div className="section-divider mb-4" />
              <p className="text-slate-600 text-sm leading-relaxed">
                Professional {cat.title.toLowerCase()} designed to meet the demands of modern businesses and drive competitive advantage.
              </p>
              <a href="/contact" className="btn-primary text-sm mt-6 inline-flex">
                Get a Quote
              </a>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.services.map((s) => (
                <div key={s.name} className="bg-white rounded-xl p-5 border border-slate-100 card-hover">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">{s.name}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="hero-gradient rounded-2xl p-10 text-white text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">Contact our team today to discuss your requirements and get a customized solution proposal.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="btn-primary">Schedule a Demo</a>
            <a href="tel:+918763915207" className="btn-outline">Call Us Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
