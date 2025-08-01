import { Link } from 'react-router';
import type { Highlight } from '~/schemas/highlight.schema';

export function HighlightBubble({ highlight }: { highlight: Highlight }) {
  return (
    // The main container for the highlight, with a group class to enable hover effects on child elements.
    <Link
      to={`/profile/highlights/${highlight.id}`}
      className="flex flex-col items-center space-y-2 group transition-transform duration-200 ease-in-out hover:scale-105"
    >
      {/* Container for the circular image with border and hover effects */}
      <div
        className="w-20 h-20 rounded-full p-0.5
        bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600
        transition-all duration-300 ease-in-out
        group-hover:shadow-md group-hover:shadow-purple-500/30"
      >
        <img
          src={highlight.cover_image_url}
          alt={highlight.title}
          className="w-full h-full rounded-full object-cover border-2 border-white dark:border-gray-900"
        />
      </div>
      {/* The title text with hover color changes */}
      <span
        className="text-sm font-semibold text-gray-600 dark:text-gray-300
        transition-colors duration-200 ease-in-out
        group-hover:text-purple-600 dark:group-hover:text-purple-400"
      >
        {highlight.title}
      </span>
    </Link>
  );
}
