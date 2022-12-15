import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LandingPage from "./components/LandingPage";
import Account from "./components/RegisterLogin/Account";

function AppRoute() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<LandingPage />} />
                <Route path="/account" element={<Account />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoute;
