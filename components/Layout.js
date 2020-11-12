import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <main>
        <div className="flex">
          <div className="xl:w-1/4 w-1/6"></div>
          <div className="xl:w-1/2 w-2/3">
              <Navbar></Navbar>
              <div>
                {children}
              </div>
          </div>
          <div className="xl:w-1/4 w-1/6"></div>
        </div>
      </main>
    </div>
  );
}
