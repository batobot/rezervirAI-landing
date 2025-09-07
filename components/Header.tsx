'use client'

import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from './Container'
import { Button } from './Button'

const navigation = [
  { name: 'Product', href: '#product' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Impact', href: '#impact' },
  { name: 'Why Now', href: '#why-now' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrollYRef = useRef(0)

  // Fixed-body scroll lock (no layout/centering shift)
  useEffect(() => {
    const { body } = document

    if (mobileMenuOpen) {
      // store current scroll
      scrollYRef.current = window.scrollY || window.pageYOffset || 0

      // lock the body in place
      body.style.position = 'fixed'
      body.style.top = `-${scrollYRef.current}px`
      body.style.left = '0'
      body.style.right = '0'
      body.style.width = '100%' // ensure no reflow
      // important: do NOT add padding-right; fixed body keeps width stable
    } else {
      // restore body
      const y = scrollYRef.current
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      // restore scroll position
      if (y) window.scrollTo(0, y)
    }

    return () => {
      // cleanup if component unmounts during open state
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
    }
  }, [mobileMenuOpen])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Keep blur/translucency desktop-only to avoid iOS fixed-position bugs */}
      <header className="sticky top-0 z-50 bg-white lg:bg-white/95 lg:backdrop-blur-sm border-b border-gray-100">
        <Container>
          <nav className="flex items-center justify-between py-4" aria-label="Main navigation">
            {/* Logo */}
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5" aria-label="RezervirAI home">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                  <span className="font-heading font-bold text-xl text-gray-900">
                    Rezervir<span className="gradient-text">AI</span>
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium leading-6 text-gray-700 hover:text-brand-primary transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Button onClick={scrollToContact}>
                Request Intro Call
              </Button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile menu rendered outside header to avoid stacking/position issues */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden">
          {/* Clickable overlay */}
          <button
            aria-label="Close mobile menu"
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-[60] bg-black/30"
            // Add safe-area padding to avoid notch clipping on some devices
            style={{ paddingRight: 'env(safe-area-inset-right)' }}
          />

          {/* Slide-over panel */}
          <div
            className="fixed inset-y-0 right-0 z-[61] w-full sm:max-w-sm bg-white px-6 py-6 shadow-xl"
            style={{
              paddingRight: 'max(1.5rem, env(safe-area-inset-right))', // keep inner padding comfortable with notch
            }}
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                  <span className="font-heading font-bold text-xl text-gray-900">
                    Rezervir<span className="gradient-text">AI</span>
                  </span>
                </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="pt-6">
                <Button onClick={scrollToContact} className="w-full">
                  Request Intro Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
