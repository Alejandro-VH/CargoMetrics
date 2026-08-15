"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  { day: "Lun", recibidos: 120 },
  { day: "Mar", recibidos: 145 },
  { day: "Mié", recibidos: 110 },
  { day: "Jue", recibidos: 155 },
  { day: "Vie", recibidos: 170, proyeccion: 170 },
  { day: "Sáb", proyeccion: 190 },
  { day: "Dom", proyeccion: 150 },
];

export default function ordersChart() {
  return (
    <div className="w-full h-64 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} >
          <defs>
            <linearGradient id="colorRecibidos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#64748b" }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#64748b" }}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="recibidos"
            name="Recibidos"
            stroke="#10b981"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorRecibidos)"
            activeDot={{ r: 6, fill: "#10b981", stroke: "#fff", strokeWidth: 2 }}
          />

          <Area
            type="monotone"
            dataKey="proyeccion"
            name="Proyección"
            stroke="#94a3b8"
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="none"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}