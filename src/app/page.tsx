import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import SocialIcons from '@/components/SocialIcons';
import Reviews from '@/components/Reviews';

export default function Home() {
  const { personal, socialLinks } = portfolioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-black dark:via-gray-900 pt-16 md:pt-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section className="flex flex-col items-center text-center space-y-8">
          <p className="text-xl font-medium text-blue-600 dark:text-blue-400">
            {personal.greeting}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
            {personal.title}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            {personal.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              Get In Touch
            </Link>
          </div>

          <div className="mt-12">
            <SocialIcons socialLinks={socialLinks} />
          </div>
        </section>
      </main>

      <Reviews />
    </div>
  );
}
