import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const experiences = [
  {
    period: "May 2025 — Present",
    title: "Technical Intern — Full-Stack Developer",
    company: "Fluxatic Global",
    description:
      "Building and maintaining production web applications as a full-stack developer in a fast-paced startup. Working across React, Next.js, and backend services.",
    icon: "/images/agency.png",
  },
  {
    period: "July 2025 — Upcoming",
    title: "Technical Intern — Full-Stack Developer",
    company: "S S Technologies",
    description:
      "Joining as a full-stack developer intern, contributing to real-world product engineering and modern web development.",
    icon: "/images/company.png",
  },
  {
    period: "2025 — Present",
    title: "Co-Founder & Developer",
    company: "CarbonBazaar",
    description:
      "Building a carbon credit marketplace connecting businesses and offset projects. Driving both product and technical strategy from the ground up.",
    icon: "/images/startup.png",
  },
  {
    period: "2024 — Present",
    title: "Member & Event Host",
    company: "College E-Cell & Tech Events",
    description:
      "Active Entrepreneurship Cell member. Organised hackathons and startup pitches. Hosted and moderated multiple college tech events and developer meetups.",
    icon: "/images/busines.png",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Sticky heading */}
          <div className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my{" "}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">
                past experience
              </span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              From internships at startups to co-founding my own — I've been building,
              shipping, and learning at every step.
            </p>
            <Button
              className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              asChild
            >
              <a href="https://linkedin.com/in/shrinivas-inamdar-a83a30237" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5" />
                See full profile
              </a>
            </Button>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]"
              >
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[20px] leading-tight font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  <div className="rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Image
                      src={exp.icon}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full"
                    />
                  </div>
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6" />

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    {exp.company}
                  </div>
                  <h3 className="text-xl md:text-[26px] leading-tight md:leading-[38px] font-bold text-[#0B0B0B] mb-2 md:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-[#393939] text-base md:text-[18px] leading-relaxed md:leading-[30px]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
