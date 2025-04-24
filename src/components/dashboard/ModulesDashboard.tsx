import React from "react";
import DashboardLayout from "./DashboardLayout";
import ModuleCard from "./ModuleCard";
import {
  Building,
  Calculator,
  Users,
  CreditCard,
  ShoppingCart,
  Package,
  BarChart3,
  Search,
  UserCircle,
} from "lucide-react";

const ModulesDashboard = () => {
  const modules = [
    {
      title: "Administração",
      description:
        "Gestão de utilizadores, configurações e estrutura organizacional da entidade.",
      icon: <Building className="h-6 w-6" />,
      path: "/company",
    },
    {
      title: "Contabilidade",
      description:
        "Plano de contas, lançamentos contabilísticos e relatórios financeiros.",
      icon: <Calculator className="h-6 w-6" />,
      path: "/accountant",
    },
    {
      title: "Recursos Humanos",
      description:
        "Gestão de funcionários, folha de pagamento e controle de férias.",
      icon: <Users className="h-6 w-6" />,
      path: "/hr",
    },
    {
      title: "Cobrança",
      description:
        "Processos de cobrança, acordos de pagamento e clientes inadimplentes.",
      icon: <CreditCard className="h-6 w-6" />,
      path: "/collection",
    },
    {
      title: "Vendas & Faturação",
      description: "Emissão de faturas, recibos e operações de ponto de venda.",
      icon: <ShoppingCart className="h-6 w-6" />,
      path: "/cashier",
    },
    {
      title: "Gestão de Stock",
      description:
        "Controle de inventário, movimentações e gestão de armazéns.",
      icon: <Package className="h-6 w-6" />,
      path: "/inventory",
    },
    {
      title: "Business Intelligence",
      description: "Dashboards, relatórios gerenciais e análise de KPIs.",
      icon: <BarChart3 className="h-6 w-6" />,
      path: "/analytics",
    },
    {
      title: "Auditoria",
      description:
        "Logs de auditoria, conformidade e monitoramento de segurança.",
      icon: <Search className="h-6 w-6" />,
      path: "/auditor",
    },
    {
      title: "Área do Funcionário",
      description: "Acesso a informações pessoais, solicitações e documentos.",
      icon: <UserCircle className="h-6 w-6" />,
      path: "/employee",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Módulos do Sistema
          </h1>
          <p className="text-muted-foreground">
            Selecione um módulo para acessar suas funcionalidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              icon={module.icon}
              path={module.path}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ModulesDashboard;
