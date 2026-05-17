import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@ShrinivasInamdar",
    href: "https://github.com/ShrinivasInamdar",
    color: "bg-[#0B0B0B]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Shrinivas Inamdar",
    href: "https://linkedin.com/in/shrinivas-inamdar-a83a30237",
    color: "bg-[#2F81F7]",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    handle: "@__shrinivas__",
    href: "https://x.com/__shrinivas__",
    color: "bg-[#0B0B0B]",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "shrinivasinamdar6@gmail.com",
    href: "mailto:shrinivasinamdar6@gmail.com",
    color: "bg-[#FF6B7A]",
  },
]

export function ArticlesSection() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Let's build something{" "}
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">
              meaningful.
            </span>
          </h2>
          <Button
            variant="outline"
            className="border-[3px] border-black rounded-xl px-4 md:px-6 py-4 md:py-6 hover:bg-gray-50 bg-white font-semibold text-sm md:text-base w-full sm:w-auto"
            asChild
          >
            <a href="mailto:shrinivasinamdar6@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Email me directly
            </a>
          </Button>
        </div>

        {/* Social cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group bg-white border-[3px] border-black rounded-3xl p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all duration-300"
            >
              <div
                className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center mb-4 border-2 border-black`}
              >
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <div className="font-bold text-lg text-[#0B0B0B] mb-1">{s.label}</div>
              <div className="text-gray-500 text-sm mb-4 break-all">{s.handle}</div>
              <div className="flex items-center gap-1 font-semibold text-sm group-hover:gap-2 transition-all">
                Connect <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA banner */}
        <div className="bg-black text-white rounded-[32px] border-4 border-black p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[8px_8px_0px_0px_rgba(99,102,241,1)]">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-3">
              Open to opportunities.
            </h3>
            <p className="text-gray-400 text-base md:text-lg max-w-lg">
              Freelance, full-time, or interesting collaborations — I'm available.
              Based in Goa, India · Remote friendly.
            </p>
          </div>
          <Button
            className="bg-[#FFC224] text-black hover:bg-yellow-300 border-[3px] border-black rounded-xl py-5 px-8 md:py-[22px] md:px-[52px] text-base md:text-lg font-semibold h-auto flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"
            asChild
          >
            <a href="mailto:shrinivasinamdar6@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Let's work together
            </a>
          </Button>
        </div>

        <NewsletterSignup />
      </div>
    </section>
  )
}
