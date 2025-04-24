import React, { useState } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Download, FileText, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const FiscalDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for fiscal documents
  const fiscalDocuments = [
    {
      id: 1,
      name: "Declaração IVA - Maio 2023",
      entity: "Empresa ABC",
      status: "pending",
      dueDate: "2023-06-20T23:59:59",
      type: "iva",
    },
    {
      id: 2,
      name: "Declaração IRPC - Q1 2023",
      entity: "Consultoria XYZ",
      status: "submitted",
      dueDate: "2023-04-30T23:59:59",
      type: "irpc",
    },
    {
      id: 3,
      name: "Folha de Pagamento - Abril 2023",
      entity: "Loja Maputo",
      status: "approved",
      dueDate: "2023-05-10T23:59:59",
      type: "payroll",
    },
    {
      id: 4,
      name: "Declaração IVA - Abril 2023",
      entity: "Restaurante Beira",
      status: "rejected",
      dueDate: "2023-05-20T23:59:59",
      type: "iva",
    },
    {
      id: 5,
      name: "Relatório Fiscal Anual 2022",
      entity: "Farmácia Central",
      status: "approved",
      dueDate: "2023-03-31T23:59:59",
      type: "annual",
    },
  ];

  // Mock data for tax obligations
  const taxObligations = [
    {
      id: 1,
      name: "IVA Mensal",
      entity: "Empresa ABC",
      dueDate: "2023-06-20T23:59:59",
      status: "upcoming",
      amount: 45000,
    },
    {
      id: 2,
      name: "IRPC Trimestral",
      entity: "Consultoria XYZ",
      dueDate: "2023-07-31T23:59:59",
      status: "upcoming",
      amount: 120000,
    },
    {
      id: 3,
      name: "Imposto de Selo",
      entity: "Loja Maputo",
      dueDate: "2023-06-15T23:59:59",
      status: "urgent",
      amount: 5000,
    },
    {
      id: 4,
      name: "Contribuição Segurança Social",
      entity: "Restaurante Beira",
      dueDate: "2023-06-10T23:59:59",
      status: "overdue",
      amount: 32000,
    },
    {
      id: 5,
      name: "Taxa Municipal",
      entity: "Farmácia Central",
      dueDate: "2023-08-15T23:59:59",
      status: "upcoming",
      amount: 8500,
    },
  ];

  // Mock data for anomalies
  const anomalies = [
    {
      id: 1,
      description: "Discrepância em declaração de IVA",
      entity: "Empresa ABC",
      severity: "high",
      detectedDate: "2023-06-10T14:30:00",
      status: "open",
    },
    {
      id: 2,
      description: "Falta de documentação suporte",
      entity: "Consultoria XYZ",
      severity: "medium",
      detectedDate: "2023-06-08T09:15:00",
      status: "investigating",
    },
    {
      id: 3,
      description: "Erro em cálculo de imposto",
      entity: "Loja Maputo",
      severity: "low",
      detectedDate: "2023-06-05T16:45:00",
      status: "resolved",
    },
    {
      id: 4,
      description: "Pagamento em duplicidade",
      entity: "Restaurante Beira",
      severity: "medium",
      detectedDate: "2023-06-02T11:20:00",
      status: "open",
    },
    {
      id: 5,
      description: "Declaração fora do prazo",
      entity: "Farmácia Central",
      severity: "high",
      detectedDate: "2023-05-30T10:10:00",
      status: "escalated",
    },
  ];

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("pt-MZ", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  // Get status badge color
  const getDocumentStatusBadge = (status) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">Aprovado</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500">Pendente</Badge>;
      case "submitted":
        return <Badge className="bg-blue-500">Submetido</Badge>;
      case "rejected":
        return <Badge className="bg-red-500">Rejeitado</Badge>;
      default:
        return <Badge>Desconhecido</Badge>;
    }
  };

  // Get obligation status badge color
  const getObligationStatusBadge = (status) => {
    switch (status) {
      case "upcoming":
        return <Badge className="bg-blue-500">Próximo</Badge>;
      case "urgent":
        return <Badge className="bg-yellow-500">Urgente</Badge>;
      case "overdue":
        return <Badge className="bg-red-500">Atrasado</Badge>;
      case "completed":
        return <Badge className="bg-green-500">Completo</Badge>;
      default:
        return <Badge>Desconhecido</Badge>;
    }
  };

  // Get anomaly severity badge color
  const getAnomalySeverityBadge = (severity) => {
    switch (severity) {
      case "high":
        return <Badge className="bg-red-500">Alta</Badge>;
      case "medium":
        return <Badge className="bg-yellow-500">Média</Badge>;
      case "low":
        return <Badge className="bg-green-500">Baixa</Badge>;
      default:
        return <Badge>Desconhecido</Badge>;
    }
  };

  // Get anomaly status badge color
  const getAnomalyStatusBadge = (status) => {
    switch (status) {
      case "open":
        return <Badge className="bg-blue-500">Aberto</Badge>;
      case "investigating":
        return <Badge className="bg-purple-500">Em Investigação</Badge>;
      case "escalated":
        return <Badge className="bg-red-500">Escalado</Badge>;
      case "resolved":
        return <Badge className="bg-green-500">Resolvido</Badge>;
      default:
        return <Badge>Desconhecido</Badge>;
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-6 bg-background">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Dashboard Fiscal
            </h1>
            <p className="text-muted-foreground">
              Gerencie documentos fiscais, obrigações tributárias e anomalias.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Clock className="mr-2 h-4 w-4" />
              {formatDate(new Date().toISOString())}
            </Button>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Novo Documento
            </Button>
          </div>
        </div>

        <Tabs
          defaultValue="overview"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full md:w-auto grid-cols-3 gap-2">
            <TabsTrigger value="documents">Documentos Fiscais</TabsTrigger>
            <TabsTrigger value="obligations">
              Obrigações Tributárias
            </TabsTrigger>
            <TabsTrigger value="anomalies">Anomalias</TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <CardTitle>Documentos Fiscais</CardTitle>
                    <CardDescription>
                      Gerencie e revise documentos fiscais de todas as entidades
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Buscar documentos..."
                        className="pl-8 w-full md:w-[250px]"
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {fiscalDocuments.map((document) => (
                      <div
                        key={document.id}
                        className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {document.type.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{document.name}</p>
                            <p className="text-sm text-muted-foreground">
                              Entidade: {document.entity}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-2 md:mt-0">
                          {getDocumentStatusBadge(document.status)}
                          <span className="text-sm text-muted-foreground">
                            Vencimento: {formatDate(document.dueDate)}
                          </span>
                          <Button variant="ghost" size="sm">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="obligations" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <CardTitle>Obrigações Tributárias</CardTitle>
                    <CardDescription>
                      Acompanhe prazos e pagamentos de obrigações fiscais
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Buscar obrigações..."
                        className="pl-8 w-full md:w-[250px]"
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {taxObligations.map((obligation) => (
                      <div
                        key={obligation.id}
                        className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {obligation.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{obligation.name}</p>
                            <p className="text-sm text-muted-foreground">
                              Entidade: {obligation.entity}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-2 md:mt-0">
                          {getObligationStatusBadge(obligation.status)}
                          <span className="text-sm font-medium">
                            {new Intl.NumberFormat("pt-MZ", {
                              style: "currency",
                              currency: "MZN",
                            }).format(obligation.amount)}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            Vencimento: {formatDate(obligation.dueDate)}
                          </span>
                          <Button variant="ghost" size="sm">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="anomalies" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <CardTitle>Anomalias Detectadas</CardTitle>
                    <CardDescription>
                      Identifique e resolva inconsistências fiscais
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Buscar anomalias..."
                        className="pl-8 w-full md:w-[250px]"
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {anomalies.map((anomaly) => (
                      <div
                        key={anomaly.id}
                        className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex flex-col items-center justify-center h-10 w-10 rounded-full bg-red-100">
                            <span className="text-red-600 text-lg font-bold">
                              !
                            </span>
                          </div>
                          <div>
                            <p className="font-medium">{anomaly.description}</p>
                            <p className="text-sm text-muted-foreground">
                              Entidade: {anomaly.entity}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-2 md:mt-0">
                          {getAnomalySeverityBadge(anomaly.severity)}
                          {getAnomalyStatusBadge(anomaly.status)}
                          <span className="text-sm text-muted-foreground">
                            Detectado: {formatDate(anomaly.detectedDate)}
                          </span>
                          <Button variant="ghost" size="sm">
                            Investigar
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default FiscalDashboard;
