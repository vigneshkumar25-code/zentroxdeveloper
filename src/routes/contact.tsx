import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact Us – ZENTROX DEVELOPER PRIVATE LIMITED | Lucknow, UP, India' },
      { name: 'description', content: 'Contact ZENTROX DEVELOPER PRIVATE LIMITED. Shop No-FF 10, Goyal Plaza, Faizabad Road, Indira Nagar, Lucknow – 226016. Phone: +91 8763915207.' },
    ],
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <>
      <PageHero />
      <ContactSection />
      <MapSection />
    </>
  )
}

function PageHero() {
  return (
    <section className="hero-gradient text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%"><defs><pattern id="g6" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#g6)"/></svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-brand-700 bg-opacity-60 text-brand-200 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-brand-500 border-opacity-40">Get In Touch</span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-5">Contact Us</h1>
        <p className="text-slate-300 text-lg max-w-xl mx-auto">Reach out to discuss your project requirements, get a quote, or learn more about our services. We respond within 24 hours.</p>
      </div>
    </section>
  )
}

function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', budget: '', message: '', 'bot-field': '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')
    try {
      const resp = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...formData }).toString(),
      })
      setFormState(resp.ok ? 'success' : 'error')
    } catch {
      setFormState('error')
    }
  }

  const upd = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((d) => ({ ...d, [field]: e.target.value }))

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 mb-12 lg:mb-0">
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Reach Us</p>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-5">ZENTROX DEVELOPER PRIVATE LIMITED</h2>
            <div className="section-divider mb-8" />

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">Office Address</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Shop No-FF 10, Goyal Plaza,<br />
                    Faizabad Road, Indira Nagar,<br />
                    Lucknow, Uttar Pradesh – 226016,<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">Phone</p>
                  <a href="tel:+918763915207" className="text-brand-600 hover:text-brand-700 text-sm font-medium no-underline">+91 8763915207</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">Email</p>
                  <a href="mailto:info@zentroxdeveloperecommerce.com" className="text-brand-600 hover:text-brand-700 text-sm font-medium no-underline break-all">
                    info@zentroxdeveloperecommerce.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">WhatsApp</p>
                  <a href="https://wa.me/918763915207" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-sm font-medium no-underline">
                    Message us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-heading font-semibold text-slate-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: 'Monday – Friday', hours: '9:00 AM – 7:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM – 5:00 PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between">
                    <span className="text-slate-600">{h.day}</span>
                    <span className="font-medium text-slate-900">{h.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-100">
                <p className="text-green-700 text-xs font-medium">⚡ Quick Response Promise: We respond to all inquiries within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-slate-500 text-sm mb-7">Fill out the form below and our team will get back to you promptly.</p>

              {formState === 'success' ? (
                <div className="text-center py-12 bg-green-50 rounded-xl border border-green-200">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-heading font-bold text-xl text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                  <input type="hidden" name="form-name" value="contact" />
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
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={upd('phone')} placeholder="+91 XXXXX XXXXX" className="form-input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                      <input type="text" name="company" value={formData.company} onChange={upd('company')} placeholder="Your company" className="form-input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                      <select name="service" value={formData.service} onChange={upd('service')} className="form-input">
                        <option value="">Select a service</option>
                        <option>Software Development</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>Software Licensing</option>
                        <option>Database Solutions</option>
                        <option>IT Consulting</option>
                        <option>IT Design Services</option>
                        <option>Software Distribution</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Project Budget</label>
                      <select name="budget" value={formData.budget} onChange={upd('budget')} className="form-input">
                        <option value="">Select budget range</option>
                        <option>Under ₹50,000</option>
                        <option>₹50,000 – ₹2,00,000</option>
                        <option>₹2,00,000 – ₹5,00,000</option>
                        <option>₹5,00,000 – ₹20,00,000</option>
                        <option>₹20,00,000+</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                    <textarea name="message" rows={5} required value={formData.message} onChange={upd('message')} placeholder="Describe your project, requirements, or questions..." className="form-input resize-none" />
                  </div>
                  {formState === 'error' && (
                    <p className="text-red-600 text-sm mb-4">Something went wrong. Please try again or contact us directly.</p>
                  )}
                  <button type="submit" disabled={formState === 'submitting'} className="btn-primary w-full justify-center text-base py-3.5">
                    {formState === 'submitting' ? 'Sending your message...' : 'Send Message'}
                    {formState !== 'submitting' && (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section className="py-8 bg-slate-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100">
            <h3 className="font-heading font-semibold text-slate-900 text-lg">Find Us on Map</h3>
            <p className="text-slate-500 text-sm mt-1">Shop No-FF 10, Goyal Plaza, Faizabad Road, Indira Nagar, Lucknow – 226016</p>
          </div>
          <div className="h-96">
            <iframe
              title="ZENTROX DEVELOPER Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.5!2d80.9897!3d26.8573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999565e2c0a53f5%3A0x2c3e51b2e1e45c1!2sGoyal%20Plaza%2C%20Faizabad%20Rd%2C%20Indira%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226016!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
