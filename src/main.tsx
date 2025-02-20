import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./AppLayout";
import DiscoverPage from "./Pages/DiscoverPage";
import GetInToItPage from "./Pages/GetInToItPage";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import ShowPage from "./Pages/ShowPage";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path='anime/:slug/:id' element={<ShowPage />} />
            <Route path='discover' element={<DiscoverPage />} />
            <Route path='getintoit' element={<GetInToItPage />} />
            <Route path='search' element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
