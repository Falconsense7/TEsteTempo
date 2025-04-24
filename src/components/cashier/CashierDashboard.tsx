import React from "react";
import DashboardLayout from "../dashboard/DashboardLayout";

const CashierDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Módulo Operador de Caixa
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Registro de Vendas</h3>
            <p className="text-muted-foreground">
              Processamento e registro de vendas e pagamentos.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Gestão de Caixa</h3>
            <p className="text-muted-foreground">
              Abertura, fechamento e controle de caixa diário.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Recibos e Faturas</h3>
            <p className="text-muted-foreground">
              Emissão de recibos e faturas para clientes.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Devoluções</h3>
            <p className="text-muted-foreground">
              Processamento de devoluções e reembolsos.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Relatórios de Vendas</h3>
            <p className="text-muted-foreground">
              Visualização de relatórios de vendas diárias.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Gestão de Clientes</h3>
            <p className="text-muted-foreground">
              Cadastro e consulta de informações de clientes.
            </p>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>
            Este módulo permite gerenciar operações de caixa, vendas e
            atendimento ao cliente.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CashierDashboard;
