"use client";

// Mock data
const despachos = [
  { id: "#TRK-8902", cliente: "Walmart", destino: "Santiago", estado: "Completado" },
  { id: "#TRK-8903", cliente: "Sodimac", destino: "Antofagasta", estado: "En Tránsito" },
  { id: "#TRK-8904", cliente: "Codelco", destino: "Calama", estado: "En Tránsito" },
  { id: "#TRK-8905", cliente: "MercadoLibre", destino: "Iquique", estado: "Demorado" },
  { id: "#TRK-8906", cliente: "Falabella", destino: "Concepción", estado: "Completado" },
];

const getBadgeStyle = (estado: string) => {
  switch (estado) {
    case "Completado":
      return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20";
    case "En Tránsito":
      return "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20";
    case "Demorado":
      return "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20";
    default:
      return "bg-slate-100 text-slate-600 border-slate-200";
  }
};

export default function recentShipmentsTable() {
  return (
    <div className="w-full h-64 mt-4 overflow-x-auto">
      <table className="w-full text-sm text-left whitespace-nowrap">
        <thead className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
          <tr>
            <th className="px-4 py-3 font-semibold">Tracking</th>
            <th className="px-4 py-3 font-semibold">Cliente</th>
            <th className="px-4 py-3 font-semibold">Destino</th>
            <th className="px-4 py-3 font-semibold text-right">Estado</th>
          </tr>
        </thead>
        
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {despachos.map((envio) => (
            <tr 
              key={envio.id} 
              className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">
                {envio.id}
              </td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                {envio.cliente}
              </td>
              <td className="px-4 py-3 text-slate-600 dark:text-slate-300">
                {envio.destino}
              </td>
              <td className="px-4 py-3 text-right">
                <span className={`px-2.5 py-1 text-[11px] font-semibold rounded-md border ${getBadgeStyle(envio.estado)}`}>
                  {envio.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}