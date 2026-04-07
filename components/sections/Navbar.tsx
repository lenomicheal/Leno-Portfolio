"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <header className="w-full border-b bg-background fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link href="#home" className="text-xl font-bold">
         <span>{"<Leno Micheal/>"}</span>
        </Link>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Projects Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-62.5">
                  
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#projects">
                        <div className="font-medium">Web Apps</div>
                        <p className="text-sm text-muted-foreground">
                          React & Next.js projects
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/projects/fullstack">
                        <div className="font-medium">Full Stack</div>
                        <p className="text-sm text-muted-foreground">
                          API + Database apps
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>

                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="#contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

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
