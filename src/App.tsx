import { Route, Routes } from "react-router-dom";
import useSubscription from "@/hooks/useSubscription";
import Account from "@/pages/account";
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
import Layout from "@/components/layout";

export default function App() {
  const _subscription = useSubscription();

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
