import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <main id="outer-container">
        <div className="flex">
          <div className="flex-none w-1/12 sm:w-1/12 md:w-1/12 lg:w-1/6 xl:w-1/4"></div>
          <div className="sm:w-10/12 md:w-10/12 lg:w-2/3 xl:w-1/2">
              <Navbar></Navbar>
              <div id="page-wrap">
                {children}
              </div>
          </div>
          <div className="flex-none w-1/12 sm:w-1/12 md:w-12 lg:w-1/6 xl:w-1/4"></div>
        </div>
      </main>
    </div>
  );
}
