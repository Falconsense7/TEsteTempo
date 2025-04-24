import React, { useState } from "react";
import {
  Sun,
  Moon,
  Bell,
  Search,
  Menu,
  X,
  User,
  LogOut,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // In a real implementation, this would update the theme in the DOM
    document.documentElement.classList.toggle("dark");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    {
      category: "Administração",
      items: [
        { name: "Dashboard", icon: "📊", path: "/admin" },
        { name: "Usuários", icon: "👥", path: "/admin" },
        { name: "Entidades", icon: "🏢", path: "/admin" },
        { name: "Licenças", icon: "💳", path: "/admin" },
        { name: "Segurança", icon: "🔒", path: "/admin" },
        { name: "Logs", icon: "📝", path: "/admin" },
      ],
    },
    {
      category: "Gestão Empresarial",
      items: [
        { name: "Dashboard Empresa", icon: "🏢", path: "/company" },
        { name: "Dashboard Funcionário", icon: "👤", path: "/employee" },
        { name: "Fiscal", icon: "📑", path: "/fiscal" },
        { name: "Todos os Módulos", icon: "🧩", path: "/modules" },
      ],
    },
    {
      category: "Módulos Funcionais",
      items: [
        { name: "Contabilidade", icon: "💼", path: "/accountant" },
        { name: "Recursos Humanos", icon: "👥", path: "/hr" },
        { name: "Cobrança", icon: "💰", path: "/collection" },
        { name: "Caixa", icon: "🧾", path: "/cashier" },
        { name: "Estoque", icon: "📦", path: "/inventory" },
        { name: "Análise de Dados", icon: "📈", path: "/analytics" },
        { name: "Auditoria", icon: "🔍", path: "/auditor" },
      ],
    },
    {
      category: "Configurações",
      items: [
        { name: "Preferências", icon: "⚙️", path: "/admin" },
        { name: "Tema", icon: "🎨", path: "/admin" },
      ],
    },
  ];

  // Get current role from URL path
  const getCurrentRole = () => {
    const path = window.location.pathname;
    if (path.includes("/admin")) return "admin";
    if (path.includes("/fiscal")) return "fiscal";
    if (path.includes("/company")) return "company";
    if (path.includes("/employee")) return "employee";
    if (path.includes("/accountant")) return "accountant";
    if (path.includes("/hr")) return "hr";
    if (path.includes("/collection")) return "collection";
    if (path.includes("/cashier")) return "cashier";
    if (path.includes("/inventory")) return "inventory";
    if (path.includes("/analytics")) return "analytics";
    if (path.includes("/auditor")) return "auditor";
    return "admin"; // Default
  };

  const currentRole = getCurrentRole();

  return (
    <div className={`min-h-screen bg-background ${isDarkTheme ? "dark" : ""}`}>
      {/* Header */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          <div className="flex items-center gap-2">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=oblivion"
              alt="Logo"
              className="h-8 w-8"
            />
            <div>
              <h1 className="text-xl font-bold tracking-tight">Oblivion</h1>
              <p className="text-xs text-muted-foreground">
                {currentRole.charAt(0).toUpperCase() + currentRole.slice(1)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Pesquisar..."
              className="w-full max-w-lg pl-8"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDarkTheme ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between p-2">
                <h2 className="font-medium">Notifications</h2>
                <Button variant="ghost" size="sm" className="text-xs">
                  Mark all as read
                </Button>
              </div>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-3 hover:bg-muted cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 mt-1.5 rounded-full bg-primary" />
                      <div>
                        <p className="text-sm font-medium">System Alert</p>
                        <p className="text-xs text-muted-foreground">
                          New entity registered in the system
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          10 minutes ago
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <DropdownMenuSeparator />
              <div className="p-2 text-center">
                <Button variant="ghost" size="sm" className="w-full text-xs">
                  View all notifications
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
                    alt="Admin"
                  />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">
                    admin@oblivion.com
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar for larger screens */}
        <aside
          className={`fixed inset-y-0 left-0 z-20 mt-16 hidden w-64 transform border-r bg-background transition-transform duration-200 md:block overflow-y-auto ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <nav className="p-4">
            {sidebarItems.map((category, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="mb-2 px-2 text-sm font-semibold text-muted-foreground">
                  {category.category}
                </h3>
                <div className="space-y-1">
                  {category.items.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="w-full justify-start text-left font-normal"
                      onClick={() => (window.location.href = item.path)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Mobile sidebar */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden fixed bottom-4 right-4 z-40 h-12 w-12 rounded-full shadow-lg"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 pt-16 overflow-y-auto">
            <nav className="p-4">
              {sidebarItems.map((category, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="mb-2 px-2 text-sm font-semibold text-muted-foreground">
                    {category.category}
                  </h3>
                  <div className="space-y-1">
                    {category.items.map((item) => (
                      <Button
                        key={item.name}
                        variant="ghost"
                        className="w-full justify-start text-left font-normal"
                        onClick={() => (window.location.href = item.path)}
                      >
                        <span className="mr-3">{item.icon}</span>
                        {item.name}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        {/* Main content */}
        <main
          className={`flex-1 p-4 md:p-6 transition-all duration-200 ${isSidebarOpen ? "md:ml-64" : ""}`}
        >
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer
        className={`border-t bg-background p-4 text-center text-sm text-muted-foreground transition-all duration-200 ${isSidebarOpen ? "md:ml-64" : ""}`}
      >
        <p>
          Oblivion Inteligência Financeira v1.0.0 | ©{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default DashboardLayout;
