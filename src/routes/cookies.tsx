import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/cookies')({
  head: () => ({
    meta: [
      { title: 'Cookie Policy – ZENTROX DEVELOPER PRIVATE LIMITED' },
      { name: 'description', content: 'Cookie Policy for ZENTROX DEVELOPER PRIVATE LIMITED website. Learn about the cookies we use and how to manage your preferences.' },
    ],
  }),
  component: CookiesPage,
})

function CookiesPage() {
  return (
    <>
      <LegalHero title="Cookie Policy" updated="June 1, 2025" />
      <LegalContent>
        <Section title="1. What Are Cookies?">
          <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies help us remember your preferences and understand how you use our website.</p>
        </Section>

        <Section title="2. How We Use Cookies">
          <p>ZENTROX DEVELOPER PRIVATE LIMITED uses cookies for the following purposes:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website so we can improve the user experience.</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences to personalize your experience.</li>
            <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements (only with your consent).</li>
          </ul>
        </Section>

        <Section title="3. Types of Cookies We Use">
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-slate-700 border-b border-slate-200">Cookie Name</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border-b border-slate-200">Type</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border-b border-slate-200">Purpose</th>
                  <th className="text-left p-3 font-semibold text-slate-700 border-b border-slate-200">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: '_session', type: 'Essential', purpose: 'Maintains user session state', duration: 'Session' },
                  { name: '_ga', type: 'Analytics', purpose: 'Google Analytics – tracks page visits', duration: '2 years' },
                  { name: '_gid', type: 'Analytics', purpose: 'Google Analytics – distinguishes users', duration: '24 hours' },
                  { name: 'preferences', type: 'Preference', purpose: 'Stores user preferences', duration: '1 year' },
                ].map((row) => (
                  <tr key={row.name}>
                    <td className="p-3 font-mono text-xs text-slate-700">{row.name}</td>
                    <td className="p-3 text-slate-600">{row.type}</td>
                    <td className="p-3 text-slate-600">{row.purpose}</td>
                    <td className="p-3 text-slate-600">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="4. Managing Cookies">
          <p>You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
          <ul>
            <li>View what cookies are stored on your device</li>
            <li>Delete all or specific cookies</li>
            <li>Block cookies from specific websites</li>
            <li>Block all cookies</li>
          </ul>
          <p>Please note that disabling certain cookies may affect the functionality of our website. Instructions for managing cookies in popular browsers:</p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>
        </Section>

        <Section title="5. Third-Party Cookies">
          <p>Some cookies on our website are placed by third-party services. These include analytics providers and social media platforms. We do not control these cookies and their use is governed by the respective third parties' privacy policies.</p>
        </Section>

        <Section title="6. Updates to This Policy">
          <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
        </Section>

        <Section title="7. Contact Us">
          <p>If you have questions about our use of cookies, please contact us at:</p>
          <address>
            ZENTROX DEVELOPER PRIVATE LIMITED<br />
            Email: <a href="mailto:info@zentroxdeveloperecommerce.com">info@zentroxdeveloperecommerce.com</a><br />
            Phone: <a href="tel:+918763915207">+91 8763915207</a>
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
