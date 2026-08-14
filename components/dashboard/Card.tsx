import { ReactNode } from "react";

interface CardProps {
  title: string;
  badgeText?: string;
  badgeType?: 'neutral' | 'success' | 'warning' | 'danger';
  children: ReactNode;
}

export default function Cards({
  title,
  badgeText,
  badgeType = 'neutral',
  children,
}: CardProps) {
    const badgeStyles = {
    success: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 rounded px-2 py-0.5 text-[11px] font-medium",
    danger:  "bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/20 rounded px-2 py-0.5 text-[11px] font-medium",
    warning: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 rounded px-2 py-0.5 text-[11px] font-medium",
    neutral: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 rounded px-2 py-0.5 text-[11px] font-medium",
    };

  return (
    <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-full">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {title}
        </h3>

        {badgeText && (
          <span className={`px-2 py-0.5 text-[11px] font-medium rounded border ${badgeStyles[badgeType]}`}>
            {badgeText}
          </span>
        )}
      </div>

      <div className="pt-3 flex-1 flex items-center justify-center w-full">
        {children}
      </div>
    </div>
  );
}