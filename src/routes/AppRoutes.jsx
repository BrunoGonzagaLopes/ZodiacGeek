import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import ProductListView from "../pages/produtos/ProductListView";
import FilterListView from "../pages/Filter/FilterListView";

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
      <Route 
      path="/ProductListVIew/:id?"
      element={
        <MainLayout>
          <ProductListView/>
        </MainLayout>
      }/>
        <Route 
      path="/filter"
      element={
        <MainLayout>
          <FilterListView/>
        </MainLayout>
      }/>
      </Routes>
    </BrowserRouter>
  );
}
