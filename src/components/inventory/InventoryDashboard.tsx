import React from "react";
import DashboardLayout from "../dashboard/DashboardLayout";

const InventoryDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Módulo Gestor de Stock
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Cadastro de Produtos</h3>
            <p className="text-muted-foreground">
              Gestão e cadastro de produtos no inventário.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Controle de Estoque</h3>
            <p className="text-muted-foreground">
              Monitoramento de níveis de estoque e alertas.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Movimentações</h3>
            <p className="text-muted-foreground">
              Registro de entradas, saídas e transferências.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Fornecedores</h3>
            <p className="text-muted-foreground">
              Gestão de fornecedores e pedidos de compra.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Inventário Físico</h3>
            <p className="text-muted-foreground">
              Ferramentas para contagem e ajuste de inventário.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Relatórios</h3>
            <p className="text-muted-foreground">
              Análise de movimentação e valorização de estoque.
            </p>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>
            Este módulo permite gerenciar todo o inventário da empresa, desde o
            cadastro de produtos até o controle de estoque.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InventoryDashboard;
