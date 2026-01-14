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

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120

      links.forEach(link => {
        const section = document.getElementById(link.id)
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActive(link.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Image src="/images/logo1.png" alt="Logo" width={36} height={36} />
          <span className="font-semibold text-lg">Joseph Anselm</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              className={`
                relative text-sm font-medium transition
                ${active === link.id
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"}
              `}
            >
              {link.label}

              {/* underline animation */}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
                  ${active === link.id ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </a>
          ))}
        </nav>

        {/* Avatar */}
        <Image
          src="/images/jojo-pic.jpg"
          alt="Profile"
          width={36}
          height={36}
          className="rounded-full border"
        />
      </div>
    </header>
  )
}
