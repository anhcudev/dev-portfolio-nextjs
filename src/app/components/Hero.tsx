import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

const Hero = () => {
  return (
    // Hero Section
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/avatar.png"
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </div>
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Tuan Anh</span>
        </h1>
        {/* Dream Job */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Web Developer
        </p>
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="https://github.com/anhcudev"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            target="_blank"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/anhcu/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            target="_blank"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://www.facebook.com/huynhtuananhcu"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            target="_blank"
          >
            <FaFacebook />
          </Link>
        </div>
        {/* View project & Contract me btns */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="bg-gray-500 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:text-gray-800 hover:bg-gray-300 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
