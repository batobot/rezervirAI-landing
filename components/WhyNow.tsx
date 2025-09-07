import { TrendingUp, Smartphone, Brain, Users } from 'lucide-react'
import { Container } from './Container'

const trends = [
  {
    icon: Smartphone,
    title: 'Messaging-First Commerce',
    description: '2B+ WhatsApp users globally. Customers expect businesses where they communicate daily.'
  },
  {
    icon: Brain,
    title: 'AI Maturity',
    description: 'OCR and NLP technologies have reached accuracy levels enabling reliable automation.'
  },
  {
    icon: Users,
    title: 'Labor Optimization',
    description: 'Venues need to maximize revenue per staff member while maintaining VIP service quality.'
  }
]

export function WhyNow() {
  return (
    <section id="why-now" className="section-padding bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Why <span className="gradient-text">Now</span>
            </h2>
            <p className="text-lg text-gray-600">
              The convergence of messaging adoption, AI capabilities, and changing customer 
              expectations creates the perfect moment for intelligent reservation systems.
            </p>
          </div>

          <div className="space-y-6">
            {trends.map((trend, index) => (
              <div key={trend.title} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <trend.icon className="h-5 w-5 text-brand-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{trend.title}</h3>
                  <p className="text-gray-600">{trend.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Market opportunity statement */}
          <div className="mt-12 p-8 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
            <p className="text-center text-lg text-gray-900 font-medium">
              "Communities expect more with less friction. 
              <span className="gradient-text"> AI and modern infrastructure make it possible today.</span>"
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
