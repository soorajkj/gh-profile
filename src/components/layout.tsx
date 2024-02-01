import { Outlet } from "react-router-dom";
import Container from "@/components/core/container";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Layout() {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      <main className="static flex-1">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
