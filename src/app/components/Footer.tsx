import Link from "next/link"
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Description, Year */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              DevPortfolio
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Devfolio. All rights reserved.
            </p>
          </div>
          {/* Social Media, Icons */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/anhcudev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/huynhtuananhcu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/anhcu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
