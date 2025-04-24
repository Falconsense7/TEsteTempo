import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  UsersIcon,
  BuildingIcon,
  BarChart3Icon,
  HardDriveIcon,
  KeyIcon,
} from "lucide-react";

interface StatisticCardProps {
  title: string;
  value: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon: React.ReactNode;
}

const StatisticCard = (
  { title, value, trend, icon }: StatisticCardProps = {
    title: "Statistic",
    value: "0",
    trend: { value: 0, isPositive: true },
    icon: <BarChart3Icon className="h-5 w-5" />,
  },
) => {
  return (
    <Card className="bg-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {trend && (
              <div className="flex items-center mt-1">
                {trend.isPositive ? (
                  <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span
                  className={`text-xs ${trend.isPositive ? "text-green-500" : "text-red-500"}`}
                >
                  {trend.value}% desde o mês passado
                </span>
              </div>
            )}
          </div>
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface StatisticsPanelProps {
  statistics?: {
    activeEntities: number;
    activeUsers: number;
    transactions: number;
    storageUsage: {
      used: number;
      total: number;
    };
    licenses: {
      active: number;
      total: number;
    };
  };
}

const StatisticsPanel = (
  { statistics }: StatisticsPanelProps = {
    statistics: {
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
    },
  },
) => {
  const formatNumber = (num: number): string => {
    return num.toLocaleString("pt-MZ");
  };

  const calculatePercentage = (used: number, total: number): number => {
    return Math.round((used / total) * 100);
  };

  // Ensure statistics is defined before accessing its properties
  if (!statistics) {
    return (
      <div className="w-full bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatisticCard
            title="Entidades Ativas"
            value="--"
            icon={<BuildingIcon className="h-5 w-5 text-primary" />}
          />
          <StatisticCard
            title="Usuários Ativos"
            value="--"
            icon={<UsersIcon className="h-5 w-5 text-primary" />}
          />
          <StatisticCard
            title="Transações Processadas"
            value="--"
            icon={<BarChart3Icon className="h-5 w-5 text-primary" />}
          />
          <StatisticCard
            title="Armazenamento"
            value="-- GB / -- GB"
            icon={<HardDriveIcon className="h-5 w-5 text-primary" />}
          />
          <StatisticCard
            title="Licenças"
            value="-- / --"
            icon={<KeyIcon className="h-5 w-5 text-primary" />}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatisticCard
          title="Entidades Ativas"
          value={formatNumber(statistics.activeEntities)}
          trend={{ value: 12, isPositive: true }}
          icon={<BuildingIcon className="h-5 w-5 text-primary" />}
        />
        <StatisticCard
          title="Usuários Ativos"
          value={formatNumber(statistics.activeUsers)}
          trend={{ value: 8, isPositive: true }}
          icon={<UsersIcon className="h-5 w-5 text-primary" />}
        />
        <StatisticCard
          title="Transações Processadas"
          value={formatNumber(statistics.transactions)}
          trend={{ value: 5, isPositive: true }}
          icon={<BarChart3Icon className="h-5 w-5 text-primary" />}
        />
        <StatisticCard
          title="Armazenamento"
          value={`${statistics.storageUsage.used} GB / ${statistics.storageUsage.total} GB`}
          trend={{
            value: calculatePercentage(
              statistics.storageUsage.used,
              statistics.storageUsage.total,
            ),
            isPositive: false,
          }}
          icon={<HardDriveIcon className="h-5 w-5 text-primary" />}
        />
        <StatisticCard
          title="Licenças"
          value={`${statistics.licenses.active} / ${statistics.licenses.total}`}
          trend={{
            value: calculatePercentage(
              statistics.licenses.active,
              statistics.licenses.total,
            ),
            isPositive: true,
          }}
          icon={<KeyIcon className="h-5 w-5 text-primary" />}
        />
      </div>
    </div>
  );
};

export default StatisticsPanel;
