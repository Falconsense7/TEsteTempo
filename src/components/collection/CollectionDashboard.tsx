import React from "react";
import DashboardLayout from "../dashboard/DashboardLayout";

const CollectionDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Módulo Gestor de Cobrança
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Processos de Cobrança
            </h3>
            <p className="text-muted-foreground">
              Gestão de processos de cobrança de valores em atraso.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Acordos de Pagamento</h3>
            <p className="text-muted-foreground">
              Negociação e registro de acordos de pagamento.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Ações de Cobrança</h3>
            <p className="text-muted-foreground">
              Registro e acompanhamento de ações de cobrança.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Clientes Inadimplentes
            </h3>
            <p className="text-muted-foreground">
              Análise e gestão de clientes com pagamentos em atraso.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Prazos de Pagamento</h3>
            <p className="text-muted-foreground">
              Monitoramento de prazos de pagamento.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Relatórios</h3>
            <p className="text-muted-foreground">
              Geração e visualização de relatórios de cobrança.
            </p>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>
            Este módulo permite gerenciar processos de cobrança de valores em
            atraso.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CollectionDashboard;
