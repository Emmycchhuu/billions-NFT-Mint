"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"


const billionsGenesisList = [
  {
    name: "Billions Genesis",
    image: "/billions-genesis.png",
    description:
      "The original and most coveted NFT in the Billions ecosystem. This golden 'B' represents the foundation of our revolutionary network.",
    traits: ["Genesis", "Golden", "Legendary", "Founder"],
    rarity: "Genesis",
    price: "0.0244 WETH",
  },
  {
    name: "Billions Genesis",
    image: "/billions-genesis.png",
    description:
      "The original and most coveted NFT in the Billions ecosystem. This golden 'B' represents the foundation of our revolutionary network.",
    traits: ["Genesis", "Golden", "Legendary", "Founder"],
    rarity: "Genesis",
    price: "0.0277 WETH",
  },
  {
    name: "Billions Genesis",
    image: "/billions-genesis.png",
    description:
      "The original and most coveted NFT in the Billions ecosystem. This golden 'B' represents the foundation of our revolutionary network.",
    traits: ["Genesis", "Golden", "Legendary", "Founder"],
    rarity: "Genesis",
    price: "0.03 WETH",
  },
  {
    name: "Billions Genesis",
    image: "/billions-genesis.png",
    description:
      "The original and most coveted NFT in the Billions ecosystem. This golden 'B' represents the foundation of our revolutionary network.",
    traits: ["Genesis", "Golden", "Legendary", "Founder"],
    rarity: "Genesis",
    price: "0.0777 WETH",
  },
]

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1eeb528b-481a-4338-9216-7d78fb273cc7-pXCrXgPHyZODv1KrioCHd9yhQ5NTFM.jpeg"
          alt=""
          className="absolute top-10 left-10 w-16 h-16 opacity-20 animate-pulse"
        />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/606516a5-c39f-49c0-8e62-dcf1b6279f75-oFHeDE2JWETyhQpZzpM9spTMHRa42S.jpeg"
          alt=""
          className="absolute top-20 right-10 w-20 h-20 opacity-15 animate-bounce"
        />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/74913642-a975-4787-af42-e49e1d53981e-XO1LsZmvnThSrx5B2BziQ5DpRupSn8.jpeg"
          alt=""
          className="absolute bottom-20 left-20 w-18 h-18 opacity-25 animate-pulse"
        />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6792192f-0d03-46a7-8d91-8e569912e39a-bfZXxTGuuaIypRy9gxU95ycOJsyrft.jpeg"
          alt=""
          className="absolute bottom-10 right-20 w-16 h-16 opacity-20 animate-bounce"
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
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap"
              >
                <a href="https://opensea.io/collection/billions-genesis" target="_blank" rel="noopener noreferrer">
                  Mint
                </a>
              </Button>
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

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl sm:text-6xl font-black text-center text-white mb-12 sm:mb-16 drop-shadow-2xl">
            Billions Genesis Collection
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {billionsGenesisList.map((nft, index) => (
              <div
                key={index}
                className="bg-white/25 backdrop-blur-md rounded-3xl p-4 sm:p-6 text-center border border-white/20 shadow-xl"
              >
                <div className="aspect-square mb-4 rounded-2xl overflow-hidden bg-white/30 backdrop-blur-md">
                  <img
                    src={nft.image || "/placeholder.svg"}
                    alt={`${nft.name} #${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  {nft.name} #{index + 1}
                </h3>
                <Badge className="bg-yellow-100 text-yellow-800 font-bold mb-4">{nft.rarity}</Badge>
                <p className="text-white/90 text-sm sm:text-base font-semibold mb-4">{nft.description}</p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {nft.traits.map((trait, traitIndex) => (
                    <Badge key={traitIndex} className="bg-white/30 text-white border-white/40 font-bold text-xs">
                      {trait}
                    </Badge>
                  ))}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-4">{nft.price}</div>
                <Button
                  asChild
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-black px-6 py-2 rounded-full w-full"
                >
                  <a href="https://opensea.io/collection/billions-genesis" target="_blank" rel="noopener noreferrer">
                    Mint Now
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 sm:mt-16">
            <Button
              asChild
              className="bg-white/30 hover:bg-white/40 text-white font-bold px-8 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200"
            >
              <Link href="/">← Back</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
