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
import PaymentStatus from "./Components/User/pricing/PaymentStatus";
import AssociatedCompanyList from "./Components/User/associatedCompany/AssociatedCompanyList";
import FaqPage from "./Components/User/faq/FaqPage";
import BlogsPage from "./Components/User/blogs/BlogsPage";
import LearningPage from "./Components/User/Learn/LearningPage";
import InternshipPage from "./Components/User/Internship/InternshipPage";
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
import AppliedJobsPage from "./Components/jobs/applied/AppliedJobsPage";
import MySavedJobs from "./Components/jobs/saved/MySavedJobs";
import JobApplicationForm from "./Components/jobs/manualapplyjob/ApplyJobManually";
import ChatPage from "./Components/User/chat/ChatPage";
import TermsAndConditions from "./Components/policy/TermsAndConditions";
import PrivacyPolicyContent from "./Components/policy/PrivacyPolicy";
import ShareProfile from "./Components/User/shareProfile/ShareProfile";
import TransactionHistory from "./Components/User/pricing/TransactionHistory";
import PaymentFailure from "./Components/User/pricing/PaymentFailure";

import UserDashboardLayout from "./Components/User/Layout/UserDashboardLayout";
import UserDashboard from "./Components/User/Dashboard/UserDashboard";
import ResumeMatcher from "./Components/User/ResumeMatcher/ResumeMatcher";
import SkillBadges from "./Components/User/SkillBadges/SkillBadges";
import UserDocuments from "./Components/User/Documents/UserDocuments";
import UserSettings from "./Components/User/Settings/UserSettings";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout route */}
        <Route
          path="/company-share-profile/:candidateId"
          element={<ShareProfile />}
        />
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
          <Route element={<UserDashboardLayout />}>
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/edit-myprofile" element={<MyProfile />} />
            <Route path="/my-applied-jobs" element={<AppliedJobsPage />} />
            <Route path="/my-saved-jobs" element={<MySavedJobs />} />
            <Route path="/my-chats" element={<ChatPage />} />
            <Route
              path="/transaction-history"
              element={<TransactionHistory />}
            />
            <Route path="/resume-matcher" element={<ResumeMatcher />} />
            <Route path="/skill-badges" element={<SkillBadges />} />
            <Route path="/documents" element={<UserDocuments />} />
            <Route path="/settings" element={<UserSettings />} />
          </Route>
          <Route path="/post-jobs" element={<PostJob />} />
          <Route path="/saved-jobs" element={<SavedJobs />} />
          <Route path="/jobs-list-view" element={<JobsListView />} />
          <Route path="/jobs-grid-view" element={<JobsGridView />} />
          <Route path="/jobs-details-page" element={<JobDetailsPage />} />
          <Route path="/price-page" element={<PricingPage />} />
          <Route path="/payment/success" element={<PaymentStatus />} />
          <Route path="/payment/failure" element={<PaymentFailure />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyContent />} />
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
          <Route path="/learn" element={<LearningPage />} />
          <Route path="/internship" element={<InternshipPage />} />
          <Route path="/blogs-masonry-pages" element={<BlogsMasonry />} />
          <Route path="/page-not-found" element={<PageNotFoundPage />} />
          <Route path="/manage-jobs-page" element={<ManageJobsPage />} />
          <Route path="/saved-candidate-page" element={<SavedCandidate />} />
          <Route path="/job-list" element={<AllJobList />} />
          <Route path="/job-preview/:id" element={<JobDetails />} />
          <Route
            path="/candidate-details-page"
            element={<CandidateDetailsPage />}
          />
          <Route path="/search-candidate-page" element={<SearchCandidate />} />
          <Route path="/post-new-job" element={<AddNewJobs />} />
          <Route
            path="/apply-manually/:jobId"
            element={<JobApplicationForm />}
          />
        </Route>
        <Route
          path="/terms-and-conditions-page"
          element={<TermsAndConditions />}
        />
        <Route path="/privacy-policy-page" element={<PrivacyPolicyContent />} />

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
