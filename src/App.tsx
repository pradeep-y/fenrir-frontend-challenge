import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import ScanDetail from "./pages/ScanDetail";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/scan"
          element={
            <MainLayout>
              <ScanDetail />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}