"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BillionsHome() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-8">
          <div className="animate-pulse">
            <img
              src="/logo.png"
              alt="Billions Logo"
              className="w-16 h-16 sm:w-24 sm:h-24 animate-[scale_2s_ease-in-out_infinite]"
              style={{
                animation: "scale 2s ease-in-out infinite",
              }}
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white drop-shadow-lg">Billions</h1>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/nft-green-glasses.png"
          alt=""
          className="absolute -top-16 -left-16 w-48 h-48 opacity-10 animate-pulse"
        />
        <img
          src="/nft-blue-crown.png"
          alt=""
          className="absolute -top-20 -right-20 w-56 h-56 opacity-8 animate-bounce"
        />
        <img
          src="/nft-skull-striped.png"
          alt=""
          className="absolute -bottom-24 -left-24 w-52 h-52 opacity-12 animate-pulse"
        />
      </div>

      <nav className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[99vw] px-2">
        <div className="bg-white/95 backdrop-blur-sm rounded-full px-2 sm:px-6 py-2 sm:py-3 shadow-lg overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-between sm:justify-center sm:space-x-6 min-w-0">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <img src="/logo.png" alt="Billions" className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
              <span className="text-lg sm:text-xl font-black text-purple-600 truncate">Billions</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap"
              >
                <Link href="/learn-more">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 text-center px-4">
        <div className="container mx-auto">
          <img
            src="/logo.png"
            alt="Billions"
            className="w-20 h-20 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 animate-pulse"
          />
          <h1 className="text-5xl sm:text-8xl font-black mb-4 sm:mb-6 text-white drop-shadow-2xl">BILLIONS</h1>
          <p className="text-lg sm:text-2xl text-white/90 mb-8 sm:mb-12 font-bold drop-shadow-lg">
            The Human and AI Network
          </p>
          <p className="text-base sm:text-lg text-white/80 mb-8 font-semibold max-w-2xl mx-auto">
            Prove you're human and start earning Power — Billions' reward points. Join 900,000+ verified users worldwide
            in the first comprehensive verification network that scales across all devices, borders, and jurisdictions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-black text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-full"
            >
              <Link href="/showcase">Explore Collection</Link>
            </Button>
            <Button
              asChild
              className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full backdrop-blur-sm"
            >
              <a href="https://signup.billions.network/" target="_blank" rel="noopener noreferrer">
                Join Network
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-5xl font-black text-center text-white mb-12 sm:mb-16">
            Revolutionary Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden">
                <img src="/nft-green-glasses.png" alt="Privacy First" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Privacy-First Verification</h3>
              <p className="text-white/80 font-semibold">
                Verify your identity without invasive biometrics. Just your smartphone and government ID.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden">
                <img src="/nft-blue-crown.png" alt="Global Access" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4">Global Accessibility</h3>
              <p className="text-white/80 font-semibold">
                Available worldwide via Android app. No geographical restrictions or complex requirements.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden">
                <img src="/nft-green-glasses.png" alt="POWER Points" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-4">POWER Points Rewards</h3>
              <p className="text-white/80 font-semibold">
                Earn rewards for verification, referrals, and participation. Convert to tokens in future airdrops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-4xl font-black text-white mb-2">900K+</div>
                <div className="text-white/80 font-semibold">Verified Users</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-black text-white mb-2">$30M</div>
                <div className="text-white/80 font-semibold">Funding Raised</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-black text-white mb-2">Global</div>
                <div className="text-white/80 font-semibold">Accessibility</div>
              </div>
              <div>
                <div className="text-2xl sm:text-4xl font-black text-white mb-2">AI + Human</div>
                <div className="text-white/80 font-semibold">Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 sm:py-16 text-center px-4">
        <div className="container mx-auto">
          <p className="text-white/80 font-bold text-sm sm:text-base">
            © 2025 Billions NFT. Made with ❤️ for the community.
          </p>
        </div>
      </footer>
    </div>
  )
}
