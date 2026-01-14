// import Image from "next/image"

// export default function Navbar() {
//   const links = ["Home", "About", "Projects", "Blog", "Services", "Contact"]

//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Image src="/logo.png" alt="Logo" width={36} height={36} />
//           <span className="font-semibold text-lg">Joseph Anselm</span>
//         </div>

//         {/* Links */}
//         <nav className="hidden md:flex items-center gap-8">
//           {links.map(link => (
//             <a
//               key={link}
//               href={`#${link.toLowerCase()}`}
//               className="text-sm text-gray-700 hover:text-blue-600 transition"
//             >
//               {link}
//             </a>
//           ))}
//         </nav>

//         {/* Avatar */}
//         <Image
//           src="/profile.jpg"
//           alt="Profile"
//           width={36}
//           height={36}
//           className="rounded-full"
//         />
//       </div>
//     </header>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Navbar() {
  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ]

  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = links
      .map(link => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -50% 0px", // 👈 critical fix
        threshold: 0,
      }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <span className="font-semibold text-lg">Joseph Anselm</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => {
            const isActive = active === link.id

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative text-sm font-medium transition
                  ${isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"}
                `}
              >
                {link.label}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </a>
            )
          })}
        </nav>

        {/* Avatar */}
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={36}
          height={36}
          className="rounded-full border"
        />
      </div>
    </header>
  )
}
