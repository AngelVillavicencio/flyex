import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "@/layouts";
import Landing from "./pages/Landing";
import IniciaSesion from "./pages/IniciaSesion";
import RegistroSesion from "./pages/RegistroSesion";
import { AuthProvider } from "./context/context/authContext/Index";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/overview/*" element={<Dashboard />} />
        <Route
          path="/"
          element={
            <Landing />
          }
        />
        <Route path="/inicia-sesion" element={<IniciaSesion></IniciaSesion>}></Route>
        <Route path="/registrarse" element={<RegistroSesion></RegistroSesion>}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>

  );
}

export default App;
