import { ThemeSwitch } from "../ThemeToggle";


const Navbar = ({ onMobileMenuToggle }) => {
  return (
    <header className="sticky top-0 z-40 h-16 w-full flex items-center justify-between px-4 sm:px-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={onMobileMenuToggle}
          className="md:hidden p-2 -ml-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <h1 className="text-sm font-bold text-slate-800 dark:text-slate-200">
          Dashboard{" "}
          <span className="text-slate-300 dark:text-slate-700 mx-1.5">/</span>{" "}
          <span className="text-slate-400 font-medium">Routes</span>
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 hover:scale-95 transition-transform flex items-center justify-center text-sm">
          🔔
        </button>
        
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 hover:scale-95 transition-transform text-sm">
          <ThemeSwitch/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;