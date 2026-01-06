import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
