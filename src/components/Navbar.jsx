import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || "/"
  );

  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  return (
    <nav className="navbar">
      <ul>
        <li id={activeLink === "/" ? "active" : ""}>
          <Link to="/" onClick={() => setActiveLink("/")}>
            Home
          </Link>
        </li>
        <li id={activeLink.split("/")[1] === "about" ? "active" : ""}>
          <a href="#">About</a>
          <ul className="dropdown-menu">
            <li id={activeLink.split("/")[2] === "founders" ? "active" : ""}>
              <Link
                to="/about/founders"
                onClick={() => setActiveLink("/about/founders")}
              >
                Founders
              </Link>
            </li>
            <li id={activeLink.split("/")[2] === "doners" ? "active" : ""}>
              <Link
                to="/about/doners"
                onClick={() => setActiveLink("/about/doners")}
              >
                Doners
              </Link>
            </li>
            <li id={activeLink.split("/")[2] === "history" ? "active" : ""}>
              <Link
                to="/about/history"
                onClick={() => setActiveLink("/about/history")}
              >
                History
              </Link>
            </li>
            <li id={activeLink.split("/")[2] === "details" ? "active" : ""}>
              <Link
                to="/about/details"
                onClick={() => setActiveLink("/about/details")}
              >
                Details
              </Link>
            </li>
            <li
              id={
                activeLink.split("/")[2] === "our-ex-principals" ? "active" : ""
              }
            >
              <Link
                to="/about/our-ex-principals"
                onClick={() => setActiveLink("/about/our-ex-principals")}
              >
                Our Ex Principals
              </Link>
            </li>
            <li
              id={
                activeLink.split("/")[2] === "campus-&-building" ? "active" : ""
              }
            >
              <Link
                to="/about/campus-&-building"
                onClick={() => setActiveLink("/about/campus-&-building")}
              >
                Campus & Building
              </Link>
            </li>
            <li
              id={
                activeLink.split("/")[2] === "prizes-from-government"
                  ? "active"
                  : ""
              }
            >
              <Link
                to="/about/prizes-from-government"
                onClick={() => setActiveLink("/about/prizes-from-government")}
              >
                Prizes from Government
              </Link>
            </li>
            <li id={activeLink.split("/")[2] === "our-vision" ? "active" : ""}>
              <Link
                to="/about/our-vision"
                onClick={() => setActiveLink("/about/our-vision")}
              >
                Our Vision
              </Link>
            </li>
            <li
              id={activeLink.split("/")[2] === "annual-sports" ? "active" : ""}
            >
              <Link
                to="/about/annual-sports"
                onClick={() => setActiveLink("/about/annual-sports")}
              >
                Annual Sports
              </Link>
            </li>
            <li
              id={
                activeLink.split("/")[2] === "annual-ceremonies" ? "active" : ""
              }
            >
              <Link
                to="/about/annual-ceremonies"
                onClick={() => setActiveLink("/about/annual-ceremonies")}
              >
                Annual Ceremonies
              </Link>
            </li>
          </ul>
        </li>
        <li id={activeLink.split("/")[1] === "information" ? "active" : ""}>
          <a href="#">Information</a>
          <ul className="dropdown-menu">
            <li id={activeLink.split("/")[2] === "teachers" ? "active" : ""}>
              <Link
                to="/information/teachers"
                onClick={() => setActiveLink("/information/teachers")}
              >
                Teachers
              </Link>
            </li>
            <li id={activeLink.split("/")[2] === "statistics" ? "active" : ""}>
              <Link
                to="/information/statistics"
                onClick={() => setActiveLink("/information/statistics")}
              >
                Statistics
              </Link>
            </li>
            <li
              id={activeLink.split("/")[2] === "school-timing" ? "active" : ""}
            >
              <Link
                to="/information/school-timing"
                onClick={() => setActiveLink("/information/school-timing")}
              >
                School Timing
              </Link>
            </li>
            <li
              id={activeLink.split("/")[2] === "class-routine" ? "active" : ""}
            >
              <Link
                to="/information/class-routine"
                onClick={() => setActiveLink("/information/class-routine")}
              >
                Class Routine
              </Link>
            </li>
            <li
              id={activeLink.split("/")[2] === "exam-schedule" ? "active" : ""}
            >
              <Link
                to="/information/exam-schedule"
                onClick={() => setActiveLink("/information/exam-schedule")}
              >
                Exam Schedule
              </Link>
            </li>
            <li
              id={
                activeLink.split("/")[2] ===
                "yearly-academic-calendar-and-holidays"
                  ? "active"
                  : ""
              }
            >
              <Link
                to="/information/yearly-academic-calendar-and-holidays"
                onClick={() =>
                  setActiveLink(
                    "/information/yearly-academic-calendar-and-holidays"
                  )
                }
              >
                Yearly Academic Calendar and Holidays
              </Link>
            </li>
          </ul>
        </li>
        <li id={activeLink.split("/")[1] === "result" ? "active" : ""}>
          <a href="#">Result</a>
          <ul className="dropdown-menu">
            <li
              id={activeLink.split("/")[2] === "school-result" ? "active" : ""}
            >
              <Link
                to="/result/school-result"
                onClick={() => setActiveLink("/result/school-result")}
              >
                School Result
              </Link>
            </li>
            <li
              id={activeLink.split("/")[2] === "board-result" ? "active" : ""}
            >
              <Link
                to="/result/board-result"
                onClick={() => setActiveLink("/result/board-result")}
              >
                Board Result
              </Link>
            </li>
            <li id={activeLink.split("/")[2] === "ssc-result" ? "active" : ""}>
              <Link
                to="/result/ssc-result"
                onClick={() => setActiveLink("/result/ssc-result")}
              >
                SSC Result
              </Link>
            </li>
          </ul>
        </li>
        <li id={activeLink.split("/")[1] === "admission" ? "active" : ""}>
          <a href="#">Admission</a>
          <ul className="dropdown-menu">
            <li
              id={
                activeLink.split("/")[2] === "how-to-take-admission"
                  ? "active"
                  : ""
              }
            >
              <Link
                to="/admission/how-to-take-admission"
                onClick={() =>
                  setActiveLink("/admission/how-to-take-admission")
                }
              >
                How to take Admission?
              </Link>
            </li>
            <li
              id={activeLink.split("/")[2] === "admission-exam" ? "active" : ""}
            >
              <Link
                to="/admission/admission-exam"
                onClick={() => setActiveLink("/admission/admission-exam")}
              >
                Admission Exam
              </Link>
            </li>
            <li
              id={
                activeLink.split("/")[2] === "admission-policy" ? "active" : ""
              }
            >
              <Link
                to="/admission/admission-policy"
                onClick={() => setActiveLink("/admission/admission-policy")}
              >
                Admission Policy
              </Link>
            </li>
            <li id={activeLink.split("/")[2] === "more" ? "active" : ""}>
              <Link
                to="/admission/more"
                onClick={() => setActiveLink("/admission/more")}
              >
                More...
              </Link>
            </li>
          </ul>
        </li>
        <li id={activeLink.split("/")[1] === "facilities" ? "active" : ""}>
          <a href="#">Facilities</a>
          <ul className="dropdown-menu">
            <li id={activeLink.split("/")[2] === "library" ? "active" : ""}>
              <Link
                to="/facilities/library"
                onClick={() => setActiveLink("/facilities/library")}
              >
                Library
              </Link>
            </li>
            <li id={activeLink.split("/")[2] === "playground" ? "active" : ""}>
              <Link
                to="/facilities/playground"
                onClick={() => setActiveLink("/facilities/playground")}
              >
                Playground
              </Link>
            </li>
            <li id={activeLink.split("/")[2] === "garden" ? "active" : ""}>
              <Link
                to="/facilities/garden"
                onClick={() => setActiveLink("/facilities/garden")}
              >
                Garden
              </Link>
            </li>
            <li id={activeLink.split("/")[2] === "pond" ? "active" : ""}>
              <Link
                to="/facilities/pond"
                onClick={() => setActiveLink("/facilities/pond")}
              >
                Pond
              </Link>
            </li>
            <li id={activeLink.split("/")[2] === "science-lab" ? "active" : ""}>
              <Link
                to="/facilities/science-lab"
                onClick={() => setActiveLink("/facilities/science-lab")}
              >
                Science Lab
              </Link>
            </li>
            <li id={activeLink.split("/")[2] === "computer" ? "active" : ""}>
              <Link
                to="/facilities/computer"
                onClick={() => setActiveLink("/facilities/computer")}
              >
                Computer
              </Link>
            </li>
            <li
              id={activeLink.split("/")[2] === "spoken-english" ? "active" : ""}
            >
              <Link
                to="/facilities/spoken-english"
                onClick={() => setActiveLink("/facilities/spoken-english")}
              >
                Spoken English
              </Link>
            </li>
            <li
              id={activeLink.split("/")[2] === "quran-teaching" ? "active" : ""}
            >
              <Link
                to="/facilities/quran-teaching"
                onClick={() => setActiveLink("/facilities/quran-teaching")}
              >
                Quran Teaching
              </Link>
            </li>
            <li
              id={activeLink.split("/")[2] === "prayer-house" ? "active" : ""}
            >
              <Link
                to="/facilities/prayer-house"
                onClick={() => setActiveLink("/facilities/prayer-house")}
              >
                Prayer House
              </Link>
            </li>
            <li
              id={
                activeLink.split("/")[2] === "co-curricular-activities"
                  ? "active"
                  : ""
              }
            >
              <Link
                to="/facilities/co-curricular-activities"
                onClick={() =>
                  setActiveLink("/facilities/co-curricular-activities")
                }
              >
                Co-curricular Activities
              </Link>
            </li>
          </ul>
        </li>
        <li id={activeLink.split("/")[1] === "teachers" ? "active" : ""}>
          <Link to="/teachers" onClick={() => setActiveLink("/teachers")}>
            Teachers
          </Link>
        </li>
        <li id={activeLink.split("/")[1] === "notices" ? "active" : ""}>
          <Link to="/notices" onClick={() => setActiveLink("/notices")}>
            Notices
          </Link>
        </li>
        <li id={activeLink.split("/")[1] === "contact-us" ? "active" : ""}>
          <Link to="/contact-us" onClick={() => setActiveLink("/contact-us")}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
