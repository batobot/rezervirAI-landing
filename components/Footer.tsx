import { Container } from './Container'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <Container>
        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Rezervir<span className="gradient-text">AI</span>
              </span>
            </div>

            {/* Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="mailto:contact@rezervirai.com" className="hover:text-white transition-colors">
                contact@rezervirai.com
              </a>
            </div>

            {/* Brand personality */}
            <div className="text-sm">
              <span className="text-gray-500">Modern • Trustworthy • Pragmatic • Ambitious</span>
            </div>
          </div>
          {/* Copyright 
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2025 RezervirAI. All rights reserved.</p>
            
            {/* Brand colors preview
            <div className="mt-4 flex justify-center space-x-2">
              <div className="w-6 h-6 bg-brand-primary rounded" title="#7C3AED"></div>
              <div className="w-6 h-6 bg-brand-secondary rounded" title="#A78BFA"></div>
              <div className="w-6 h-6 bg-brand-accent rounded" title="#C084FC"></div>
              <div className="w-6 h-6 bg-gray-900 rounded border border-gray-700" title="#0B0F13"></div>
              <div className="w-6 h-6 bg-gray-100 rounded" title="#F3F4F6"></div>
            </div>
          </div>
          */}
        </div>
      </Container>
    </footer>
  )
}
