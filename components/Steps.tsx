import { MessageSquare, Upload, CheckCircle, QrCode } from 'lucide-react'
import { Container } from './Container'

const steps = [
  {
    icon: MessageSquare,
    title: 'Guest Initiates',
    description: 'VIP guest sends a WhatsApp message to your venue\'s business number'
  },
  {
    icon: Upload,
    title: 'AI Guides Booking',
    description: 'Smart flow collects table preferences, bottle orders, and payment proof'
  },
  {
    icon: CheckCircle,
    title: 'Instant Verification',
    description: 'AI analyzes uploads and auto-approves valid payments in seconds'
  },
  {
    icon: QrCode,
    title: 'VIP Check-in',
    description: 'Guests receive QR codes for express entry and VIP table assignment'
  }
]

export function Steps() {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
            How <span className="gradient-text">RezervirAI</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From initial contact to confirmed reservation in minutes, not hours. 
            Our intelligent workflow handles the complexity while keeping the experience simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary"></div>
              )}
              
              <div className="relative card p-6 h-full">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-brand-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-600">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>Average processing time: Under 2 minutes</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
