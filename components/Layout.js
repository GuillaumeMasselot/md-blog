import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar main={children}></Navbar>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Test
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {children}
          </div>
        </div>
      </main>
      <div className="max-w-screen-sm px-4 py-12 mx-auto antialiased font-body">
        <footer className="text-lg font-light">
          © {new Date().getFullYear()}, Built with{" "}
          <a href="https://nextjs.org/">Next.js</a>
          &#128293;
        </footer>
      </div>
    </div>
  );
}
