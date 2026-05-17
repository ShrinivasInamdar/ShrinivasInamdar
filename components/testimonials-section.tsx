"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pt-4 md:pt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]">
            What I'm currently
            <br />
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">
              building
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto pb-8">
            My biggest ongoing project — combining sustainability with modern tech.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white border-4 border-black rounded-3xl py-8 md:py-14 px-6 md:px-8 md:pr-72 lg:pr-72 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Quote icon repurposed as a logo badge */}
            <div className="absolute -top-6 md:-top-8 left-6 md:left-8">
              <span className="inline-block bg-[#6366F1] text-white text-xs font-bold px-4 py-2 rounded-full border-2 border-black">
                IN PROGRESS
              </span>
            </div>

            <div className="md:max-w-[65%]">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0B0B0B]">
                CarbonBazaar
              </h3>
              <p className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed text-gray-700">
                A carbon credit marketplace that enables businesses to discover, buy, and
                track verified carbon offsets. Bridging sustainability goals with
                transparent, modern web technology. I'm co-founding this and leading the
                product + engineering side.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js", "Supabase", "TypeScript", "Node.js"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold bg-black text-white px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div>
                <div className="font-bold text-base md:text-lg text-[#0B0B0B]">
                  Shrinivas Inamdar
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Co-Founder & Developer · CarbonBazaar
                </div>
              </div>
            </div>
          </div>

          {/* Side photo */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hidden lg:block">
            <Image
              src="/shrini.png"
              alt="Shrinivas Inamdar"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
