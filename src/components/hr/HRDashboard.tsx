import React from "react";
import DashboardLayout from "../dashboard/DashboardLayout";

const HRDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Módulo Gestor de RH
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Gestão de Funcionários
            </h3>
            <p className="text-muted-foreground">
              Cadastro e gestão de funcionários da entidade.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Folha de Pagamento</h3>
            <p className="text-muted-foreground">
              Processamento e gestão da folha de pagamento.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Contratos</h3>
            <p className="text-muted-foreground">
              Gestão de contratos de trabalho.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Férias e Ausências</h3>
            <p className="text-muted-foreground">
              Controle de férias e registro de ausências.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Avaliações</h3>
            <p className="text-muted-foreground">
              Gestão de avaliações de desempenho.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Recrutamento</h3>
            <p className="text-muted-foreground">
              Ferramentas para recrutamento de pessoal.
            </p>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>
            Este módulo permite gerenciar todos os aspectos de recursos humanos
            da entidade.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HRDashboard;
