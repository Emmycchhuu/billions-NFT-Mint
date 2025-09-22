"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Twitter, MessageCircle, Globe, ChevronLeft, ChevronRight } from "lucide-react"

export default function LearnMorePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slideImages = [
    { src: "/nft-green-glasses.png", alt: "Green Polka Character" },
    { src: "/nft-blue-crown.png", alt: "Blue Crown Character" },
    { src: "/nft-skull-striped.png", alt: "Skull Striped Character" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slideImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/nft-green-polka.png"
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
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <img src="/logo.png" alt="Billions" className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                <span className="text-lg sm:text-xl font-black text-purple-600 truncate">Billions</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap"
              >
                <Link href="/showcase">Explore</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <img
              src="/billions-banner.png"
              alt="Billions Banner"
              className="w-full max-w-2xl mx-auto mb-6 rounded-2xl shadow-2xl"
            />
            <h1 className="text-4xl sm:text-6xl font-black text-white drop-shadow-2xl">The Human and AI Network</h1>
          </div>

          <div className="bg-white/25 backdrop-blur-md rounded-3xl p-6 sm:p-8 mb-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 text-center">Character Gallery</h2>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slideImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-64 sm:h-80 object-contain bg-white/15 rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md border border-white/20"
                title="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md border border-white/20"
                title="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="flex justify-center mt-4 space-x-2">
                {slideImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-white" : "bg-white/40"
                    }`}
                    title={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/25 backdrop-blur-md rounded-3xl p-6 sm:p-8 mb-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">What is Billions?</h2>
            <p className="text-white/90 text-base sm:text-lg font-semibold mb-6 leading-relaxed">
              Billions is the global human and AI network, built on mobile-first verification to scale the internet of
              value. We uniquely verify the identity and uniqueness of humans and AI agents, empowering users with
              personalized experiences and rewards.
            </p>
            <p className="text-white/90 text-base sm:text-lg font-semibold mb-6 leading-relaxed">
              Our network is designed to be accessible, scalable, and anonymous, making trust between humans and AI
              seamless and intuitive for everyone.
            </p>
          </div>

          <div className="bg-white/25 backdrop-blur-md rounded-3xl p-6 sm:p-8 mb-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">Why Now?</h2>
            <p className="text-white/90 text-base sm:text-lg font-semibold mb-6 leading-relaxed">
              In an age where AI is rapidly intertwining with everyday human experiences—from financial services to
              healthcare and beyond—trust and authenticity are more critical than ever. Without robust identity
              verification, AI interactions risk becoming unaccountable, unsafe, and unreliable.
            </p>
            <p className="text-white/90 text-base sm:text-lg font-semibold mb-6 leading-relaxed">
              Billions addresses this urgent need by offering the first comprehensive verification network that scales
              across all devices, borders, and jurisdictions, ensuring safety, privacy, and trust in every interaction
              between humans and AI.
            </p>
          </div>

          <div className="bg-white/25 backdrop-blur-md rounded-3xl p-6 sm:p-8 mb-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">Our Vision</h2>
            <p className="text-white/90 text-base sm:text-lg font-semibold mb-6 leading-relaxed">
              Billions envisions a connected world where every interaction among humans and AI is authentic, secure, and
              trusted. By bridging the gap between humanity and technology, Billions aims to unlock unprecedented value
              and personalized benefits for every individual, making the digital future equitable, inclusive, and
              uniquely human-centric.
            </p>
          </div>

          <div className="bg-white/25 backdrop-blur-md rounded-3xl p-6 sm:p-8 mb-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">Roadmap</h2>
            <p className="text-white/90 text-base sm:text-lg font-semibold mb-6 leading-relaxed">
              Billions is launching in three key phases to build trust between humans and AI:
            </p>
            <div className="space-y-6">
              <div className="bg-white/15 rounded-2xl p-4">
                <h3 className="text-xl font-black text-white mb-3">1. Human & AI Network</h3>
                <p className="text-white/80 font-semibold">
                  Verify anonymously using just your phone and ID—no invasive biometrics needed. Creating trust between
                  real humans and genuine AI.
                </p>
              </div>
              <div className="bg-white/15 rounded-2xl p-4">
                <h3 className="text-xl font-black text-white mb-3">2. Reputation Layer</h3>
                <p className="text-white/80 font-semibold">
                  Say goodbye to fake followers and meaningless badges. Build a genuine reputation based on real,
                  verified actions and trusted credentials.
                </p>
              </div>
              <div className="bg-white/15 rounded-2xl p-4">
                <h3 className="text-xl font-black text-white mb-3">3. Global Trust Economy</h3>
                <p className="text-white/80 font-semibold">
                  Your verified identity unlocks exclusive benefits, personalized rewards, and unique digital
                  experiences. The more you engage authentically, the richer your digital experience becomes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/25 backdrop-blur-md rounded-3xl p-6 sm:p-8 mb-8 border border-white/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-6">Join 900,000+ Verified Users</h2>
            <p className="text-white/90 text-base sm:text-lg font-semibold mb-6 leading-relaxed">
              Prove you're human and start earning Power — Billions' reward points. The more you use the network, the
              more experiences and ongoing rewards you unlock. Verified humans get access to ongoing rewards and
              unlimited experiences.
            </p>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <Button asChild className="bg-white/20 hover:bg-white/30 text-white border-0 w-12 h-12 rounded-full p-0">
                <a href="https://x.com/billions_ntwk" target="_blank" rel="noopener noreferrer" title="Visit Billions Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-0 w-12 h-12 rounded-full p-0">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button asChild className="bg-white/20 hover:bg-white/30 text-white border-0 w-12 h-12 rounded-full p-0">
                <a href="https://billions.network/" target="_blank" rel="noopener noreferrer" title="Visit Billions Website">
                  <Globe className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-black text-lg px-8 py-3 rounded-full mr-4"
            >
              <a href="https://signup.billions.network/" target="_blank" rel="noopener noreferrer">
                Join Billions Network
              </a>
            </Button>
            <Button
              asChild
              className="bg-white/30 hover:bg-white/40 text-white font-bold px-8 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200"
            >
              <Link href="/">← Back </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
