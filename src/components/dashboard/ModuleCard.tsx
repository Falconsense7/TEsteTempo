import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

const ModuleCard = ({ title, description, icon, path }: ModuleCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground flex-grow mb-4">{description}</p>
        <Button
          className="w-full"
          variant="outline"
          onClick={() => navigate(path)}
        >
          Acessar Módulo
        </Button>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
