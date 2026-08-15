"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Mock data
const data = [
  { day: "01", programados: 135, enviados: 130 },
  { day: "05", programados: 150, enviados: 145 },
  { day: "10", programados: 175, enviados: 168 },
  { day: "15", programados: 190, enviados: 185 },
  { day: "20", programados: 140, enviados: 135 },
  { day: "25", programados: 165, enviados: 160 },
  { day: "30", programados: 185, enviados: 181 },
];

export default function scheduledVsShippedChart() {
  return (
    <div className="w-full h-64 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#64748b" }}
            dy={10}
            tickFormatter={(value) => `Día ${value}`}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#64748b" }}
          />

          <Tooltip labelFormatter={(label) => `Día ${label}`}/>

          <Legend 
            iconType="circle" 
            wrapperStyle={{ fontSize: '12px', color: '#475569', paddingTop: '10px' }}
          />

          <Line
            type="monotone"
            dataKey="programados"
            name="Programados"
            stroke="#64748b"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4, fill: "#64748b", strokeWidth: 0 }}
            activeDot={{ r: 6 }}
          />

          <Line
            type="monotone"
            dataKey="enviados"
            name="Enviados"
            stroke="#10b981" 
            strokeWidth={2}
            dot={{ r: 4, fill: "#10b981", strokeWidth: 0 }}
            activeDot={{ r: 6, fill: "#10b981", stroke: "#fff", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}