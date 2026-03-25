"use client"
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ]
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 transition-colors border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Desktop Menu */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary">
            DevPortfolio
          </Link>
          {/* List of menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors font-medium ${
                    isActive ? "text-primary" : ""
                  } `}
                >
                  {item.label}
                </Link>
              )
            })}
            {/* Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg hover:bg-gray-100
             dark:text-white hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer`}
            >
              <SunIcon className="w-5 h-5 hidden dark:block" />
              <MoonIcon className="w-5 h-5 dark:hidden" />
            </button>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} onClick={toggleMobileMenu}>
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              {/* Light/Dark Mode  */}
              <div>
                <button
                  onClick={toggleDarkMode}
                  className={`flex items-center py-2 hover:text-primary transition-colors`}
                >
                  <span className="hidden dark:flex">
                    <SunIcon className="w-5 h-5 mr-2" /> Light Mode
                  </span>
                  <span className="flex dark:hidden">
                    <MoonIcon className="w-5 h-5 mr-2" />
                    Dark Mode
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
