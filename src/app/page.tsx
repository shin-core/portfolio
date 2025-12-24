import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import SocialIcons from '@/components/SocialIcons';
import Reviews from '@/components/Reviews';

export default function Home() {
  const { personal, socialLinks } = portfolioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-black dark:via-gray-900 dark:to-gray-800 pt-16 md:pt-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Introduction Section */}
        <section className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          {/* Greeting */}
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 mb-4">
              {personal.greeting}
            </p>
          </div>

          {/* Name */}
          <div className="animate-fade-in-delay-1">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
          </div>

          {/* Title */}
          <div className="animate-fade-in-delay-2">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              {personal.title}
            </h2>
          </div>

          {/* Description */}
          <div className="animate-fade-in-delay-3 max-w-3xl">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {personal.bio}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-full font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-delay-5 mt-12">
            <SocialIcons socialLinks={socialLinks} />
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20 md:mt-32 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400 dark:text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </main>

      {/* Reviews Section */}
      <Reviews />
    </div>
  );
}
