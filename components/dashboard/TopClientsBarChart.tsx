"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Mock data
const data = [
  { name: 'Líder', volume: 1450 },
  { name: 'Codelco', volume: 1120 },
  { name: 'Sodimac', volume: 850 },
  { name: 'Mercado Libre', volume: 540 },
  { name: 'CCU', volume: 210 },
];

export default function topClientsBarChart() {
  return (
    <div className="w-full h-64 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 40, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />

          <XAxis
            type="number"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#64748b" }}
          />
          
          <YAxis
            type="category"
            dataKey="cliente"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#475569", fontWeight: 500 }}
            dx={-10} 
          />

          <Tooltip />

          <Bar
            dataKey="volumen"
            name="Volumen (Pedidos)"
            barSize={24}
            radius={[0, 4, 4, 0]}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill="#10b981" 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}