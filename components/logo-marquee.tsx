export function LogoMarquee() {
  const items = [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Tailwind CSS",
    "Node.js",
    "Supabase",
    "C / C++",
    "Flask",
    "Figma",
    "Git & GitHub",
    "MongoDB",
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-8 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw]">
        <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <span
              key={index}
              className="text-white font-bold text-xl md:text-2xl tracking-tight"
            >
              {item}
              <span className="mx-5 text-[#FDB927]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
