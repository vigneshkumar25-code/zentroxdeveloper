import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms and Conditions – ZENTROX DEVELOPER PRIVATE LIMITED' },
      { name: 'description', content: 'Terms and Conditions governing the use of ZENTROX DEVELOPER PRIVATE LIMITED website and services.' },
    ],
  }),
  component: TermsPage,
})

function TermsPage() {
  return (
    <>
      <LegalHero title="Terms and Conditions" updated="June 1, 2025" />
      <LegalContent>
        <Section title="1. Acceptance of Terms">
          <p>By accessing or using the website and services of ZENTROX DEVELOPER PRIVATE LIMITED ("Company"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
        </Section>

        <Section title="2. Services">
          <p>ZENTROX DEVELOPER PRIVATE LIMITED provides Information Technology services including but not limited to:</p>
          <ul>
            <li>Custom software development and consulting</li>
            <li>Web and mobile application development</li>
            <li>Software licensing services</li>
            <li>Database design and administration</li>
            <li>Software distribution and deployment</li>
            <li>IT design and consulting services</li>
          </ul>
          <p>The specific scope, deliverables, timelines, and pricing for each engagement will be defined in a separate Statement of Work (SOW) or Service Agreement signed between the parties.</p>
        </Section>

        <Section title="3. Intellectual Property">
          <p><strong>Client Materials:</strong> You retain ownership of all materials, data, and content you provide to us for the purpose of delivering our services.</p>
          <p><strong>Developed Work:</strong> Upon full payment of fees, intellectual property rights in custom-developed work are transferred to the client as specified in the applicable service agreement, unless otherwise agreed in writing.</p>
          <p><strong>Company Tools & Frameworks:</strong> We retain ownership of our proprietary development tools, frameworks, methodologies, and pre-existing intellectual property. Any licenses granted to clients for such tools are non-exclusive and non-transferable.</p>
          <p><strong>Website Content:</strong> All content on this website, including text, graphics, logos, and code, is the property of ZENTROX DEVELOPER PRIVATE LIMITED and may not be reproduced without permission.</p>
        </Section>

        <Section title="4. Payment Terms">
          <p>Payment terms are specified in individual service agreements. Generally:</p>
          <ul>
            <li>An advance payment (as specified in the SOW) is required to commence work</li>
            <li>Milestone payments are due upon completion of defined deliverables</li>
            <li>Final payment is required before delivery of final work products</li>
            <li>Late payments may incur interest charges as specified in the service agreement</li>
          </ul>
        </Section>

        <Section title="5. Confidentiality">
          <p>Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the engagement. This obligation survives the termination of any service agreement.</p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZENTROX DEVELOPER PRIVATE LIMITED SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES arising from the use of our services or this website.</p>
          <p>Our total liability for any claim arising from our services shall not exceed the total fees paid by you for the specific service giving rise to the claim in the three months preceding the claim.</p>
        </Section>

        <Section title="7. Warranties and Disclaimers">
          <p>We warrant that our services will be performed in a professional manner consistent with industry standards. EXCEPT AS EXPRESSLY SET FORTH HEREIN, OUR SERVICES AND WEBSITE ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.</p>
        </Section>

        <Section title="8. Termination">
          <p>Either party may terminate a service agreement as specified therein. Upon termination, the client shall pay for all work completed up to the termination date. Work products created prior to termination will be delivered upon receipt of all outstanding payments.</p>
        </Section>

        <Section title="9. Governing Law">
          <p>These Terms and any disputes arising hereunder shall be governed by and construed in accordance with the laws of India. Any legal proceedings shall be subject to the exclusive jurisdiction of courts in Lucknow, Uttar Pradesh, India.</p>
        </Section>

        <Section title="10. Changes to Terms">
          <p>We reserve the right to modify these Terms at any time. Changes are effective upon posting to this website. Continued use of our services after any modifications constitutes acceptance of the updated Terms.</p>
        </Section>

        <Section title="11. Contact">
          <p>For questions about these Terms, contact us at:</p>
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
