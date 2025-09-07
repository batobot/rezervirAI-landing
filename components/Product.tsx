import { Check, Smartphone, Brain, Clock, Shield } from 'lucide-react'
import { Container } from './Container'

const features = [
  {
    icon: Smartphone,
    title: 'Contactless',
    description: 'Customers book directly through WhatsApp - no app downloads or account creation'
  },
  {
    icon: Clock,
    title: 'Real-time',
    description: 'Instant confirmation, live availability updates, and automated status notifications'
  },
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Smart payment verification with 80%+ auto-approval rate using AI'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'End-to-end encryption, privacy-first architecture, and enterprise-grade security'
  }
]

export function Product() {
  return (
    <section id="product" className="section-padding bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Product mockup */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="card p-6">
                <div className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
                  {/* Phone mockup placeholder */}
                  <div className="p-6">
                    <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                      <p className="text-sm text-gray-600">Customer</p>
                      <p className="text-gray-900 font-medium">BOOK VIP2</p>
                    </div>
                    <div className="bg-brand-primary/10 rounded-lg p-4 mb-4">
                      <p className="text-sm text-brand-primary">RezervirAI</p>
                      <p className="text-gray-900">Great! Let's book table VIP2. Please provide your name.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                      <p className="text-sm text-gray-600">Customer</p>
                      <p className="text-gray-900 font-medium">John Doe</p>
                    </div>
                    <div className="bg-brand-primary/10 rounded-lg p-4">
                      <p className="text-sm text-brand-primary">RezervirAI</p>
                      <p className="text-gray-900">Thanks John! What's your phone number?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -z-10 -right-4 -bottom-4 w-full h-full bg-gradient-brand rounded-xl opacity-20 blur-2xl"></div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="order-1 lg:order-2">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-6">
              Built for the modern <span className="gradient-text">nightlife experience</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              RezervirAI transforms how clubs and event venues handle VIP tables and bottle service 
              with intelligent automation that reduces manual work and enhances guest experiences.
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
