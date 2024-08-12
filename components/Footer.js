import { HomeIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="container mx-auto my-auto flex items-center justify-between">
      <div className="font-serif text-sm text-red-normal tracking-tight">
          <p>2024 @ Developed and maintained by IUT Batch 20</p>
        </div>
        <div className="flex items-center space-x-2">
          <a
            className="text-md px-3 py-3 rounded-lg hover:bg-red-pastel hover:text-white hover:border hover:border-white transition-colors duration-300 ease-in-out flex items-center space-x-1 group"
            href="/" rel="ugc"
          >
            <HomeIcon className="h-5 w-5 text-red-normal group-hover:text-white" />
            <span className="font-serif ml-2 transition-opacity duration-200">Home</span>
          </a>
          <a
            className="text-md px-3 py-3 rounded-lg hover:bg-red-pastel hover:text-white hover:border hover:border-white transition-colors duration-300 ease-in-out flex items-center space-x-1 group"
            href="/policy" rel="ugc"
          >
            <CheckBadgeIcon className="h-5 w-5 text-red-normal group-hover:text-white" />
            <span className="font-serif ml-2 transition-opacity duration-200">Policy</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
