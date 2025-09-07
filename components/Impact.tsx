import { Leaf, Users, TrendingUp, Accessibility, Smartphone, LayoutDashboard} from 'lucide-react'
import { Container } from './Container'

const impacts = [
  {
    icon: TrendingUp,
    title: 'Operational Efficiency',
    description: 'Reduce manual booking overhead by automating repetitive tasks and payment verification',
    metric: 'Lower overhead'
  },
  {
    icon: Users,
    title: 'Customer Satisfaction',
    description: 'Instant responses, 24/7 availability, and familiar WhatsApp interface customers love',
    metric: 'Higher retention'
  },
  {
    icon: Smartphone,
    title: 'Universal Access',
    description: 'No app downloads, works on any phone, accessible to all demographics and regions',
    metric: 'Broader reach'
  },
  {
    icon: LayoutDashboard, // replaced Leaf
    title: 'Admin Control & Insights',
    description: 'Centralized admin panel for managing reservations, monitoring activity, and generating reports',
    metric: 'Smarter management',
  },
]

export function Impact() {
  return (
    <section id="impact" className="section-padding bg-gradient-to-br from-purple-50 to-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
            Impact & <span className="gradient-text">Efficiency</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            RezervirAI doesn't just streamline operations—it transforms how venues 
            manage VIP experiences while enhancing impact and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {impacts.map((impact) => (
            <div key={impact.title} className="card p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-brand rounded-xl flex items-center justify-center">
                    <impact.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{impact.title}</h3>
                  <p className="text-gray-600 mb-3">{impact.description}</p>
                  <div className="inline-flex items-center text-sm font-medium text-brand-primary">
                    <span className="mr-2">→</span>
                    {impact.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key statement */}
        <div className="mt-12 text-center">
          <div className="card inline-block px-8 py-4">
            <p className="text-lg font-medium text-gray-900">
              Built for the future. <span className="gradient-text">Ready today.</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
