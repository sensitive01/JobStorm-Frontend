import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./Components/User/Home/Homepage";
import Contact from "./Components/User/Contact/Contact";
import MainLayout from "./Components/User/Layout/MainLayout";
import About from "./Components/User/About/About";
import MyProfile from "./Components/User/MyProfile/MyProfile";
import PostJob from "./Components/User/PostJob/PostJob";
import Footer from "./Components/User/Layout/Footer";
import UserLogin from "./Components/User/login/UserLogin";
import SignUpPage from "./Components/User/signup/SignUpPage";
import LogoutPage from "./Components/User/logout/LogoutPage";
import ResetPassword from "./Components/User/resetpassword/ResetPassword";
import SavedJobs from "./Components/User/savedjobs/SavedJobs";
import JobsListView from "./Components/User/jobslist/JobsListView";
import JobsGridView from "./Components/User/jobslist/JobsGridView";
import JobDetailsPage from "./Components/User/jobslist/JobDetailsPage";
import PricingPage from "./Components/User/pricing/PricingPage";
import AssociatedCompanyList from "./Components/User/associatedCompany/AssociatedCompanyList";
import FaqPage from "./Components/User/faq/FaqPage";
import BlogsPage from "./Components/User/blogs/BlogsPage";
import CompanyDetailsPage from "./Components/User/associatedCompany/CompanyDetailsPage";
import BlogsMasonry from "./Components/User/blogs/BlogsMasonry";
import PageNotFoundPage from "./Components/User/404/PageNotFoundPage";
import ManageJobsPage from "./Components/Employer/managejobs/ManageJobsPage";
import SavedCandidate from "./Components/Employer/bookmark/SavedCandidate";
import CandidateDetailsPage from "./Components/Employer/candidate/CandidateDetailsPage";
import SearchCandidate from "./Components/Employer/candidate/SearchCandidate";
import ChangePassword from "./Components/User/resetpassword/ChangePassword";
import EmployerSignUpPage from "./Components/Employer/register/EmployerSignUpPage";
import EmployerLogin from "./Components/Employer/login/EmployerLogin";
import EmployeerResetPassword from "./Components/User/resetpassword/ResetPassword";
import EmployeerChangePassword from "./Components/Employer/resetpassword/EmployeerChangePassword";
import MainLayoutAdmin from "./Components/admin/layout/MainLayoutAdmin";
import AddNewJobs from "./Components/jobs/AddNewJobs";
import AllJobList from "./Components/jobs/AllJobLIst";
import JobDetails from "./Components/jobs/JobDetails";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout route */}
        <Route path="/candidate-login" element={<UserLogin />} />
        <Route path="/candidate-signup" element={<SignUpPage />} />
        <Route path="/candidate-logout" element={<LogoutPage />} />
        <Route path="/candidate-reset-password" element={<ResetPassword />} />
        <Route path="/candidate-change-password" element={<ChangePassword />} />

        <Route path="/employer-login" element={<EmployerLogin />} />
        <Route path="/employer-signup" element={<EmployerSignUpPage />} />
        <Route path="/employer-logout" element={<LogoutPage />} />
        <Route
          path="/employer/reset-password"
          element={<EmployeerResetPassword />}
        />
        <Route
          path="/employer/change-password"
          element={<EmployeerChangePassword />}
        />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} /> {/* Default route */}
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/edit-myprofile" element={<MyProfile />} />
          <Route path="/post-jobs" element={<PostJob />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path="/jobs-list-view" element={<JobsListView />} />
          <Route path="/jobs-grid-view" element={<JobsGridView />} />
          <Route path="/jobs-details-page" element={<JobDetailsPage />} />
          <Route path="/price-page" element={<PricingPage />} />
          <Route
            path="/associated-company-list"
            element={<AssociatedCompanyList />}
          />
          <Route
            path="/associated-details-page"
            element={<CompanyDetailsPage />}
          />
          <Route path="/faq-pages" element={<FaqPage />} />
          <Route path="/blogs-pages" element={<BlogsPage />} />
          <Route path="/blogs-masonry-pages" element={<BlogsMasonry />} />
          <Route path="/page-not-found" element={<PageNotFoundPage />} />
          <Route path="/manage-jobs-page" element={<ManageJobsPage />} />
          <Route path="/saved-candidate-page" element={<SavedCandidate />} />
          <Route path="/job-list" element={<AllJobList />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route
            path="/candidate-details-page"
            element={<CandidateDetailsPage />}
          />
          <Route path="/search-candidate-page" element={<SearchCandidate />} />
          <Route path="/post-new-job" element={<AddNewJobs />} />
        </Route>

        {/* <Route path="/admin" element={<MainLayoutAdmin />}></Route> */}
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
