import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div className="flex">
          <div className="xl:w-1/4 w-1/6"></div>
          <div className="xl:w-1/2 w-2/3">
              {children}
          </div>
          <div className="xl:w-1/4 w-1/6"></div>
        </div>
      </main>
    </div>
  );
}
