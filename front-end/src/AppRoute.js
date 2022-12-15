import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LandingPage from "./components/LandingPage";
import Account from "./components/RegisterLogin/Account";
import ConfirmAccount from "./components/RegisterLogin/ConfirmAccount";
import NewPassword from "./components/RegisterLogin/NewPassword";
import ResetPassword from "./components/RegisterLogin/ResetPassword";

function AppRoute() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/newPassword" element={<NewPassword />} />
            <Route path="/confirmAccount" element={<ConfirmAccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoute;
