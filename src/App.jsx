import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "@/layouts";
import Landing from "./pages/Landing";
import ComprarViaje from "./pages/ComprarViaje";
import VenderViaje from "./pages/VenderViaje";
import IniciaSesion from "./pages/IniciaSesion";
import RegistroSesion from "./pages/RegistroSesion";
import { AuthProvider } from "./context/context/authContext/Index";
import PostJob from "./pages/PostJob";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Landing />
          }
        />
        <Route
          path="/comprar"
          element={
            <ComprarViaje />
          }
        />
        <Route
          path="/vender"
          element={
            <VenderViaje />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>

  );
}

export default App;
