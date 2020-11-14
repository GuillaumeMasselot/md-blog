import Link from "next/link";
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter();
    const isActive = (paths) => {
      let isPath = paths.some(p => {
          return router.asPath === p;
      });
      if (isPath) {
          return "block mt-4 lg:inline-block lg:mt-0 hover:text-black ml-4 font-bold text-gray-700";
      }
      return "block mt-4 lg:inline-block lg:mt-0 hover:text-black ml-4 font-normal text-gray-700";
    }
    return (
      <header className="bg-white">
        <nav className="flex items-center justify-between flex-wrap pl-0 pr-0 p-6 mb-10" role="navigation">
          <div className="items-center flex-shrink-0">
            <Link href="/">
              <a className="font-semibold tracking-tight text-black logo-font text-5xl">
                Skas
              </a>
            </Link>
            <div className="font-semibold tracking-tight text-sm text-gray-600 ">Some. Random. Inspirational. Words.</div>
          </div>
         
          <div className="hidden text-sm sm:hidden md:flex lg:flex xl:flex">
            <Link href="/portfolio">
              <a className={isActive(['/portfolio' , '/'])}>
                portfolio
              </a>
            </Link>
            <Link href="/blog">
              <a className={isActive(['/blog'])}>
                blog
              </a>
            </Link>
            <Link href="/contact">
              <a className={isActive(['/contact'])}>
                my stuff
              </a>
            </Link>
          </div>
        </nav>
      </header>
      
    );
  }