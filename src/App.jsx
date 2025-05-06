import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./page-styles/About.css";
import "./page-styles/Error.css";
import "./page-styles/Information.css";
// import Loading from "./components/Loading";
// import ImageSection from "./components/ImageSection";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutCampus from "./pages/About-Campus";
import NotMadePage from "./pages/NotMadePage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import InformationTeachers from "./pages/Information-Teachers";
import TeacherPage from "./pages/TeacherPage";
import InformationSchoolTiming from "./pages/Information-SchoolTiming";
import InformationClassRoutine from "./pages/Information-ClassRoutine";
import BottomUpgoingIcon from "./components/BottomUpgoingIcon";

function App() {
  return (
    <Router>
      {/* <Loading /> */}
      <Header />
      <BottomUpgoingIcon />
      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          {/* About */}
          <Route path="/about/founders" element={<NotMadePage />} />
          <Route path="/about/doners" element={<NotMadePage />} />
          <Route path="/about/history" element={<NotMadePage />} />
          <Route path="/about/details" element={<NotMadePage />} />
          <Route path="/about/our-ex-principals" element={<NotMadePage />} />
          <Route path="/about/campus" element={<AboutCampus />} />
          <Route
            path="/about/prizes-from-government"
            element={<NotMadePage />}
          />
          <Route path="/about/our-vision" element={<NotMadePage />} />
          <Route path="/about/annual-sports" element={<NotMadePage />} />
          <Route path="/about/annual-ceremonies" element={<NotMadePage />} />
          {/* Information */}
          <Route
            path="/information/teachers"
            element={<InformationTeachers />}
          />
          <Route
            path="/information/teachers/profile-info/:teacherID"
            element={<TeacherPage />}
          />
          <Route path="/information/statistics" element={<NotMadePage />} />
          <Route
            path="/information/school-timing"
            element={<InformationSchoolTiming />}
          />
          <Route
            path="/information/class-routine"
            element={<InformationClassRoutine />}
          />
          <Route path="/information/exam-schedule" element={<NotMadePage />} />
          <Route
            path="/information/yearly-academic-calendar-and-holidays"
            element={<NotMadePage />}
          />
          {/* Result */}
          <Route path="/result/school-result" element={<NotMadePage />} />
          <Route path="/result/board-result" element={<NotMadePage />} />
          <Route path="/result/ssc-result" element={<NotMadePage />} />
          {/* Admission */}
          <Route
            path="/admission/how-to-take-admission"
            element={<NotMadePage />}
          />
          <Route path="/admission/admission-exam" element={<NotMadePage />} />
          <Route path="/admission/admission-policy" element={<NotMadePage />} />
          <Route path="/admission/more" element={<NotMadePage />} />
          {/* Facilities */}
          <Route path="/facilities/library" element={<NotMadePage />} />
          <Route path="/facilities/playground" element={<NotMadePage />} />
          <Route path="/facilities/garden" element={<NotMadePage />} />
          <Route path="/facilities/pond" element={<NotMadePage />} />
          <Route path="/facilities/science-lab" element={<NotMadePage />} />
          <Route path="/facilities/computer" element={<NotMadePage />} />
          <Route path="/facilities/spoken-english" element={<NotMadePage />} />
          <Route path="/facilities/quran-teaching" element={<NotMadePage />} />
          <Route path="/facilities/prayer-house" element={<NotMadePage />} />
          <Route
            path="/facilities/co-curricular-activities"
            element={<NotMadePage />}
          />
          <Route path="/teachers" element={<NotMadePage />} />
          <Route path="/notices" element={<NotMadePage />} />
          <Route path="/contact-us" element={<NotMadePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {/* <ImageSection /> */}
      <Footer />
      <SpeedInsights />
    </Router>
  );
}

export default App;
