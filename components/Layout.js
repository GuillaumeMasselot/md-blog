import Navbar from "./Navbar";
import { slide as Menu } from "react-burger-menu"

export default function Layout({ children }) {
  return (
    <div>
      <Menu outerContainerId={ "outer-container" } pageWrapId={ "page-wrap" } right burgerButtonClassName={ "block sm:block md:hidden lg:hidden xl:hidden" }>
        <a id="portfolio" className="menu-item" href="/portfolio">Portfolio</a>
        <a id="blog" className="menu-item" href="/blog">Blog</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
      <main id="outer-container">
        <div className="flex">
          <div className="w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/6 xl:w-1/4"></div>
          <div className="sm:w-10/12 md:w-10/12 lg:w-2/3 xl:w-1/2">
              <Navbar></Navbar>
              <div id="page-wrap">
                {children}
              </div>
          </div>
          <div className="w-1/12 sm:w-1/12 md:w-12 lg:w-1/6 xl:w-1/4"></div>
        </div>
      </main>
    </div>
  );
}
