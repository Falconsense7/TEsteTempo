import React from "react";
import DashboardLayout from "../dashboard/DashboardLayout";

const AccountantDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Módulo Contabilista
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Plano de Contas</h3>
            <p className="text-muted-foreground">
              Acesso e gestão do plano de contas da entidade.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Lançamentos Contabilísticos
            </h3>
            <p className="text-muted-foreground">
              Registro e gestão de lançamentos contábeis.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Conciliações Bancárias
            </h3>
            <p className="text-muted-foreground">
              Ferramentas para conciliação de contas bancárias.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Relatórios Contábeis</h3>
            <p className="text-muted-foreground">
              Geração e visualização de relatórios contábeis.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Centros de Custo</h3>
            <p className="text-muted-foreground">
              Gestão de centros de custo da entidade.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Demonstrações Financeiras
            </h3>
            <p className="text-muted-foreground">
              Análise de balancetes e demonstrações financeiras.
            </p>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>
            Este módulo permite gerenciar a contabilidade da entidade com acesso
            a todas as funcionalidades contábeis.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AccountantDashboard;
