import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Privacy Policy - Instant Listing",
  description: "Privacy Policy for Instant Listing - AI-powered product listing app",
}

export default function PrivacyPage() {
  // Read the privacy policy file
  const privacyPath = path.join(process.cwd(), 'src/app/privacy_policy.txt')
  const privacyContent = fs.readFileSync(privacyPath, 'utf8')

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                <Image 
                  src="/Instant_Listing_Logo.png" 
                  alt="Instant Listing" 
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-text-muted hover:text-primary transition-colors">Home</Link>
              <Link href="/#features" className="text-text-muted hover:text-primary transition-colors">Features</Link>
              <Link href="/#demo" className="text-text-muted hover:text-primary transition-colors">Demo</Link>
              <Link href="/#contact" className="text-text-muted hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-text-muted">
              Last updated: September 13, 2025
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-2xl shadow-lg">
            <div 
              className="prose prose-lg max-w-none text-text-muted"
              dangerouslySetInnerHTML={{
                __html: privacyContent
              }}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
                  <Image 
                    src="/Instant_Listing_Logo.png" 
                    alt="Instant Listing" 
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                  />
                </a>
              </div>
              <p className="text-text-muted mb-4 max-w-md">
                Turn photos into perfect product listings instantly! Create AI-powered listings in seconds for eBay and more.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-text-muted hover:text-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-text-muted hover:text-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-text-muted hover:text-primary transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-3">
                <li><Link href="/#features" className="text-text-muted hover:text-primary transition-colors">Features</Link></li>
                <li><Link href="/#demo" className="text-text-muted hover:text-primary transition-colors">Demo</Link></li>
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="mailto:contact.aimtechnologies@gmail.com" className="text-text-muted hover:text-primary transition-colors">Contact Us</a></li>
                <li><Link href="/privacy" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-text-muted hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              © 2025 Instant Listing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
