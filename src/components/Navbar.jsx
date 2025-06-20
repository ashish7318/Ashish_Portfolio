import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const navItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Skills", path: "/skills" },
    { text: "Projects", path: "/projects" },
    { text: "Resume", path: "/resume" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Ashish Jha</h1>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(({ text, path }) => (
            <Link key={text} to={path} className="hover:text-indigo-500 dark:hover:text-indigo-300">
              {text}
            </Link>
          ))}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-4 px-8">
          <div className="flex flex-col space-y-4">
            {navItems.map(({ text, path }) => (
              <Link
                key={text}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-indigo-500 dark:hover:text-indigo-300"
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
