import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/Login";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import routes from "tempo-routes";

// Lazy load dashboard components
const AdminDashboard = lazy(() => import("./components/home"));
const FiscalDashboard = lazy(
  () => import("./components/fiscal/FiscalDashboard"),
);

const CompanyDashboard = lazy(
  () => import("./components/company/CompanyDashboard"),
);

const EmployeeDashboard = lazy(
  () => import("./components/employee/EmployeeDashboard"),
);

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <p>Loading...</p>
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/fiscal" element={<FiscalDashboard />} />
          <Route path="/company" element={<CompanyDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />

          {/* Add this before the catchall route for tempo */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
