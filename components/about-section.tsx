import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Photo */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg aspect-square border-[4px] border-black rounded-full overflow-hidden bg-[#FF6B6B] shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/shrini.png"
              alt="Shrinivas Inamdar"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who's behind all this{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">
                great work?
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              I'm a computer engineering student from Goa, India — obsessed with building
              things that matter. I co-founded CarbonBazaar, intern at Fluxatic Global as
              a full-stack developer, host tech events, shoot photography, and constantly
              explore the startup world through my college's Entrepreneurship Cell.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  2+ internships, 5+ live projects
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Currently interning at Fluxatic Global (Full-Stack Dev) with an upcoming
                  role at S S Technologies. Shipped real products used by real people.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Startup founder & E-Cell member
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Co-building CarbonBazaar — a carbon credit marketplace. Active in the
                  college Entrepreneurship Cell, hackathons, and startup pitches.
                </p>
              </div>
            </div>
          </div>

          <Button
            className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            asChild
          >
            <a href="https://linkedin.com/in/shrinivas-inamdar-a83a30237" target="_blank" rel="noopener noreferrer">
              <User className="w-5 h-5" />
              More about me
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
