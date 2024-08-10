import Search from "./search";
import Logo from "./logo";
import { AuthLinks, NavList } from "./nav-links";

export default function Navbar() {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Logo />
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <AuthLinks />
          </div>
        </div>
      </nav>

      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl pl-2 pr-4 py-3 mx-auto">
          <div className="flex items-center justify-between">
            <div className="space-x-6">
              <NavList />
            </div>
            <div>
              <Search placeholder="Search here..." />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
