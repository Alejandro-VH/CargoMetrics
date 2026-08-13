import { ThemeToggle } from "../dashboard/ThemeToggle";

export function Header() {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-900 dark:text-white text-xl font-bold">Cargo Metrics</h1>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="text-right hidden sm:block ">
            <p className="text-xs font-semibold text-slate-900 dark:text-white">Alejandro Villarroel</p>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400">Gerente de Operaciones</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center text-xs font-bold">
            AV
          </div>
        </div>
      </div>
    </header>
  );
}