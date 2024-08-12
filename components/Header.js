import { PlusCircleIcon, PencilSquareIcon, ListBulletIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header /* className="bg-gradient-to-tr from-red-900 text-white to-red-600 py-5 shadow-md"*/>
      <div className=" container mx-auto my-auto flex items-center justify-between">
        <a className="font-serif text-xl text-red-normal tracking-tight" href="/" rel="ugc">
          IUT Complaint Box
        </a>
        <nav>
          <ul className="flex items-center space-x-2">
            <li>
              <a
                className="text-md px-3 py-3 rounded-lg hover:bg-red-pastel hover:text-white hover:border hover:border-white transition-colors duration-300 ease-in-out flex items-center space-x-1 group"
                href="/" rel="ugc"
              >
                <PlusCircleIcon className="h-5 w-5 text-red-normal group-hover:text-white" />
                <span className="font-serif ml-2 transition-opacity duration-200">Post</span>
              </a>
            </li>
            <li>
              <a
                className="text-md px-3 py-3 rounded-lg hover:bg-red-pastel hover:text-white hover:border hover:border-white transition-colors duration-300 ease-in-out flex items-center space-x-1 group"
                href="/view" rel="ugc"
              >
                <ListBulletIcon className="h-5 w-5 text-red-normal group-hover:text-white" />
                <span className="font-serif ml-2 transition-opacity duration-200">View</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
