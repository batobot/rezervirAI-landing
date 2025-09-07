'use client'

import { ArrowRight, MessageSquare, Zap } from 'lucide-react'
import { Container } from './Container'
import { Button } from './Button'

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40 pointer-events-none -z-10">
        <div className="absolute top-1/2 -translate-y-1/2 left-10 w-72 h-72 bg-brand-secondary/20 rounded-full blur-3xl transform-gpu" />
        <div className="absolute top-1/2 -translate-y-1/2 right-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl transform-gpu" />
      </div>

      <Container className="relative">
        <div className="py-20 lg:py-32">
          <div className="text-center">
            {/* Status badge */}
            {/* <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                Pre-Seed • Setting up first venue partnerships
              </span>
            </div> */}

            {/* Main headline */}
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl text-gray-900 mb-6 leading-tight">
              Smart table bookings,{' '}
              <span className="gradient-text">right where</span>{' '}
              guests are
            </h1>

            {/* Subtext */}
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              RezervirAI streamlines VIP table and bottle service reservations for clubs and event venues 
              through WhatsApp with AI-powered payment verification. Built for nightlife excellence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" onClick={scrollToContact} className="group">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button variant="secondary" size="lg" onClick={scrollToContact}>
                Partner With Us
              </Button> */}
            </div>

            {/* Key differentiators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-600">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-brand-primary" />
                <span>WhatsApp Native</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-brand-primary" />
                <span>Going Live Q4 2025</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded bg-brand-primary flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Limited Spots</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded bg-brand-primary flex items-center justify-center">
                  <span className="text-white text-xs">🚀</span>
                </div>
                <span>Early Partner Benefits</span>
              </div>
            </div>
          </div>

          {/* Product preview placeholder */}
          <div className="mt-16 relative">
            <div className="card max-w-4xl mx-auto p-8">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    WhatsApp Integration Demo
                  </p>
                  <p className="text-gray-500">
                    Interactive reservation flow mockup
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 transform">
              <div className="card p-4 text-center">
                <div className="text-2xl font-bold text-brand-primary">Q4 2025</div>
                <div className="text-sm text-gray-600">First Events</div>
              </div>
            </div>
            
            <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 transform">
              <div className="card p-4 text-center">
                <div className="text-2xl font-bold text-brand-primary">3+</div>
                <div className="text-sm text-gray-600">Venues Onboarding</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
