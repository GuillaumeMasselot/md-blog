import Link from "next/link";
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter();
    const isActive = (paths) => {
      let isPath = paths.some(p => {
          return router.asPath === p;
      });
      if (isPath) {
          return "block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4 font-bold text-black";
      }
      return "block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4 font-normal text-gray-700";
    }
    return (
      <header className="bg-white">
        <nav className="flex items-center justify-between flex-wrap p-6 mb-10">
          <div className="items-center flex-shrink-0">
            <div className="font-semibold text-xl tracking-tight text-black">
              <Link href="/">
                <a>
                  Skas
                </a>
              </Link>
            </div>
            <div className="font-semibold tracking-tight text-sm text-gray-600 ">Painter. Boardgame lover.</div>
          </div>
          <div className="block text-sm">
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