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
import ForumLanding from "./components/Forum/ForumLanding";
import SearchThread from "./components/Forum/SearchThread";
import SearchThreadResults from "./components/Forum/SearchThreadResults";
import ForumPage from "./components/Forum/ForumPage";
import CreateForum from "./components/Forum/CreateForum";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/FAQ/Contact";
import UPM from "./components/UPM/UPM";
import Quizzes from "./components/Quizzes/Quizz";
import CoursesVideos from "./components/CcoursesPage/CoursesVideos";
import Avatar from "./components/Section Avatar/Avatar";
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
            <Route
              path="/confirmDonation"
              element={<DonationsConfirmation />}
            />
            {/* route for courses */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/coursesvideos" element={<CoursesVideos />} />
            {/* route for student forum */}
            <Route path="/Forum_landing" element={<ForumLanding />} />
            <Route path="/Search_thread" element={<SearchThread />} />
            <Route
              path="/SearchThread_results"
              element={<SearchThreadResults />}
            />
            <Route path="/Forum_page" element={<ForumPage />} />
            <Route path="/Create_forum" element={<CreateForum />} />
            {/* route for quizzes */}
            <Route path="/Quizzes" element={<Quizzes />} />
            {/* route for FAQ */}
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Contact" element={<Contact />} />
            {/*Route fpr UPM*/}
            <Route path="/Ranking" element={<Avatar />} />
            {/*Route fpr UPM*/}
            <Route path="/UPM" element={<UPM />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoute;
