import React from "react";
import DashboardLayout from "../dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AuditorDashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Auditor Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage audit processes, compliance checks, and review financial
            records.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Audit Planning</CardTitle>
              <CardDescription>
                Schedule and plan upcoming audits across departments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Create and manage audit schedules, assign audit teams, and set
                audit objectives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance Monitoring</CardTitle>
              <CardDescription>
                Track compliance with regulations and internal policies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Monitor compliance metrics, identify potential issues, and
                implement corrective actions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Audits</CardTitle>
              <CardDescription>
                Review and verify financial records and transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Conduct financial audits, verify transaction accuracy, and
                ensure proper financial controls.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Audit Reports</CardTitle>
              <CardDescription>
                Generate and manage comprehensive audit reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Create detailed audit reports, document findings, and track
                resolution of identified issues.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risk Assessment</CardTitle>
              <CardDescription>
                Identify and evaluate potential risks across the organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Conduct risk assessments, prioritize risk areas, and develop
                risk mitigation strategies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Audit Analytics</CardTitle>
              <CardDescription>
                Analyze audit data to identify patterns and insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Use advanced analytics to identify trends, anomalies, and areas
                requiring further investigation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AuditorDashboard;
