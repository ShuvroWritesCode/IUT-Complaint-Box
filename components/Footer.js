import { HomeIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { useMediaQuery } from 'react-responsive';

export default function Footer() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <footer className="py-10">
      <div className="container mx-auto flex items-center justify-between">
      <div className="font-serif text-xs text-red-normal tracking-tight">
          <p>IUT Complaint Box - v1.0 | All Right Deserved by IUT 20</p>
          <p>2024 @ Developed and maintained by IUT Batch 20</p>
        </div>
        <div className="flex items-center space-x-3">
          <a
            className="text-md px-2 py-2 rounded-lg border-2 border-red-pastel hover:bg-red-pastel hover:text-white hover:border hover:border-white transition-colors duration-300 ease-in-out flex items-center space-x-1 group"
                href="/" rel="ugc"
          >
            <HomeIcon className="h-5 w-5 text-red-normal group-hover:text-white" />
            {!isMobile && (
                <span className="font-serif ml-2 transition-opacity duration-200">Home</span>
            )}
          </a>
          <a
            className="text-md px-2 py-2 rounded-lg border-2 border-red-pastel hover:bg-red-pastel hover:text-white hover:border hover:border-white transition-colors duration-300 ease-in-out flex items-center space-x-1 group"
            href="/policy" rel="ugc"
          >
            <CheckBadgeIcon className="h-5 w-5 text-red-normal group-hover:text-white" />
            {!isMobile && (
              <span className="font-serif ml-2 transition-opacity duration-200">Policy</span>
            )}
          </a>
        </div>
      </div>
    </footer>
  );
}
