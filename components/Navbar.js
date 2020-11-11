import Link from "next/link";
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter();
    const isActive = (path) => {
      const isPath = router.asPath === path;
      console.log(router);
      return "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4" + (isPath ? ' font-bold': ' font-normal') + (isPath ? ' text-white' : ' text-red-200');
      
    }
    return (
      <header className="bg-white shadow">
        <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Skas Painting</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-red-200 border-red-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <a className={isActive('/')}>
                Articles
              </a>
            </Link>

            <Link href="/portfolio">
              <a className={isActive('/portfolio')}>
                Portfolio
              </a>
            </Link>

            <Link href="/contact">
              <a className={isActive('/contact')}>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
        {/* <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Test
          </h1>
        </div> */}
      </header>
      
    );
  }