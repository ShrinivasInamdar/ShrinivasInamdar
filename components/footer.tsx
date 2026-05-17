import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#FFC224] border-2 border-white flex items-center justify-center flex-shrink-0">
                  <span className="text-black text-xs font-bold">SI</span>
                </div>
                <span className="text-lg md:text-xl font-bold">Shrinivas Inamdar</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Full-stack developer, startup builder & creative technologist from
                Goa, India. Building things that matter.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Github,   href: "https://github.com/ShrinivasInamdar",                     bg: "bg-white text-black" },
                  { icon: Twitter,  href: "https://x.com/__shrinivas__",                              bg: "bg-[#0B0B0B] border border-gray-700 text-white" },
                  { icon: Linkedin, href: "https://linkedin.com/in/shrinivas-inamdar-a83a30237",       bg: "bg-[#2F81F7] text-white" },
                  { icon: Mail,     href: "mailto:shrinivasinamdar6@gmail.com",                       bg: "bg-[#FF6B7A] text-white" },
                ].map(({ icon: Icon, href, bg }, i) => (
                  <a
                    key={i}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-bold mb-4">Navigate</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {[
                  { label: "Home",       href: "#home" },
                  { label: "About",      href: "#about" },
                  { label: "Projects",   href: "#portfolio" },
                  { label: "Experience", href: "#experience" },
                  { label: "Contact",    href: "#contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h3 className="font-bold mb-4">Projects</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {[
                  { label: "JCI Ponda",           href: "https://www.jciponda.in" },
                  { label: "Intelligent DMS",     href: "https://intelligent-dms.netlify.app/" },
                  { label: "Bank Management",     href: "https://github.com/ShrinivasInamdar/Online-Bank" },
                  { label: "CarbonBazaar",        href: "#" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4">Say hello</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  <a href="mailto:shrinivasinamdar6@gmail.com" className="hover:text-white transition-colors break-all">
                    shrinivasinamdar6@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 shrink-0" />
                  <a
                    href="https://linkedin.com/in/shrinivas-inamdar-a83a30237"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="w-4 h-4 shrink-0" />
                  <a
                    href="https://github.com/ShrinivasInamdar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Shrinivas Inamdar · Built in Goa, India</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
