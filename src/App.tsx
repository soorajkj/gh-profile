import { Route, Routes } from "react-router-dom";
import useSubscription from "@/hooks/useSubscription";
import Account from "@/pages/Account";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import Layout from "@/components/Layout";

export default function App() {
  const _supscription = useSubscription();

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
}
