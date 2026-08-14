"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export interface StatusData {
  name: string;
  value: number;
  color: string;
}

interface DonutProps {
  porcentaje?: number;
  data?: StatusData[];
  showLegend?: boolean;
}

export default function DonutChart({
  porcentaje = 90,
  data: customData,
  showLegend = true,
}: DonutProps) {

  const defaultData: StatusData[] = [
    { name: "Operativos", value: porcentaje, color: "#10b981" },
    { name: "Mantenimiento", value: Math.max(0, 100 - porcentaje), color: "#f59e0b" }, 
  ];

  const chartData = customData || defaultData;
  const mainPercentage = customData ? customData[0]?.value ?? 0 : porcentaje;

  return (
    <div className="flex items-center gap-3">
      <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={20}
              outerRadius={28}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
              paddingAngle={chartData.length > 1 ? 3 : 0}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Porcentaje Central */}
        <span className="absolute text-[10px] font-extrabold text-slate-800 dark:text-slate-100 pointer-events-none tracking-tighter">
          {Math.round(mainPercentage)}%
        </span>
      </div>

      {/* Leyenda */}
      {showLegend && (
        <div className="flex flex-col gap-1 text-[11px] font-medium leading-none">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-slate-600 dark:text-slate-400">
                {item.name}:
              </span>
              <span className="font-bold text-slate-800 dark:text-slate-200">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}