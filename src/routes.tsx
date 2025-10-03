import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Integrantes from "./pages/Integrantes";
import Shows from "./pages/Shows";
import Produtos from "./pages/Produtos";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/integrantes" element={<Integrantes />} />
      <Route path="/shows" element={<Shows />} />
      <Route path="/produtos" element={<Produtos />} />

   
    </Routes>
  );
}
