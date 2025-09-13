import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <Image 
                  src="/Instant_Listing_Logo.png" 
                  alt="Instant Listing Logo" 
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <h1 className="text-2xl font-bold gradient-text">Instant Listing</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#features" className="text-foreground hover:text-primary transition-colors">Features</Link>
                <Link href="#demo" className="text-foreground hover:text-primary transition-colors">Demo</Link>
                <Link href="#screenshots" className="text-foreground hover:text-primary transition-colors">How It Works</Link>
                <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://apps.apple.com/app/instant-listing" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/Download_on_the_App_Store_Badge.svg.png" 
                  alt="Download on the App Store" 
                  width={200}
                  height={64}
                  className="h-12 w-auto hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 animate-fade-in">
                🚀 AI-Powered Product Listings
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-4 animate-fade-in">
                <span className="gradient-text">Scan, Snap, Sell</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-600 dark:text-gray-300 mb-6 animate-fade-in">
                Turn Photos Into Product Listings Instantly
              </h2>
              <p className="text-xl sm:text-2xl text-text-muted mb-8 animate-slide-up leading-relaxed">
                Take a photo, and let AI do the rest! Create professional, SEO-optimized product listings instantly for eBay and more. 
                <span className="font-bold text-primary"> Stop typing. Start selling.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 animate-slide-up">
                <a href="https://apps.apple.com/app/instant-listing" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="/Download_on_the_App_Store_Badge.svg.png" 
                    alt="Download on the App Store" 
                    width={200}
                    height={64}
                    className="h-16 w-auto hover:opacity-90 transition-opacity"
                  />
                </a>
                <Link href="#demo" className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all inline-block text-center">
                  Watch Demo
                </Link>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-text-muted animate-slide-up">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  AI analyzes any product photo
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Complete listing in seconds
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Perfect for resellers & sellers
                </div>
              </div>
            </div>

            {/* Right Column - Floating App Screenshots */}
            <div className="relative animate-slide-up">
              <div className="relative mx-auto max-w-md h-96 flex items-center justify-center">
                {/* Main Phone - Centered and smaller with floating animation */}
                <div className="relative z-20 animate-float">
                  <Image 
                    src="/phone_specs_description.png" 
                    alt="Instant Listing App - Generate listing screen" 
                    width={256}
                    height={512}
                    className="w-64 h-auto drop-shadow-2xl"
                    style={{
                      background: 'transparent'
                    }}
                  />
                </div>

                {/* Floating Listing Cards with Balanced Distribution */}
                
                {/* MacBook Air - Top Right (Primary) */}
                <div className="absolute -top-2 -right-4 z-30 transform rotate-8 hover:rotate-4 transition-all duration-500 hover:scale-105 animate-float-delayed-1">
                  <Image 
                    src="/Listing (4).png" 
                    alt="Generated listing example - MacBook Air" 
                    width={144}
                    height={256}
                    className="w-36 h-auto drop-shadow-2xl"
                  />
                </div>

                {/* Nike Sneakers - Top Left (Secondary) */}
                <div className="absolute -top-6 -left-8 z-25 transform -rotate-6 hover:-rotate-3 transition-all duration-500 hover:scale-105 animate-float-delayed-2">
                  <Image 
                    src="/Listing (2).png" 
                    alt="Generated listing example - Nike Sneakers" 
                    width={128}
                    height={256}
                    className="w-32 h-auto drop-shadow-xl"
                  />
                </div>

                {/* LEGO DeLorean - Bottom Left (Tertiary) */}
                <div className="absolute bottom-20 -left-6 z-10 transform -rotate-2 scale-75 blur-sm hover:blur-none hover:scale-85 hover:rotate-1 transition-all duration-500 animate-float-delayed-3">
                  <Image 
                    src="/Listing (3).png" 
                    alt="Generated listing example - LEGO DeLorean" 
                    width={112}
                    height={256}
                    className="w-28 h-auto drop-shadow-lg"
                  />
                </div>

                {/* Burberry Handbag - Bottom Right (Secondary) */}
                <div className="absolute bottom-2 -right-8 z-15 transform rotate-12 hover:rotate-6 transition-all duration-500 hover:scale-105 animate-float-delayed-4">
                  <Image 
                    src="/Listing (1).png" 
                    alt="Generated listing example - Burberry Handbag" 
                    width={120}
                    height={256}
                    className="w-30 h-auto drop-shadow-xl"
                  />
                </div>

                {/* Additional Listing - Top Center (Tertiary) */}
                <div className="absolute top-70 right-85 z-25 transform -rotate-18 hover:-rotate-10 transition-all duration-500 hover:scale-105 animate-float-delayed-2">
                  <Image 
                    src="/Listing.png" 
                    alt="Generated listing example" 
                    width={120}
                    height={256}
                    className="w-30 h-auto drop-shadow-lg"
                  />
                </div>


                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10 animate-float-delayed-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Instant Listing?
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Everything you need to create professional product listings that sell
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Photo to Product Listing */}
            <div className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Photo to Product Listing</h3>
              <p className="text-text-muted">Snap a picture of any product and get an SEO-optimized title, description, and suggested details automatically.</p>
            </div>

            {/* 2. AI-Enhanced Descriptions */}
            <div className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">AI-Enhanced Descriptions</h3>
              <p className="text-text-muted">Write compelling, clear, and keyword-rich product descriptions that boost visibility and sales.</p>
            </div>

            {/* 3. Smart Pricing */}
            <div className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Smart Pricing</h3>
              <p className="text-text-muted">Get AI-suggested pricing based on market data and similar listings to maximize your sales.</p>
            </div>

            {/* 4. Organize & Edit */}
            <div className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Organize & Edit</h3>
              <p className="text-text-muted">Save and edit your generated listings before publishing. Full control over your content.</p>
            </div>

            {/* 5. Bulk Listing Support */}
            <div className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Bulk Listing Support</h3>
              <p className="text-text-muted">Quickly create multiple listings for large inventories. Perfect for resellers and small businesses.</p>
            </div>

            {/* 6. Platform-Ready */}
            <div className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Platform-Ready</h3>
              <p className="text-text-muted">Designed for eBay, Etsy, Facebook Marketplace, and more. Export your listings with one tap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              See Instant Listing in Action
            </h2>
            <p className="text-xl text-text-muted">
              Watch how easy it is to create professional listings with just a photo
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HS4V52jAG9s"
                title="Listing AI - Gemini API Developer Competition #buildwithgemini"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section id="screenshots" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-text-muted">
              Three simple steps to create professional product listings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-background p-8 rounded-2xl shadow-lg mb-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Scan & Snap</h3>
                <p className="text-text-muted">Simply snap a photo of any product item with your phone camera</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-background p-8 rounded-2xl shadow-lg mb-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">AI Generates</h3>
                <p className="text-text-muted">Our advanced AI creates product title, description, and pricing suggestions</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-background p-8 rounded-2xl shadow-lg mb-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">List & Sell</h3>
                <p className="text-text-muted">Review, customize if needed, and export to eBay, Etsy, Facebook Marketplace and more</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Start Selling Faster?
          </h2>
          <p className="text-xl text-text-muted mb-8">
            Download Instant Listing today and supercharge your online sales!
          </p>
          <div className="flex justify-center">
            <a href="https://apps.apple.com/app/instant-listing" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/Download_on_the_App_Store_Badge.svg.png" 
                alt="Download on the App Store" 
                width={200}
                height={64}
                className="h-16 w-auto hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">Instant Listing</h3>
              <p className="text-text-muted mb-6 max-w-md">
                The fastest way to create professional product listings that sell. Scan, snap, and sell with AI-powered listing generation.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/instantlisting" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://facebook.com/instantlisting" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/instantlisting" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">App</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-text-muted hover:text-primary transition-colors">Features</Link></li>
                <li><Link href="#demo" className="text-text-muted hover:text-primary transition-colors">Demo</Link></li>
                <li><Link href="#screenshots" className="text-text-muted hover:text-primary transition-colors">How It Works</Link></li>
                <li><a href="https://apps.apple.com/app/instant-listing" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">Download</a></li>
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
  );
}
