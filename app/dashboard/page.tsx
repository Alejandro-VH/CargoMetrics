"use client";

import Card from "@/components/dashboard/Card";
import DonutChart from "@/components/dashboard/DonutChart";
import OrdersChart from "@/components/dashboard/OrdersChart";
import RecentShipmentsTable from "@/components/dashboard/RecentShipmentsTable";
import TopClientsBarChart from "@/components/dashboard/TopClientsBarChart";
import ScheduledVsShippedChart from "@/components/dashboard/ScheduledVsShippedChart";

export default function DashboardPage() {
  return (
    <div className="h-full space-y-6 p-6 bg-slate-50 text-slate-900 dark:text-white dark:bg-slate-950 overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Envíos Totales del Mes" badgeText="+12.4% vs mes anterior" badgeType="success">
          <div className="flex flex-col items-center justify-center py-1">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              4,284
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5">
              pedidos procesados
            </span>
          </div>
        </Card>

        <Card title="Indice de satisfacción" badgeText="-2.1% vs mes anterior" badgeType="danger">
          <div className="flex flex-col items-center justify-center py-1">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                95.6%
              </span>
            </div>
            <span className="text-[11px] font-medium text-slate-400 mt-0.5">
              efectividad de entrega
            </span>
          </div>
        </Card>

        <Card title="Envios atrasados" badgeText="7 Críticos" badgeType="warning">
          <div className="flex flex-col items-center justify-center py-1">
            <span className="text-3xl font-extrabold text-rose-600 dark:text-rose-400 tracking-tight">
              25
            </span>
            <span className="text-[11px] font-medium text-slate-400 mt-0.5">
              requieren atención
            </span>
          </div>        
        </Card>

        <Card title="DISPONIBILIDAD FLOTA" badgeText="38 / 40 Camiones" badgeType="neutral">
          <div className="pt-3 flex items-center justify-center w-full">
            <DonutChart porcentaje={95} />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Volumen de pedidos recibidos y proyección" >
          <OrdersChart />
        </Card>
        <Card title="Top Clientes por Volumen de Carga">
          <TopClientsBarChart />
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Ultimos envíos realizados">
          <RecentShipmentsTable />
        </Card>
        <Card title="PROGRAMADOS VS ENVIADOS DURANTE EL MES">
          <ScheduledVsShippedChart />
        </Card>
      </div>
    </div>
  );
}