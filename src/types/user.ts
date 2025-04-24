export enum UserRole {
  ADMIN = "admin",
  FISCAL = "fiscal",
  COMPANY_MANAGER = "manager",
  EMPLOYEE = "employee",
}

export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  permissions: Permission[];
}

export enum Permission {
  // Permissões do Administrador
  MANAGE_USERS = "manage_users", // Gerir utilizadores
  MANAGE_SYSTEM = "manage_system", // Gerir configurações do sistema
  VIEW_ALL_DATA = "view_all_data", // Ver todos os dados
  MANAGE_ENTITIES = "manage_entities", // Gerir entidades
  SYSTEM_AUDIT = "system_audit", // Auditoria do sistema

  // Permissões do Fiscal/Auditor
  VIEW_FISCAL_DOCUMENTS = "view_fiscal_documents", // Ver documentos fiscais
  MANAGE_FISCAL_DOCUMENTS = "manage_fiscal_documents", // Gerir documentos fiscais
  VIEW_OBLIGATIONS = "view_obligations", // Ver obrigações fiscais
  MANAGE_OBLIGATIONS = "manage_obligations", // Gerir obrigações fiscais
  VIEW_ANOMALIES = "view_anomalies", // Ver anomalias
  MANAGE_ANOMALIES = "manage_anomalies", // Gerir anomalias
  AUDIT_RECORDS = "audit_records", // Auditar registos
  MONITOR_COMPLIANCE = "monitor_compliance", // Monitorar conformidade

  // Permissões do Gestor da Empresa
  VIEW_FINANCIAL = "view_financial", // Ver dados financeiros
  MANAGE_FINANCIAL = "manage_financial", // Gerir dados financeiros
  VIEW_SALES = "view_sales", // Ver vendas
  MANAGE_SALES = "manage_sales", // Gerir vendas
  VIEW_PURCHASES = "view_purchases", // Ver compras
  MANAGE_PURCHASES = "manage_purchases", // Gerir compras
  VIEW_HR = "view_hr", // Ver recursos humanos
  MANAGE_HR = "manage_hr", // Gerir recursos humanos
  VIEW_STOCK = "view_stock", // Ver stock
  MANAGE_STOCK = "manage_stock", // Gerir stock
  MANAGE_INVOICING = "manage_invoicing", // Gerir faturação
  MANAGE_PAYMENTS = "manage_payments", // Gerir pagamentos

  // Permissões do Funcionário
  VIEW_PERSONAL_INFO = "view_personal_info", // Ver informações pessoais
  MANAGE_PERSONAL_INFO = "manage_personal_info", // Gerir informações pessoais
  VIEW_ATTENDANCE = "view_attendance", // Ver registo de ponto
  MANAGE_ATTENDANCE = "manage_attendance", // Gerir registo de ponto
  VIEW_DOCUMENTS = "view_documents", // Ver documentos
  MANAGE_DOCUMENTS = "manage_documents", // Gerir documentos
  VIEW_SALARY = "view_salary", // Ver recibos de salário
  REQUEST_LEAVE = "request_leave", // Solicitar férias
}

// Helper function to check if a user has a specific permission
export const hasPermission = (user: User, permission: Permission): boolean => {
  return user.permissions.includes(permission);
};

// Helper function to get dashboard route based on user role
export const getDashboardRouteByRole = (role: UserRole): string => {
  switch (role) {
    case UserRole.ADMIN:
      return "/admin";
    case UserRole.FISCAL:
      return "/fiscal";
    case UserRole.COMPANY_MANAGER:
      return "/company";
    case UserRole.EMPLOYEE:
      return "/employee";
    default:
      return "/login";
  }
};
