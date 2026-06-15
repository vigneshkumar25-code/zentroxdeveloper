import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/disclaimer')({
  head: () => ({
    meta: [
      { title: 'Disclaimer – ZENTROX DEVELOPER PRIVATE LIMITED' },
      { name: 'description', content: 'Disclaimer for ZENTROX DEVELOPER PRIVATE LIMITED website. Read about limitations and legal notices.' },
    ],
  }),
  component: DisclaimerPage,
})

function DisclaimerPage() {
  return (
    <>
      <LegalHero title="Disclaimer" updated="June 1, 2025" />
      <LegalContent>
        <Section title="Website Disclaimer">
          <p>The information provided on this website by ZENTROX DEVELOPER PRIVATE LIMITED is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on this website.</p>
        </Section>

        <Section title="No Professional Advice">
          <p>The content on this website does not constitute legal, financial, technical, or any other form of professional advice. Before making any business decisions based on information from this website, you should consult with appropriate qualified professionals.</p>
        </Section>

        <Section title="External Links Disclaimer">
          <p>This website may contain links to external websites. These links are provided as a convenience and do not constitute an endorsement of those sites or their content. We have no control over the content of external sites and accept no responsibility for them.</p>
        </Section>

        <Section title="Errors and Omissions">
          <p>While we strive to ensure the accuracy of information on this website, we do not warrant that the content is complete, accurate, current, or free from errors. We reserve the right to change the information on this website at any time without notice.</p>
        </Section>

        <Section title="Fair Use">
          <p>This website may contain content that is subject to copyright, trademark, or other intellectual property rights. Any use of such content beyond personal, non-commercial use requires prior written permission from ZENTROX DEVELOPER PRIVATE LIMITED or the respective rights holder.</p>
        </Section>

        <Section title="Technology and Results">
          <p>Any case studies, client results, or project outcomes described on this website are illustrative examples. Individual results may vary based on specific circumstances, requirements, and implementation factors. Past project success does not guarantee identical results for future engagements.</p>
        </Section>

        <Section title="Contact">
          <p>If you have questions about this Disclaimer, please contact us:</p>
          <address>
            ZENTROX DEVELOPER PRIVATE LIMITED<br />
            Shop No-FF 10, Goyal Plaza, Faizabad Road, Indira Nagar<br />
            Lucknow, Uttar Pradesh – 226016, India<br />
            Email: <a href="mailto:info@zentroxdeveloperecommerce.com">info@zentroxdeveloperecommerce.com</a>
          </address>
        </Section>
      </LegalContent>
    </>
  )
}

function LegalHero({ title, updated }: { title: string; updated: string }) {
  return (
    <section className="hero-gradient text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-brand-300 hover:text-white text-sm no-underline mb-6 inline-flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to Home
        </Link>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold mt-4 mb-3">{title}</h1>
        <p className="text-brand-300 text-sm">Last updated: {updated}</p>
      </div>
    </section>
  )
}

function LegalContent({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">{children}</div>
      </div>
    </section>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <div className="space-y-3 text-slate-600 text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-brand-600 [&_a]:no-underline [&_a:hover]:underline">
        {children}
      </div>
    </div>
  )
}
