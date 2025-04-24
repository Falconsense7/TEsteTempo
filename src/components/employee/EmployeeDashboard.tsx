import React, { useState } from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  FileText,
  User,
  Briefcase,
  Calendar as CalendarIcon,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const EmployeeDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Mock employee data
  const employeeData = {
    name: "João Silva",
    position: "Analista Financeiro",
    department: "Finanças",
    email: "joao.silva@oblivion.com",
    phone: "+258 84 123 4567",
    joinDate: "15/03/2022",
    manager: "Maria Fernandes",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=employee",
    salary: "75.000 MZN",
    status: "Ativo",
  };

  // Mock attendance data
  const attendanceData = [
    {
      date: "12/06/2023",
      checkIn: "08:02",
      checkOut: "17:05",
      status: "Completo",
    },
    {
      date: "13/06/2023",
      checkIn: "07:58",
      checkOut: "17:00",
      status: "Completo",
    },
    {
      date: "14/06/2023",
      checkIn: "08:10",
      checkOut: "17:15",
      status: "Completo",
    },
    {
      date: "15/06/2023",
      checkIn: "08:05",
      checkOut: "16:45",
      status: "Completo",
    },
    {
      date: "16/06/2023",
      checkIn: "08:20",
      checkOut: "17:10",
      status: "Completo",
    },
  ];

  // Mock tasks data
  const tasksData = [
    {
      id: 1,
      title: "Relatório Financeiro Mensal",
      dueDate: "20/06/2023",
      priority: "Alta",
      status: "Em Progresso",
    },
    {
      id: 2,
      title: "Análise de Despesas Q2",
      dueDate: "25/06/2023",
      priority: "Média",
      status: "Não Iniciado",
    },
    {
      id: 3,
      title: "Reconciliação Bancária",
      dueDate: "18/06/2023",
      priority: "Alta",
      status: "Em Progresso",
    },
    {
      id: 4,
      title: "Atualização de Projeções",
      dueDate: "30/06/2023",
      priority: "Baixa",
      status: "Não Iniciado",
    },
  ];

  // Mock leave data
  const leaveData = {
    annual: { total: 22, used: 5, remaining: 17 },
    sick: { total: 15, used: 2, remaining: 13 },
    upcoming: [
      {
        type: "Férias",
        startDate: "15/07/2023",
        endDate: "22/07/2023",
        status: "Aprovado",
      },
    ],
    history: [
      {
        type: "Doença",
        startDate: "03/04/2023",
        endDate: "04/04/2023",
        status: "Concluído",
      },
      {
        type: "Férias",
        startDate: "10/01/2023",
        endDate: "15/01/2023",
        status: "Concluído",
      },
    ],
  };

  // Mock documents data
  const documentsData = [
    { name: "Contrato de Trabalho", date: "15/03/2022", type: "PDF" },
    { name: "Termo de Confidencialidade", date: "15/03/2022", type: "PDF" },
    { name: "Comprovante de Residência", date: "20/03/2022", type: "PDF" },
    { name: "Certificado de Formação", date: "05/05/2022", type: "PDF" },
    { name: "Avaliação de Desempenho 2022", date: "15/12/2022", type: "PDF" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Dashboard do Funcionário
            </h1>
            <p className="text-muted-foreground">
              Gerencie seu perfil, tarefas e solicitações
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 border-green-200 px-2 py-1"
            >
              {employeeData.status}
            </Badge>
            <Button size="sm" variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Solicitar Documento
            </Button>
          </div>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden md:inline">Perfil</span>
            </TabsTrigger>
            <TabsTrigger value="attendance" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span className="hidden md:inline">Ponto</span>
            </TabsTrigger>
            <TabsTrigger value="tasks" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden md:inline">Tarefas</span>
            </TabsTrigger>
            <TabsTrigger value="leave" className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              <span className="hidden md:inline">Férias</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden md:inline">Documentos</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="col-span-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Informações Pessoais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center space-y-4 pt-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage
                        src={employeeData.avatar}
                        alt={employeeData.name}
                      />
                      <AvatarFallback>
                        {employeeData.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 text-center">
                      <h3 className="text-xl font-bold">{employeeData.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {employeeData.position}
                      </p>
                      <Badge variant="secondary">
                        {employeeData.department}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Detalhes do Funcionário</CardTitle>
                  <CardDescription>
                    Informações profissionais e de contato
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        {employeeData.email}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Telefone</p>
                      <p className="text-sm text-muted-foreground">
                        {employeeData.phone}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Data de Admissão</p>
                      <p className="text-sm text-muted-foreground">
                        {employeeData.joinDate}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Gestor</p>
                      <p className="text-sm text-muted-foreground">
                        {employeeData.manager}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Salário</p>
                      <p className="text-sm text-muted-foreground">
                        {employeeData.salary}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Attendance Tab */}
          <TabsContent value="attendance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Registro de Ponto</CardTitle>
                <CardDescription>Histórico dos últimos 5 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 border-b bg-muted/50 p-2 text-sm font-medium">
                    <div>Data</div>
                    <div>Entrada</div>
                    <div>Saída</div>
                    <div>Status</div>
                  </div>
                  {attendanceData.map((record, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-4 p-2 text-sm border-b last:border-0"
                    >
                      <div>{record.date}</div>
                      <div>{record.checkIn}</div>
                      <div>{record.checkOut}</div>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {record.status}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-4 gap-4">
                  <Button variant="outline" size="sm">
                    <Clock className="mr-2 h-4 w-4" />
                    Registrar Entrada
                  </Button>
                  <Button variant="outline" size="sm">
                    <Clock className="mr-2 h-4 w-4" />
                    Registrar Saída
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tasks Tab */}
          <TabsContent value="tasks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Minhas Tarefas</CardTitle>
                <CardDescription>
                  Tarefas atribuídas e seus prazos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 border-b bg-muted/50 p-2 text-sm font-medium">
                    <div>Tarefa</div>
                    <div>Prazo</div>
                    <div>Prioridade</div>
                    <div>Status</div>
                  </div>
                  {tasksData.map((task) => (
                    <div
                      key={task.id}
                      className="grid grid-cols-4 p-2 text-sm border-b last:border-0"
                    >
                      <div>{task.title}</div>
                      <div>{task.dueDate}</div>
                      <div>
                        <Badge
                          variant="outline"
                          className={`${
                            task.priority === "Alta"
                              ? "bg-red-50 text-red-700 border-red-200"
                              : task.priority === "Média"
                                ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                : "bg-blue-50 text-blue-700 border-blue-200"
                          }`}
                        >
                          {task.priority}
                        </Badge>
                      </div>
                      <div>
                        <Badge
                          variant="outline"
                          className={`${
                            task.status === "Em Progresso"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : task.status === "Concluído"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-gray-50 text-gray-700 border-gray-200"
                          }`}
                        >
                          {task.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leave Tab */}
          <TabsContent value="leave" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Saldo de Férias</CardTitle>
                  <CardDescription>Ano corrente</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Férias Anuais</p>
                        <p className="text-sm text-muted-foreground">
                          {leaveData.annual.remaining} /{" "}
                          {leaveData.annual.total} dias
                        </p>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{
                            width: `${(leaveData.annual.remaining / leaveData.annual.total) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Licença Médica</p>
                        <p className="text-sm text-muted-foreground">
                          {leaveData.sick.remaining} / {leaveData.sick.total}{" "}
                          dias
                        </p>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{
                            width: `${(leaveData.sick.remaining / leaveData.sick.total) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Solicitar Férias
                  </Button>
                </CardContent>
              </Card>

              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Histórico de Ausências</CardTitle>
                  <CardDescription>
                    Férias e licenças anteriores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 border-b bg-muted/50 p-2 text-sm font-medium">
                      <div>Tipo</div>
                      <div>Início</div>
                      <div>Fim</div>
                      <div>Status</div>
                    </div>
                    {leaveData.upcoming.map((leave, index) => (
                      <div
                        key={`upcoming-${index}`}
                        className="grid grid-cols-4 p-2 text-sm border-b"
                      >
                        <div>{leave.type}</div>
                        <div>{leave.startDate}</div>
                        <div>{leave.endDate}</div>
                        <div>
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-700 border-blue-200"
                          >
                            {leave.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                    {leaveData.history.map((leave, index) => (
                      <div
                        key={`history-${index}`}
                        className="grid grid-cols-4 p-2 text-sm border-b last:border-0"
                      >
                        <div>{leave.type}</div>
                        <div>{leave.startDate}</div>
                        <div>{leave.endDate}</div>
                        <div>
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 border-green-200"
                          >
                            {leave.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Meus Documentos</CardTitle>
                <CardDescription>
                  Documentos pessoais e profissionais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-3 border-b bg-muted/50 p-2 text-sm font-medium">
                    <div>Nome do Documento</div>
                    <div>Data</div>
                    <div>Ações</div>
                  </div>
                  {documentsData.map((doc, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-3 p-2 text-sm border-b last:border-0"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-500" />
                        {doc.name}
                      </div>
                      <div>{doc.date}</div>
                      <div>
                        <Button variant="ghost" size="sm">
                          Visualizar
                        </Button>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default EmployeeDashboard;
