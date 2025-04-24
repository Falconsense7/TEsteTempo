import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bell,
  Shield,
  AlertTriangle,
  Info,
  Search,
  X,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

interface Alert {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  severity: "critical" | "high" | "medium" | "low";
  type: "security" | "system" | "notification";
  read: boolean;
}

const AlertsPanel = ({ alerts = mockAlerts }: { alerts?: Alert[] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Filter alerts based on search query and active tab
  const filteredAlerts = alerts.filter((alert) => {
    const matchesSearch =
      alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === "all") return matchesSearch;
    return matchesSearch && alert.type === activeTab;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-destructive text-destructive-foreground";
      case "high":
        return "bg-orange-500 text-white";
      case "medium":
        return "bg-yellow-500 text-black";
      case "low":
        return "bg-blue-500 text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "security":
        return <Shield className="h-4 w-4" />;
      case "system":
        return <AlertTriangle className="h-4 w-4" />;
      case "notification":
        return <Info className="h-4 w-4" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  return (
    <Card className="w-full h-full bg-card shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Alerts & Notifications
          </CardTitle>
          <Badge variant="outline" className="ml-2">
            {filteredAlerts.length} alerts
          </Badge>
        </div>
        <div className="relative mt-2">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search alerts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1 h-7 w-7 p-0"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="all" className="text-xs">
              All
            </TabsTrigger>
            <TabsTrigger value="security" className="text-xs">
              Security
            </TabsTrigger>
            <TabsTrigger value="system" className="text-xs">
              System
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[300px] pr-4">
            {filteredAlerts.length > 0 ? (
              <div className="space-y-3">
                {filteredAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-3 rounded-md border ${!alert.read ? "bg-accent/20" : "bg-card"}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <Badge
                          className={`${getSeverityColor(alert.severity)} h-6 w-6 flex items-center justify-center p-0 rounded-full`}
                        >
                          {getAlertIcon(alert.type)}
                        </Badge>
                        <span className="font-medium">{alert.title}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {alert.description}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-muted-foreground">
                        {alert.timestamp}
                      </span>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="h-7 px-2">
                          <CheckCircle className="h-3.5 w-3.5 mr-1" />
                          Mark Read
                        </Button>
                        <Button variant="ghost" size="sm" className="h-7 px-2">
                          <ExternalLink className="h-3.5 w-3.5 mr-1" />
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[200px] text-center">
                <Bell className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">No alerts found</p>
                {searchQuery && (
                  <Button
                    variant="link"
                    onClick={() => setSearchQuery("")}
                    className="mt-2"
                  >
                    Clear search
                  </Button>
                )}
              </div>
            )}
          </ScrollArea>
        </Tabs>
      </CardContent>
    </Card>
  );
};

// Mock data for alerts
const mockAlerts: Alert[] = [
  {
    id: "1",
    title: "Failed login attempts detected",
    description:
      "Multiple failed login attempts from IP 192.168.1.45. Account temporarily locked.",
    timestamp: "10 minutes ago",
    severity: "critical",
    type: "security",
    read: false,
  },
  {
    id: "2",
    title: "System update available",
    description:
      "Version 2.4.5 is available with security patches and performance improvements.",
    timestamp: "1 hour ago",
    severity: "medium",
    type: "system",
    read: false,
  },
  {
    id: "3",
    title: "Database backup completed",
    description: "Daily database backup completed successfully. Size: 2.4GB",
    timestamp: "3 hours ago",
    severity: "low",
    type: "system",
    read: true,
  },
  {
    id: "4",
    title: "New entity registration",
    description:
      "Empresa XYZ Limitada registered on the platform. Pending approval.",
    timestamp: "5 hours ago",
    severity: "medium",
    type: "notification",
    read: true,
  },
  {
    id: "5",
    title: "Suspicious API access detected",
    description:
      "Unusual pattern of API calls from user admin@example.com. Possible security breach.",
    timestamp: "6 hours ago",
    severity: "high",
    type: "security",
    read: false,
  },
  {
    id: "6",
    title: "License expiration warning",
    description:
      "5 entity licenses will expire in the next 7 days. Renewal required.",
    timestamp: "1 day ago",
    severity: "medium",
    type: "notification",
    read: true,
  },
  {
    id: "7",
    title: "High CPU usage detected",
    description:
      "Server CPU usage exceeded 90% for more than 15 minutes. Performance may be affected.",
    timestamp: "1 day ago",
    severity: "high",
    type: "system",
    read: true,
  },
];

export default AlertsPanel;
