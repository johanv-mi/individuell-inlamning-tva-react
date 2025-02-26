import { Outlet } from "react-router";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {
  AppContainer,
  MainContent,
} from "./Components/styles/AppLayout.styled";

export default function AppLayout() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}
