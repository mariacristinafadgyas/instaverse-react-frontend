import type { Highlight } from '~/schemas/highlight.schema';
import { Link } from 'react-router';

export function HighlightStory({ highlight }: { highlight: Highlight }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <img
        src={highlight.cover_image_url}
        alt={highlight.title}
        className="max-w-full max-h-[80vh] object-contain mb-4"
      />
      <h2 className="text-2xl font-bold">{highlight.title}</h2>
      <p className="text-sm text-gray-300 mt-2">
        Created at: {new Date(highlight.created_at).toLocaleString()}
      </p>
      <Link
        to="/profile/highlights"
        className="text-blue-500 underline mb-4 block"
      >
        ← Back to Highlights
      </Link>
    </div>
  );
}
