import { Link, useLocation } from 'react-router';
import { Home, Search, PlusSquare, Clapperboard, User } from 'lucide-react';

export function BottomNav() {
  // Get the current URL path
  const { pathname } = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    const baseClasses = `inline-flex flex-col items-center justify-center px-5 py-2 group transition-colors duration-200 ease-in-out`;
    const activeClasses = `text-purple-600 dark:text-purple-400`;
    const inactiveClasses = `text-gray-500 dark:text-gray-400`;
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const getIconClass = (path: string) => {
    const isActive = pathname === path;
    const baseClasses = `h-6 w-6 mb-1 group-hover:text-purple-500 dark:group-hover:text-purple-300`;
    const activeClasses = `text-purple-600 dark:text-purple-400`;
    const inactiveClasses = `text-gray-500 dark:text-gray-400`;
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  const labelClass = `text-xs font-medium`;

  return (
    // Main container with modern glassmorphism styling
    <footer
      className="fixed bottom-0 left-0 z-50 w-full h-16
      bg-white/70 dark:bg-gray-900/70 backdrop-blur-md
      border-t border-gray-200 dark:border-gray-700
      shadow-[0_-5px_20px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_-5px_20px_-10px_rgba(255,255,255,0.05)]"
    >
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <Link to="/home" className={getLinkClass('/home')}>
          <Home className={getIconClass('/home')} />
          <span className={labelClass}>Home</span>
        </Link>
        <Link to="/explore" className={getLinkClass('/explore')}>
          <Search className={getIconClass('/explore')} />
          <span className={labelClass}>Explore</span>
        </Link>
        <Link to="/create" className={getLinkClass('/create')}>
          <PlusSquare className={getIconClass('/create')} />
          <span className={labelClass}>Create</span>
        </Link>
        <Link
          to="/profile/reels/grid"
          className={getLinkClass('/profile/reels/grid')}
        >
          <Clapperboard className={getIconClass('/reels')} />
          <span className={labelClass}>Reels</span>
        </Link>
        <Link to="/profile" className={getLinkClass('/profile')}>
          <User className={getIconClass('/profile')} />
          <span className={labelClass}>Profile</span>
        </Link>
      </div>
    </footer>
  );
}
