import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Terms of Service - Instant Listing",
  description: "Terms of Service for Instant Listing - AI-powered product listing app",
}

export default function TermsPage() {
  // Read the terms file
  const termsPath = path.join(process.cwd(), 'src/app/terms_services.txt')
  const termsContent = fs.readFileSync(termsPath, 'utf8')

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

      {/* Terms of Service Content */}
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-text-muted">
              Last updated: September 13, 2025
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-2xl shadow-lg">
            <div 
              className="prose prose-lg max-w-none text-text-muted"
              dangerouslySetInnerHTML={{
                __html: termsContent
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
                <Image 
                  src="/Instant_Listing_Logo.png" 
                  alt="Instant Listing" 
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-text-muted mb-4 max-w-md">
                Turn photos into perfect product listings instantly! Create AI-powered listings in seconds for eBay and more.
              </p>
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