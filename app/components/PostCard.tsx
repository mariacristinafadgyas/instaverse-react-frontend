import type { Post } from '~/schemas/post.schema';
import { Heart, MessageCircle, UserCircle } from 'lucide-react';

export function PostCard({ post }: { post: Post }) {
  return (
    // Main card container with glassmorphism styling and a soft shadow
    <div
      className="w-full max-w-lg mx-auto rounded-2xl overflow-hidden
      bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-xl
      border border-gray-200 dark:border-gray-700 mb-6"
    >
      {/* Post header with user info */}
      <div className="flex items-center p-4">
        {/* User avatar placeholder */}
        <UserCircle className="h-10 w-10 text-gray-400 dark:text-gray-600 mr-3" />
        {/* Username */}
        <p className="font-bold text-gray-900 dark:text-gray-100">
          instaVerse_user
        </p>
      </div>

      {/* Post image */}
      <img
        src={post.img_url}
        alt={post.caption || 'Instagram post'}
        className="w-full h-auto aspect-square object-cover"
      />

      {/* Post footer with icons and caption */}
      <div className="p-4">
        {/* Action icons */}
        <div className="flex space-x-4 text-gray-600 dark:text-gray-300 mb-3">
          <Heart className="h-6 w-6 cursor-pointer hover:text-red-500 transition-colors duration-200" />
          <MessageCircle className="h-6 w-6 cursor-pointer hover:text-purple-600 transition-colors duration-200" />
        </div>

        {/* Caption */}
        <p className="text-gray-800 dark:text-gray-200">
          <span className="font-bold mr-2">instaVerse_user</span>
          {post.caption}
        </p>
      </div>
    </div>
  );
}
