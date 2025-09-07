import { CheckCircle } from 'lucide-react'
import { Container } from './Container'

const milestones = [
  'Working prototype complete with full WhatsApp integration',
  'AI payment verification system validated in controlled testing',
  'First venue partnerships secured for Q4 2025 launch',
  'Initial events calendar being finalized with partner venues',
  'Technical infrastructure ready for production deployment',
  'Compliance and security protocols established for live operations'
]

export function Traction() {
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Building <span className="gradient-text">Momentum</span>
            </h2>
            <p className="text-lg text-gray-600">
              From concept to working product, we're systematically validating our approach 
              with real venues and customers.
            </p>
          </div>

          <div className="card p-8">
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{milestone}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text">Q4 2025</div>
                  <div className="text-sm text-gray-600">First Events Live</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-gray-600">Launch Venues</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">Pre-Seed</div>
                  <div className="text-sm text-gray-600">Funding Stage</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">Q1 2026</div>
                  <div className="text-sm text-gray-600">Scale to 10+ Venues</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
