'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const reviews = portfolioData.reviews;
  const featured = reviews.filter((r) => r.featured);
  const display = showAll ? reviews : featured;

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Client Reviews
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            What clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {display.map((review) => (
            <div key={review.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">"{review.comment}"</p>
              <div className="flex items-center gap-3 pt-4 border-t">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role} at {review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {reviews.length > featured.length && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {showAll ? 'Show Less' : `Show All (${reviews.length})`}
            </button>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow">
            <span className="text-2xl">★★★★★</span>
            <span className="text-xl font-bold">{avgRating}</span>
            <span className="text-gray-500">({reviews.length} reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
