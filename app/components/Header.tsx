import { Camera } from 'lucide-react';

export function Header() {
  return (
    // Header with modern glassmorphism styling
    <header
      className="sticky top-0 z-50 w-full
      bg-white/70 dark:bg-gray-900/70 backdrop-blur-md
      border-b border-gray-200 dark:border-gray-700
      shadow-md"
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Main title */}
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
          InstaVerse
        </h1>
        {/* Right-aligned icon */}
        <div className="text-xl text-gray-700 dark:text-gray-300">
          <Camera className="h-6 w-6" />
        </div>
      </nav>
    </header>
  );
}
