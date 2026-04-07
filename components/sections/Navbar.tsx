"use client"

import type { MouseEvent } from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
]

export default function Navbar() {
  const handleSmoothScroll = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault()

    const target = document.querySelector(href)

    if (!(target instanceof HTMLElement)) {
      return
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    window.history.replaceState(null, "", href)
  }

  return (
    <header className="w-full border-b bg-background fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold"
          onClick={(event) => handleSmoothScroll(event, "#home")}
        >
         <span>{"<Leno Micheal/>"}</span>
        </Link>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    onClick={(event) => handleSmoothScroll(event, item.href)}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {/* Resume */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/Leno Micheal Resume.pdf" download className="bg-black text-white">
                  Resume
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>



      </div>
    </header>
  )
}
