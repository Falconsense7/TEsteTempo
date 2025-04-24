import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, EyeOff, LogIn } from "lucide-react";

interface LoginCredentials {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // In a real app, this would be an API call to authenticate
      // For demo purposes, we'll use hardcoded credentials for different roles
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      if (
        credentials.username === "admin" &&
        credentials.password === "admin"
      ) {
        navigate("/admin");
      } else if (
        credentials.username === "fiscal" &&
        credentials.password === "fiscal"
      ) {
        navigate("/fiscal");
      } else if (
        credentials.username === "manager" &&
        credentials.password === "manager"
      ) {
        navigate("/company");
      } else if (
        credentials.username === "employee" &&
        credentials.password === "employee"
      ) {
        navigate("/employee");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError(
        "Ocorreu um erro durante o início de sessão. Por favor, tente novamente.",
      );
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=oblivion"
              alt="Oblivion Logo"
              className="h-16 w-16"
            />
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Oblivion
          </CardTitle>
          <CardDescription className="text-center">
            Inteligência Financeira - Login
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="Enter your username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="text-sm text-muted-foreground">
              <p>Demo Credentials:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Admin: admin / admin</li>
                <li>Fiscal: fiscal / fiscal</li>
                <li>Manager: manager / manager</li>
                <li>Employee: employee / employee</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                  Logging in...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Login
                </span>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
