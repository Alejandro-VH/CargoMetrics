"use client";

const mockClientes = [
  { id: "CL-101", empresa: "Líder", contacto: "logistica@lider.cl", enviosActivos: 14, estado: "Activo", ultimoEnvio: "Hace 2 horas" },
  { id: "CL-102", empresa: "Codelco", contacto: "despachos@codelco.cl", enviosActivos: 8, estado: "Activo", ultimoEnvio: "Hace 5 horas" },
  { id: "CL-103", empresa: "Sodimac", contacto: "supply@sodimac.cl", enviosActivos: 12, estado: "Activo", ultimoEnvio: "Ayer" },
  { id: "CL-104", empresa: "Mercado Libre", contacto: "transporte@mercadolibre.com", enviosActivos: 35, estado: "Activo", ultimoEnvio: "Hace 10 min" },
  { id: "CL-105", empresa: "CCU", contacto: "operaciones@ccu.cl", enviosActivos: 5, estado: "Inactivo", ultimoEnvio: "Hace 3 días" },
  { id: "CL-106", empresa: "BHP Minera Escondida", contacto: "suministros@bhp.com", enviosActivos: 3, estado: "En Revisión", ultimoEnvio: "Hace 1 día" },
  { id: "CL-107", empresa: "Jumbo", contacto: "recepcion@cencosud.cl", enviosActivos: 18, estado: "Activo", ultimoEnvio: "Hace 1 hora" },
  { id: "CL-108", empresa: "Paris", contacto: "logistica@cencosud.cl", enviosActivos: 0, estado: "Inactivo", ultimoEnvio: "Hace 1 semana" },
];

const getBadgeStyle = (estado: string) => {
  switch (estado) {
    case "Activo": return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20";
    case "Inactivo": return "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700";
    case "En Revisión": return "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20";
    default: return "bg-slate-100 text-slate-600 border-slate-200";
  }
};

export default function ClientsPage() {

  return (
    <section className="h-full bg-slate-50 text-slate-900 dark:text-white dark:bg-slate-950 flex-1 p-4">
      <div className="flex flex-col h-full pb-8">

        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Clientes</h1>
            <p className="text-sm text-slate-500 mt-1">Gestiona tu cartera de clientes y volumen operativo.</p>
          </div>
        </div>

        <div className="flex-1 min-h-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex flex-col overflow-x-auto">

          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900">
            <div className="flex gap-2 w-full max-w-sm">
              <input
                type="text"
                placeholder="Buscar empresa o ID..."
                className="w-full text-sm px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-600 outline-none focus:border-emerald-500 transition-colors shadow-sm"
              />
            </div>
            <button
              onClick={() => alert("Esta es una versión Demo. La funcionalidad de creación de clientes está simulada.")}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm">
              + Nuevo Cliente
            </button>
          </div>

          <div className="flex-1 overflow-auto">
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead className="sticky top-0 bg-slate-50 dark:bg-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 shadow-sm z-10">
                <tr>
                  <th className="px-6 py-4 font-semibold">ID</th>
                  <th className="px-6 py-4 font-semibold">Empresa</th>
                  <th className="px-6 py-4 font-semibold">Contacto</th>
                  <th className="px-6 py-4 font-semibold text-center">Envíos Activos</th>
                  <th className="px-6 py-4 font-semibold">Último Envío</th>
                  <th className="px-6 py-4 font-semibold">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {mockClientes.map((cliente) => (
                  <tr key={cliente.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-400">{cliente.id}</td>
                    <td className="px-6 py-4 font-semibold text-slate-900 dark:text-slate-100">{cliente.empresa}</td>
                    <td className="px-6 py-4 text-slate-500">{cliente.contacto}</td>
                    <td className="px-6 py-4 text-center font-bold text-slate-700 dark:text-slate-300">{cliente.enviosActivos}</td>
                    <td className="px-6 py-4 text-slate-500">{cliente.ultimoEnvio}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-[11px] font-semibold rounded-md border ${getBadgeStyle(cliente.estado)}`}>
                        {cliente.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 bg-slate-50/50 dark:bg-slate-900">
            <span>Mostrando 1 a 8 de 45 clientes</span>
            <div className="flex gap-1">
              <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 hover:bg-slate-50 disabled:opacity-50 transition-colors" disabled>Anterior</button>
              <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 hover:bg-slate-50 transition-colors">Siguiente</button>
            </div>
          </div>

        </div>
      </div>    
    </section>
  );
}