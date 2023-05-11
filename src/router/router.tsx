import { Route, Routes } from "react-router-dom";
import { HomeView, FormAdvance } from "../views";
import { APP_ROUTES } from "./routes";

export const Router = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.home} element={<HomeView />} />
      <Route path={APP_ROUTES.formAdvanced} element={<FormAdvance />} />
    </Routes>
  );
};
