import { Utensils, Music, Users, Calendar, Award, Globe } from 'lucide-react'
import { Container } from './Container'

const useCases = [
  {
    icon: Music,
    title: 'Nightclubs',
    description: 'VIP tables, bottle service, and backstage access without hassle'
  },
  {
    icon: Award,
    title: 'Beach Clubs',
    description: 'Daybeds, cabanas, and premium seating with advance payment verification'
  },
  {
    icon: Users,
    title: 'Music Festivals',
    description: 'VIP zones, artist tables, and exclusive area management'
  },
  {
    icon: Calendar,
    title: 'Concert Venues',
    description: 'Premium boxes, VIP packages, and backstage experiences with tiered pricing'
  },
  {
    icon: Utensils,
    title: 'Rooftop Lounges',
    description: 'Sky tables, sunset sessions, and exclusive events with weather contingencies'
  },
  {
    icon: Globe,
    title: 'Multi-Venue Groups',
    description: 'Hospitality groups with centralized booking and venue-specific configurations'
  }
]

export function UseCases() {
  return (
    <section id="use-cases" className="section-padding bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
            Built for <span className="gradient-text">every venue</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From exclusive nightclubs to massive festivals, RezervirAI adapts to your 
            unique VIP service requirements and operational needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="card p-6 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                <useCase.icon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{useCase.title}</h3>
              <p className="text-gray-600 text-sm">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
