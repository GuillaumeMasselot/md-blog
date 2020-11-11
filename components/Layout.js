import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <div className="flex mb-4">
          <div className="w-1/4"></div>
          <div className="w-1/2">
            <div className="px-4 py-6 sm:px-0">
                {children}
            </div>
          </div>
          <div className="w-1/4"></div>
        </div>
      </main>
    </div>
  );
}
