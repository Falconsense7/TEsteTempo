import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "./dashboard/DashboardLayout";
import StatisticsPanel from "./dashboard/StatisticsPanel";
import SystemMonitoring from "./dashboard/SystemMonitoring";
import AlertsPanel from "./dashboard/AlertsPanel";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Clock,
  FileText,
  Plus,
  Settings,
  Users,
} from "lucide-react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  // Mock data for recent entities
  const recentEntities = [
    {
      id: 1,
      name: "Empresa ABC",
      plan: "Premium",
      status: "active",
      lastUpdated: "2023-06-15T10:30:00",
    },
    {
      id: 2,
      name: "Consultoria XYZ",
      plan: "Standard",
      status: "active",
      lastUpdated: "2023-06-14T14:45:00",
    },
    {
      id: 3,
      name: "Loja Maputo",
      plan: "Basic",
      status: "pending",
      lastUpdated: "2023-06-13T09:15:00",
    },
    {
      id: 4,
      name: "Restaurante Beira",
      plan: "Premium",
      status: "active",
      lastUpdated: "2023-06-12T16:20:00",
    },
    {
      id: 5,
      name: "Farmácia Central",
      plan: "Standard",
      status: "inactive",
      lastUpdated: "2023-06-11T11:05:00",
    },
  ];

  // Mock data for activity logs
  const activityLogs = [
    {
      id: 1,
      action: "User login",
      user: "admin@oblivion.co.mz",
      timestamp: "2023-06-15T10:45:00",
      ip: "192.168.1.1",
    },
    {
      id: 2,
      action: "Entity created",
      user: "admin@oblivion.co.mz",
      timestamp: "2023-06-15T09:30:00",
      ip: "192.168.1.1",
    },
    {
      id: 3,
      action: "License updated",
      user: "admin@oblivion.co.mz",
      timestamp: "2023-06-14T16:20:00",
      ip: "192.168.1.1",
    },
    {
      id: 4,
      action: "User created",
      user: "admin@oblivion.co.mz",
      timestamp: "2023-06-14T14:15:00",
      ip: "192.168.1.1",
    },
    {
      id: 5,
      action: "System backup",
      user: "system",
      timestamp: "2023-06-14T02:00:00",
      ip: "192.168.1.2",
    },
    {
      id: 6,
      action: "Configuration changed",
      user: "admin@oblivion.co.mz",
      timestamp: "2023-06-13T11:45:00",
      ip: "192.168.1.1",
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
  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Ativo</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500">Pendente</Badge>;
      case "inactive":
        return <Badge className="bg-red-500">Inativo</Badge>;
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
              Dashboard Administrativo
            </h1>
            <p className="text-muted-foreground">
              Bem-vindo ao painel de controle do Oblivion Inteligência
              Financeira.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Clock className="mr-2 h-4 w-4" />
              {formatDate(new Date().toISOString())}
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nova Entidade
            </Button>
          </div>
        </div>

        <Tabs
          defaultValue="overview"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-4 gap-2">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="entities">Entidades</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoramento</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            <StatisticsPanel
              statistics={{
                activeEntities: 1250,
                activeUsers: 3842,
                transactions: 12567,
                storageUsage: {
                  used: 1.7,
                  total: 5,
                },
                licenses: {
                  active: 145,
                  total: 200,
                },
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <SystemMonitoring />
              </div>
              <div>
                <AlertsPanel />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Entidades Recentes</CardTitle>
                      <CardDescription>
                        Últimas entidades adicionadas ou atualizadas
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveTab("entities")}
                    >
                      Ver Todas
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-4">
                      {recentEntities.map((entity) => (
                        <div
                          key={entity.id}
                          className="flex items-center justify-between p-3 border rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {entity.name.substring(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{entity.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Plano: {entity.plan}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            {getStatusBadge(entity.status)}
                            <span className="text-xs text-muted-foreground">
                              {formatDate(entity.lastUpdated)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Ações Rápidas</CardTitle>
                      <CardDescription>
                        Acesso rápido a funções administrativas
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      className="h-24 flex flex-col items-center justify-center gap-2"
                      variant="outline"
                    >
                      <Users className="h-6 w-6" />
                      <span>Gerenciar Usuários</span>
                    </Button>
                    <Button
                      className="h-24 flex flex-col items-center justify-center gap-2"
                      variant="outline"
                    >
                      <BarChart3 className="h-6 w-6" />
                      <span>Relatórios</span>
                    </Button>
                    <Button
                      className="h-24 flex flex-col items-center justify-center gap-2"
                      variant="outline"
                    >
                      <Settings className="h-6 w-6" />
                      <span>Configurações</span>
                    </Button>
                    <Button
                      className="h-24 flex flex-col items-center justify-center gap-2"
                      variant="outline"
                    >
                      <FileText className="h-6 w-6" />
                      <span>Licenças</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="entities" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciamento de Entidades</CardTitle>
                <CardDescription>
                  Visualize e gerencie todas as entidades do sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-12 text-muted-foreground">
                  Conteúdo do gerenciamento de entidades será implementado aqui.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Monitoramento do Sistema</CardTitle>
                <CardDescription>
                  Métricas detalhadas e status do sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SystemMonitoring fullView={true} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Logs de Atividade</CardTitle>
                    <CardDescription>
                      Registro de ações realizadas no sistema
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    Exportar Logs
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {activityLogs.map((log) => (
                      <div
                        key={log.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{log.action}</p>
                          <p className="text-sm text-muted-foreground">
                            Utilizador: {log.user}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-xs text-muted-foreground">
                            {formatDate(log.timestamp)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            IP: {log.ip}
                          </span>
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

export default Home;
