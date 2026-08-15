"use client";

const mockFlota = [
  { id: "CAM-001", patente: "HX-TB-89", conductor: "Carlos Mendoza", asignacion: "Santiago ➔ Antofagasta", tipo: "Carga General", carga: "24 Ton (Full)", ultimaAct: "Hace 2 min", estado: "En Ruta" },
  { id: "CAM-002", patente: "LK-FR-22", conductor: "Miguel Soto", asignacion: "Base Santiago", tipo: "Refrigerado", carga: "Vacío", ultimaAct: "Hace 1 hora", estado: "Operativo" },
  { id: "CAM-003", patente: "PW-MC-10", conductor: "Julio Arancibia", asignacion: "Calama ➔ Chuquicamata", tipo: "Tolva", carga: "18 Ton", ultimaAct: "Hace 15 min", estado: "En Ruta" },
  { id: "CAM-004", patente: "FT-KL-55", conductor: "Taller Interno", asignacion: "Taller Central (Preventivo)", tipo: "Carga General", carga: "N/A", ultimaAct: "Ayer", estado: "Mantenimiento" },
  { id: "CAM-005", patente: "ZV-QQ-88", conductor: "Roberto Peña", asignacion: "Valparaíso ➔ Santiago", tipo: "Portacontenedor", carga: "1 Contenedor 40ft", ultimaAct: "Hace 5 min", estado: "En Ruta" },
  { id: "CAM-006", patente: "GS-WP-34", conductor: "Sin Asignar", asignacion: "Base Iquique", tipo: "Cama Baja", carga: "Vacío", ultimaAct: "Hace 3 horas", estado: "Operativo" },
  { id: "CAM-007", patente: "RT-YU-11", conductor: "Andrés Silva", asignacion: "Santiago ➔ Chillán", tipo: "Refrigerado", carga: "12 Ton", ultimaAct: "Hace 12 min", estado: "En Ruta" },
  { id: "CAM-008", patente: "BN-MZ-99", conductor: "Taller Externo", asignacion: "Taller Autorizado Kaufmann", tipo: "Carga General", carga: "N/A", ultimaAct: "Hace 2 días", estado: "Mantenimiento" },
];

const getFlotaBadgeStyle = (estado: string) => {
  switch (estado) {
    case "Operativo": return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20";
    case "En Ruta": return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
    case "Mantenimiento": return "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20";
    default: return "bg-slate-100 text-slate-600 border-slate-200";
  }
};

export default function TrucksPage() {
  return (
    <section className="h-full bg-slate-50 text-slate-900 dark:text-white dark:bg-slate-950 flex-1 p-4">
      <div className="flex flex-col h-full pb-8">

        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Control de Flota</h1>
            <p className="text-sm text-slate-500 mt-1">Monitoreo en tiempo real de unidades, conductores y estado general.</p>
          </div>
        </div>

        <div className="flex-1 min-h-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex flex-col overflow-x-auto">

          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-900">
            <div className="flex gap-3 w-full sm:w-auto">
              <select className="text-sm px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-600 outline-none shadow-sm cursor-pointer">
                <option>Todos los estados</option>
                <option>En Ruta</option>
                <option>Operativos</option>
                <option>En Mantenimiento</option>
              </select>
              <input
                type="text"
                placeholder="Buscar Patente o Conductor..."
                className="w-full sm:w-64 text-sm px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-600 outline-none focus:border-emerald-500 transition-colors shadow-sm"
              />
            </div>
            <button
             onClick={() => alert("Esta es una versión Demo. La funcionalidad de exportación está simulada.")}
             className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm whitespace-nowrap">
              Exportar Reporte
            </button>
          </div>

          <div className="flex-1 overflow-auto">
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead className="sticky top-0 bg-slate-50 dark:bg-slate-800 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 shadow-sm z-10">
                <tr>
                  <th className="px-6 py-4 font-semibold">Unidad</th>
                  <th className="px-6 py-4 font-semibold">Patente</th>
                  <th className="px-6 py-4 font-semibold">Conductor</th>
                  <th className="px-6 py-4 font-semibold">Tipo</th>
                  <th className="px-6 py-4 font-semibold">Asignación Actual</th>
                  <th className="px-6 py-4 font-semibold">Carga</th>
                  <th className="px-6 py-4 font-semibold">Última Act.</th>
                  <th className="px-6 py-4 font-semibold">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {mockFlota.map((camion) => (
                  <tr key={camion.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-slate-100">{camion.id}</td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-[11px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded px-2.5 py-1 border border-slate-200 dark:border-slate-700">
                        {camion.patente}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{camion.conductor}</td>
                    <td className="px-6 py-4 text-slate-500 font-medium">{camion.tipo}</td>
                    <td className="px-6 py-4 text-slate-500">{camion.asignacion}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{camion.carga}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 text-[13px]">{camion.ultimaAct}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-[11px] font-semibold rounded-md border ${getFlotaBadgeStyle(camion.estado)}`}>
                        {camion.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 bg-slate-50/50 dark:bg-slate-900">
            <span>Mostrando 1 a 8 de 40 unidades</span>
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