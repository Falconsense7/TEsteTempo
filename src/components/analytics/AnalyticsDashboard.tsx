import React from "react";
import DashboardLayout from "../dashboard/DashboardLayout";

const AnalyticsDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Módulo Analista de BI
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Dashboards Analíticos
            </h3>
            <p className="text-muted-foreground">
              Visualização de métricas e KPIs de negócio.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Relatórios Gerenciais
            </h3>
            <p className="text-muted-foreground">
              Geração e personalização de relatórios.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Análise de Tendências
            </h3>
            <p className="text-muted-foreground">
              Ferramentas para análise de tendências e previsões.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Segmentação de Dados</h3>
            <p className="text-muted-foreground">
              Análise de dados por segmentos e categorias.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Exportação de Dados</h3>
            <p className="text-muted-foreground">
              Ferramentas para exportação e compartilhamento de dados.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Inteligência Artificial
            </h3>
            <p className="text-muted-foreground">
              Análises avançadas com algoritmos de IA.
            </p>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>
            Este módulo oferece ferramentas avançadas de análise de dados e
            business intelligence para suporte à tomada de decisões.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsDashboard;
