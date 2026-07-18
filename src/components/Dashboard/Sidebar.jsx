import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 h-full shrink-0 border-r border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md">
      <div className="h-16 flex items-center px-6 border-b border-slate-100 dark:border-slate-800">
        <Link href="/">
          <span className="font-black text-lg tracking-tight bg-gradient-to-r from-emerald-500 to-lime-400 bg-clip-text text-transparent cursor-pointer">
            TicketBari
          </span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-3 mb-2">
          Discover
        </p>
        <button className="w-full h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-bold flex items-center px-3 text-sm gap-2 transition-all">
          <span>🎟️</span> Available Tickets
        </button>
        <button className="w-full h-10 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 font-bold flex items-center px-3 text-sm gap-2 transition-all">
          <span>📅</span> My Bookings
        </button>
      </div>

      <div className="p-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 px-2 py-1.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
              Alex Rivera
            </p>
            <p className="text-[10px] text-slate-400 truncate">alex@hub.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
