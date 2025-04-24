import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Download,
  RefreshCw,
  AlertTriangle,
  Activity,
  Cpu,
  Database,
  Clock,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

interface SystemMetric {
  name: string;
  value: number;
  threshold?: number;
}

interface TimeSeriesData {
  timestamp: string;
  cpu: number;
  memory: number;
  responseTime: number;
  errors: number;
}

const SystemMonitoring = () => {
  const [timeRange, setTimeRange] = useState("24h");
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Mock data for system metrics
  const systemHealthData: SystemMetric[] = [
    { name: "CPU Usage", value: 42, threshold: 80 },
    { name: "Memory Usage", value: 68, threshold: 90 },
    { name: "Disk Space", value: 56, threshold: 85 },
    { name: "Network Load", value: 34, threshold: 75 },
  ];

  // Mock time series data
  const timeSeriesData: TimeSeriesData[] = [
    { timestamp: "00:00", cpu: 35, memory: 60, responseTime: 120, errors: 0 },
    { timestamp: "04:00", cpu: 28, memory: 62, responseTime: 118, errors: 2 },
    { timestamp: "08:00", cpu: 45, memory: 68, responseTime: 135, errors: 1 },
    { timestamp: "12:00", cpu: 62, memory: 75, responseTime: 155, errors: 3 },
    { timestamp: "16:00", cpu: 58, memory: 72, responseTime: 148, errors: 2 },
    { timestamp: "20:00", cpu: 40, memory: 65, responseTime: 125, errors: 1 },
    { timestamp: "24:00", cpu: 32, memory: 58, responseTime: 115, errors: 0 },
  ];

  // Mock API monitoring data
  const apiMonitoringData = [
    { name: "Auth API", uptime: 99.8, responseTime: 145, requests: 12500 },
    { name: "Entity API", uptime: 99.9, responseTime: 132, requests: 8700 },
    { name: "Billing API", uptime: 100, responseTime: 128, requests: 5200 },
    { name: "Reports API", uptime: 99.7, responseTime: 165, requests: 3800 },
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh delay
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const handleExport = () => {
    // In a real implementation, this would generate and download a report
    console.log("Exporting system monitoring data...");
  };

  return (
    <Card className="w-full bg-background shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-semibold">
          System Health Monitoring
        </CardTitle>
        <div className="flex items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6h">Last 6 hours</SelectItem>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw
              className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="api">API Monitoring</TabsTrigger>
            <TabsTrigger value="errors">Error Rates</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {systemHealthData.map((metric) => (
                <Card key={metric.name} className="bg-card">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{metric.name}</span>
                      {metric.value > (metric.threshold || 0) * 0.8 && (
                        <AlertTriangle className="h-4 w-4 text-amber-500" />
                      )}
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold">
                        {metric.value}%
                      </span>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${metric.value > (metric.threshold || 0) * 0.8 ? "bg-amber-500" : "bg-primary"}`}
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Threshold: {metric.threshold}%
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">
                System Resource Usage
              </h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={timeSeriesData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="timestamp" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => [`${value}%`, ""]}
                      labelFormatter={(label) => `Time: ${label}`}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="cpu"
                      stackId="1"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                      name="CPU Usage"
                    />
                    <Area
                      type="monotone"
                      dataKey="memory"
                      stackId="2"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.6}
                      name="Memory Usage"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Card className="bg-card">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <Cpu className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Avg CPU Usage</span>
                  <span className="text-2xl font-bold">42.8%</span>
                  <span className="text-xs text-muted-foreground">
                    +5.2% from last week
                  </span>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <Database className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Avg Memory Usage</span>
                  <span className="text-2xl font-bold">65.7%</span>
                  <span className="text-xs text-muted-foreground">
                    +2.3% from last week
                  </span>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Avg Response Time</span>
                  <span className="text-2xl font-bold">132ms</span>
                  <span className="text-xs text-muted-foreground">
                    -8ms from last week
                  </span>
                </CardContent>
              </Card>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="timestamp" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="responseTime"
                    stroke="#8884d8"
                    name="Response Time (ms)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="api" className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">API Endpoint</th>
                    <th className="text-left py-3 px-4">Uptime</th>
                    <th className="text-left py-3 px-4">Avg Response</th>
                    <th className="text-left py-3 px-4">Requests (24h)</th>
                    <th className="text-left py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {apiMonitoringData.map((api) => (
                    <tr key={api.name} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4">{api.name}</td>
                      <td className="py-3 px-4">{api.uptime}%</td>
                      <td className="py-3 px-4">{api.responseTime}ms</td>
                      <td className="py-3 px-4">
                        {api.requests.toLocaleString()}
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-500">
                          <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-500"></span>
                          Operational
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="h-[300px] w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={apiMonitoringData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="responseTime"
                    fill="#8884d8"
                    name="Response Time (ms)"
                  />
                  <Bar
                    dataKey="requests"
                    fill="#82ca9d"
                    name="Requests (24h)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="errors" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">System Error Rates</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Current Error Rate:</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-500">
                  0.8% (Normal)
                </span>
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="timestamp" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="errors"
                    stroke="#ef4444"
                    name="Error Count"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4">
              <h4 className="text-md font-medium mb-2">Recent Error Logs</h4>
              <div className="bg-muted/50 rounded-md p-4 text-sm">
                <div className="flex items-start gap-2 mb-3">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Database connection timeout</p>
                    <p className="text-muted-foreground">
                      Today, 14:32 - Reports API
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Rate limit exceeded</p>
                    <p className="text-muted-foreground">
                      Today, 11:15 - Auth API
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Activity className="h-4 w-4 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Memory allocation failure</p>
                    <p className="text-muted-foreground">
                      Yesterday, 23:05 - Entity API
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SystemMonitoring;
