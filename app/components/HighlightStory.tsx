import { Link } from 'react-router';
import type { Highlight } from '~/schemas/highlight.schema';
import { ChevronLeft } from 'lucide-react';

export function HighlightStory({ highlight }: { highlight: Highlight }) {
  return (
    // Main container with a dark, glass-like background that fills the screen
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4
      bg-gray-900/90 backdrop-blur-lg text-white"
    >
      {/* Back button positioned at the top left */}
      <Link
        to="/profile"
        className="absolute top-6 left-6 flex items-center space-x-1 text-sm font-semibold
          text-gray-300 transition-colors duration-200 ease-in-out
          hover:text-purple-400"
      >
        <ChevronLeft className="h-5 w-5" />
        <span>Back</span>
      </Link>

      {/* Highlight image container with modern styling */}
      <div className="relative my-8">
        <img
          src={highlight.cover_image_url}
          alt={highlight.title}
          className="max-w-full max-h-[70vh] object-cover
            rounded-2xl shadow-xl border border-gray-700"
        />
      </div>

      {/* Highlight title */}
      <h2 className="text-3xl font-extrabold text-white mt-4">
        {highlight.title}
      </h2>

      {/* Creation date */}
      <p className="text-sm text-gray-400 mt-2">
        Created at: {new Date(highlight.created_at).toLocaleString()}
      </p>
    </div>
  );
}
