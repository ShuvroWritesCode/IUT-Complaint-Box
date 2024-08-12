import { PlusCircleIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between">
        <a className="font-serif text-xl text-red-pastel tracking-tight" href="/" rel="ugc">
          IUT Complaint Box
        </a>
        <nav>
          <ul className="flex items-center space-x-3">
            <li>
              <a
                className="text-md px-2 py-2 rounded-lg border-2 border-red-pastel hover:bg-red-pastel hover:text-white hover:border hover:border-white transition-colors duration-300 ease-in-out flex items-center space-x-1 group"
                href="/" rel="ugc"
              >
                <PlusCircleIcon className="h-5 w-5 text-red-800 group-hover:text-white" />
                {!isMobile && (
                  <span className="font-serif ml-2 transition-opacity duration-200">Post</span>
                )}
              </a>
            </li>
            <li>
              <a
                className="text-md px-2 py-2 rounded-lg border-2 border-red-pastel hover:bg-red-pastel hover:text-white hover:border hover:border-white transition-colors duration-300 ease-in-out flex items-center space-x-1 group"
                href="/view" rel="ugc"
              >
                <ListBulletIcon className="h-5 w-5 text-red-800 group-hover:text-white" />
                {!isMobile && (
                  <span className="font-serif ml-2 transition-opacity duration-200">View</span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
