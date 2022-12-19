import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DonationsBilling from "./components/Donations/DonationsBilling";
import DonationsConfirmation from "./components/Donations/DonationsConfirmation";
import DonationsPage from "./components/Donations/DonationsPage";
import LandingPage from "./components/LandingPage";
import Account from "./components/RegisterLogin/Account";
import ConfirmAccount from "./components/RegisterLogin/ConfirmAccount";
import NewPassword from "./components/RegisterLogin/NewPassword";
import ResetPassword from "./components/RegisterLogin/ResetPassword";
import Courses from "./components/CcoursesPage/Courses";
import Forum_landing from './components/Forum/Forum_landing'
import Search_thread from './components/Forum/Search_thread';
import Forum_page from './components/Forum/Forum_page';
import Create_forum from './components/Forum/Create_forum';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/FAQ/Contact'
import UPM from './components/UPM/Main'
function AppRoute() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} />
            {/* route for login */}
            <Route path="/account" element={<Account />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/newPassword" element={<NewPassword />} />
            <Route path="/confirmAccount" element={<ConfirmAccount />} />
            {/* route for donations */}
            <Route path="/donations" element={<DonationsPage />} />
            <Route path="/donationsBilling" element={<DonationsBilling />} />
            <Route path="/confirmDonation" element={<DonationsConfirmation />} />
            {/* route for courses */}
            <Route path="/courses" element={<Courses />} />
            {/* route for student forum */}
            <Route path="/Forum_landing" element={<Forum_landing />} />
            <Route path="/Search_thread" element={<Search_thread />} />
            <Route path="/Forum_page" element={<Forum_page />} />
            <Route path="/Create_forum" element={<Create_forum />} />
            {/* route for quizzes */}

            {/* route for FAQ */}
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Contact" element={<Contact />} />
            {/*Route fpr UPM*/}
            <Route path="/UPM" element={<UPM />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoute;
