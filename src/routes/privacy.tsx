import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy – ZENTROX DEVELOPER PRIVATE LIMITED' },
      { name: 'description', content: 'Privacy Policy of ZENTROX DEVELOPER PRIVATE LIMITED. Learn how we collect, use, and protect your personal information.' },
    ],
  }),
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <>
      <LegalHero title="Privacy Policy" updated="June 1, 2025" />
      <LegalContent>
        <Section title="1. Introduction">
          <p>ZENTROX DEVELOPER PRIVATE LIMITED ("Company", "we", "us", or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.</p>
          <p>Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.</p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect the following types of personal information:</p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number, company name, and mailing address.</li>
            <li><strong>Project Information:</strong> Details about your project, requirements, and business goals that you share with us.</li>
            <li><strong>Communication Data:</strong> Records of correspondence when you contact us via email, phone, or our contact forms.</li>
            <li><strong>Usage Data:</strong> Information about how you access and interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
            <li><strong>Technical Data:</strong> Device information, operating system, and browser data collected through cookies and similar technologies.</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To respond to your inquiries and provide requested services</li>
            <li>To send project updates, invoices, and service-related communications</li>
            <li>To improve our website, services, and customer experience</li>
            <li>To send marketing communications (only with your consent)</li>
            <li>To comply with legal obligations and resolve disputes</li>
            <li>To protect the security and integrity of our services</li>
          </ul>
        </Section>

        <Section title="4. How We Share Your Information">
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in our operations (hosting, email, analytics) under strict confidentiality agreements.</li>
            <li><strong>Legal Compliance:</strong> When required by law, court order, or governmental authority.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets, with appropriate protections in place.</li>
            <li><strong>With Your Consent:</strong> For any other purpose with your explicit prior consent.</li>
          </ul>
        </Section>

        <Section title="5. Data Security">
          <p>We implement industry-standard security measures to protect your personal information, including SSL encryption, secure servers, and access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
        </Section>

        <Section title="6. Cookies">
          <p>Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser. See our Cookie Policy for more details.</p>
        </Section>

        <Section title="7. Data Retention">
          <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When no longer needed, we securely delete or anonymize your data.</p>
        </Section>

        <Section title="8. Your Rights">
          <p>Under applicable data protection laws, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Withdraw consent at any time (where processing is based on consent)</li>
          </ul>
          <p>To exercise these rights, please contact us at <a href="mailto:info@zentroxdeveloperecommerce.com">info@zentroxdeveloperecommerce.com</a>.</p>
        </Section>

        <Section title="9. Children's Privacy">
          <p>Our services are not directed to children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on this page with an updated revision date. We encourage you to review this policy regularly.</p>
        </Section>

        <Section title="11. Contact Us">
          <p>For privacy-related inquiries, please contact:</p>
          <address>
            ZENTROX DEVELOPER PRIVATE LIMITED<br />
            Shop No-FF 10, Goyal Plaza, Faizabad Road, Indira Nagar<br />
            Lucknow, Uttar Pradesh – 226016, India<br />
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
        <div className="prose prose-slate max-w-none space-y-8">
          {children}
        </div>
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
