import { Outlet } from "react-router";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
