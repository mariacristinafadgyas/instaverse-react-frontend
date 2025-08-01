import type { Reel } from '~/schemas/reel.schema';
import { Play } from 'lucide-react';

export function ReelGridItem({ reel }: { reel: Reel }) {
  return (
    // Main container for the reel grid item
    <div
      className="relative w-full aspect-[9/16] rounded-xl overflow-hidden
      bg-gray-200 dark:bg-gray-800 transition-transform duration-200 ease-in-out
      hover:scale-105 hover:shadow-xl cursor-pointer"
    >
      <img
        src={reel.thumbnail_url}
        alt={reel.caption || 'Reel thumbnail'}
        className="w-full h-full object-cover"
      />
      {/* Overlay to darken the thumbnail and improve text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* View count with a modern icon and styling */}
      <div className="absolute bottom-3 left-3 text-white text-sm font-semibold flex items-center space-x-1">
        <Play className="h-4 w-4" fill="white" />
        <span>{reel.views}</span>
      </div>
    </div>
  );
}
