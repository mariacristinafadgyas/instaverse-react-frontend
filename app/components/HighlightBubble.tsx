import { Link } from 'react-router';
import type { Highlight } from '~/schemas/highlight.schema';

export function HighlightBubble({ highlight }: { highlight: Highlight }) {
  return (
    <Link
      to={`/profile/highlights/${highlight.id}`}
      className="flex flex-col items-center space-y-2"
    >
      <img
        src={highlight.cover_image_url}
        alt={highlight.title}
        className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
      />
      <span className="text-sm font-medium text-gray-700">
        {highlight.title}
      </span>
    </Link>
  );
}
