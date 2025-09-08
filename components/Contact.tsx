'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Container } from './Container'
import { Button } from './Button'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    consent: false,
    botcheck: '' // Honeypot field for spam protection
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Check honeypot field (spam protection)
    if (formData.botcheck) {
      // Bot detected, silently fail
      setStatus('success')
      setFormData({ name: '', email: '', organization: '', message: '', consent: false, botcheck: '' })
      return
    }

    // Input sanitization - strip dangerous characters and limit length
    const sanitizeInput = (str: string, maxLength: number = 500) => {
      return str.replace(/<script[^>]*>.*?<\/script>/gi, '')
                .replace(/<[^>]*>/g, '')
                .trim()
                .slice(0, maxLength)
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      return
    }

    // Web3Forms configuration with sanitized inputs
    const web3FormsData = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
      subject: `New Contact from ${sanitizeInput(formData.name, 100)} - RezervirAI`,
      from_name: 'RezervirAI Contact Form',
      name: sanitizeInput(formData.name, 100),
      email: sanitizeInput(formData.email, 254), // Max email length per RFC
      organization: sanitizeInput(formData.organization, 200),
      message: sanitizeInput(formData.message, 2000),
      consent: formData.consent ? 'Yes' : 'No',
      // Security features
      botcheck: false,
      replyto: sanitizeInput(formData.email, 254)
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(web3FormsData)
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', organization: '', message: '', consent: false, botcheck: '' })
      } else {
        console.error('Form submission failed:', data)
        setStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-purple-50 to-white">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ready to transform your VIP table management? Let's discuss how RezervirAI 
              can maximize your venue's revenue.
            </p>
          </div>

          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={254}
                  pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="your@email.com"
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  maxLength={200}
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Company or fund name"
                  autoComplete="organization"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Tell us about your interest in RezervirAI..."
                />
              </div>

              {/* Honeypot field - hidden from users but visible to bots */}
              <input
                type="text"
                name="botcheck"
                aria-hidden="true"
                value={formData.botcheck}
                onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                />
                <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                  I agree to be contacted about pilots and investment opportunities
                </label>
              </div>

              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full"
              >
                {status === 'loading' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  Thank you! We'll be in touch soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                No cookies, no tracking. We respect your inbox.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
