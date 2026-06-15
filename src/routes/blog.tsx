import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  head: () => ({
    meta: [
      { title: 'Blog – IT Insights, Software Development & Technology Trends | ZENTROX DEVELOPER' },
      { name: 'description', content: 'Read insights on software development trends, IT industry news, database management, cybersecurity, software licensing, cloud computing, AI, and digital transformation.' },
    ],
  }),
  component: BlogPage,
})

function BlogPage() {
  return (
    <>
      <PageHero />
      <BlogGrid />
    </>
  )
}

function PageHero() {
  return (
    <section className="hero-gradient text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%"><defs><pattern id="g7" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#g7)"/></svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-brand-700 bg-opacity-60 text-brand-200 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-brand-500 border-opacity-40">Knowledge Hub</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-5">IT Insights & Technology Blog</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">Stay updated with the latest trends in software development, cybersecurity, cloud computing, AI, and digital transformation.</p>
      </div>
    </section>
  )
}

const categories = ['All', 'Software Development', 'Cloud Computing', 'Cybersecurity', 'AI & ML', 'Database', 'Digital Transformation', 'Software Licensing']

const posts = [
  {
    category: 'Software Development',
    title: 'Top Software Development Trends to Watch in 2025',
    excerpt: 'Explore the most impactful software development trends shaping the industry — from AI-assisted coding and low-code platforms to microservices and WebAssembly.',
    date: 'June 10, 2025',
    readTime: '7 min read',
    emoji: '💻',
    color: 'bg-blue-50 border-blue-100',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    category: 'Cloud Computing',
    title: 'Why Cloud-Native Architecture is the Future of Enterprise Software',
    excerpt: 'Learn how cloud-native principles like containers, microservices, and serverless computing are revolutionizing how enterprises build and deploy software at scale.',
    date: 'May 28, 2025',
    readTime: '8 min read',
    emoji: '☁️',
    color: 'bg-cyan-50 border-cyan-100',
    badge: 'bg-cyan-100 text-cyan-700',
  },
  {
    category: 'Cybersecurity',
    title: 'Essential Cybersecurity Practices for Small and Medium Businesses',
    excerpt: 'A practical guide to protecting your business from cyber threats — covering data encryption, access controls, employee training, and incident response planning.',
    date: 'May 15, 2025',
    readTime: '6 min read',
    emoji: '🔒',
    color: 'bg-red-50 border-red-100',
    badge: 'bg-red-100 text-red-700',
  },
  {
    category: 'AI & ML',
    title: 'How Artificial Intelligence is Transforming Software Development',
    excerpt: 'From AI code assistants and automated testing to intelligent DevOps and predictive analytics — how AI is becoming an indispensable part of the software development lifecycle.',
    date: 'May 5, 2025',
    readTime: '9 min read',
    emoji: '🤖',
    color: 'bg-purple-50 border-purple-100',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    category: 'Database',
    title: 'Choosing the Right Database for Your Application in 2025',
    excerpt: 'A comprehensive comparison of relational, NoSQL, NewSQL, and time-series databases — with practical guidance on selecting the best fit for your specific use case.',
    date: 'April 22, 2025',
    readTime: '10 min read',
    emoji: '🗄️',
    color: 'bg-orange-50 border-orange-100',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    category: 'Digital Transformation',
    title: 'A Roadmap for Digital Transformation: From Strategy to Execution',
    excerpt: 'Practical steps for organizations embarking on digital transformation — assessing current capabilities, setting priorities, managing change, and measuring success.',
    date: 'April 10, 2025',
    readTime: '11 min read',
    emoji: '🚀',
    color: 'bg-green-50 border-green-100',
    badge: 'bg-green-100 text-green-700',
  },
  {
    category: 'Software Licensing',
    title: 'Understanding Software Licensing: A Business Owner\'s Complete Guide',
    excerpt: 'Everything business owners need to know about software licensing — from different license types and compliance requirements to cost optimization strategies.',
    date: 'March 28, 2025',
    readTime: '8 min read',
    emoji: '🔑',
    color: 'bg-yellow-50 border-yellow-100',
    badge: 'bg-yellow-100 text-yellow-700',
  },
  {
    category: 'Cloud Computing',
    title: 'Multi-Cloud Strategy: Benefits, Challenges, and Best Practices',
    excerpt: 'An in-depth look at why organizations are adopting multi-cloud strategies, the operational challenges this introduces, and how to manage multi-cloud environments effectively.',
    date: 'March 14, 2025',
    readTime: '7 min read',
    emoji: '⛅',
    color: 'bg-slate-50 border-slate-200',
    badge: 'bg-slate-100 text-slate-700',
  },
  {
    category: 'AI & ML',
    title: 'Integrating AI into Business Processes: A Practical Approach',
    excerpt: 'How businesses can identify AI opportunities, evaluate use cases, build vs. buy decisions, and successfully integrate AI solutions that deliver measurable ROI.',
    date: 'March 1, 2025',
    readTime: '8 min read',
    emoji: '🧠',
    color: 'bg-indigo-50 border-indigo-100',
    badge: 'bg-indigo-100 text-indigo-700',
  },
]

function BlogGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category filter - visual only */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((c, i) => (
            <span key={c} className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${i === 0 ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-300 hover:text-brand-600'}`}>
              {c}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-xl border border-slate-100 overflow-hidden card-hover flex flex-col">
              <div className={`${post.color} border-b ${post.color.split(' ')[1]} p-8 flex items-center justify-center text-6xl`}>
                {post.emoji}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.badge}`}>{post.category}</span>
                  <span className="text-slate-400 text-xs">{post.readTime}</span>
                </div>
                <h2 className="font-heading font-bold text-slate-900 text-base mb-3 leading-snug flex-1">{post.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-xs">{post.date}</span>
                  <a href="/contact" className="text-brand-600 hover:text-brand-700 text-sm font-medium flex items-center gap-1 no-underline">
                    Read More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 hero-gradient rounded-2xl p-10 text-white text-center">
          <h2 className="font-heading text-2xl font-bold mb-3">Stay Updated</h2>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">Subscribe to our newsletter for the latest IT insights, software development trends, and technology news.</p>
          <a href="/contact" className="btn-outline">
            Contact Us to Subscribe
          </a>
        </div>
      </div>
    </section>
  )
}
