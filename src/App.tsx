import { Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Layout from "./components/layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
