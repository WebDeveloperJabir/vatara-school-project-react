import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const activeLink = useLocation().pathname;

  return (
    <nav className='navbar'>
      <input type='checkbox' id='menu-toggle' hidden />
      <label htmlFor='menu-toggle'>
        <img src='/images/hamburger-icon.svg' alt='Menu' />
      </label>
      <ul>
        {/* Home */}
        <li id={activeLink === "/" ? "active" : ""}>
          <Link to='/'>Home</Link>
        </li>

        {/* About Dropdown */}
        <li id={activeLink.split("/")[1] === "about" ? "active" : ""} className="dropdown-parents">
          <a href='#'>About</a>
          <ul className='dropdown-menu'>
            <li id={activeLink.split("/")[2] === "founders" ? "active" : ""}>
              <Link to='/about/founders'>Founders</Link>
            </li>
            <li id={activeLink.split("/")[2] === "doners" ? "active" : ""}>
              <Link to='/about/doners'>Doners</Link>
            </li>
            <li id={activeLink.split("/")[2] === "history" ? "active" : ""}>
              <Link to='/about/history'>History</Link>
            </li>
            <li id={activeLink.split("/")[2] === "details" ? "active" : ""}>
              <Link to='/about/details'>Details</Link>
            </li>
            <li id={activeLink.split("/")[2] === "our-ex-principals" ? "active" : ""}>
              <Link to='/about/our-ex-principals'>Our Ex Principals</Link>
            </li>
            <li id={activeLink.split("/")[2] === "campus-and-building" ? "active" : ""}>
              <Link to='/about/campus-and-building'>Campus & Building</Link>
            </li>
            <li id={activeLink.split("/")[2] === "prizes-from-government" ? "active" : ""}>
              <Link to='/about/prizes-from-government'>Prizes from Government</Link>
            </li>
            <li id={activeLink.split("/")[2] === "our-vision" ? "active" : ""}>
              <Link to='/about/our-vision'>Our Vision</Link>
            </li>
            <li id={activeLink.split("/")[2] === "annual-sports" ? "active" : ""}>
              <Link to='/about/annual-sports'>Annual Sports</Link>
            </li>
            <li id={activeLink.split("/")[2] === "annual-ceremonies" ? "active" : ""}>
              <Link to='/about/annual-ceremonies'>Annual Ceremonies</Link>
            </li>
          </ul>
        </li>

        {/* Information Dropdown */}
        <li id={activeLink.split("/")[1] === "information" ? "active" : ""} className="dropdown-parents">
          <a href='#'>Information</a>
          <ul className='dropdown-menu'>
            <li id={activeLink.split("/")[2] === "teachers" ? "active" : ""}>
              <Link to='/information/teachers'>Teachers</Link>
            </li>
            <li id={activeLink.split("/")[2] === "statistics" ? "active" : ""}>
              <Link to='/information/statistics'>Statistics</Link>
            </li>
            <li id={activeLink.split("/")[2] === "school-timing" ? "active" : ""}>
              <Link to='/information/school-timing'>School Timing</Link>
            </li>
            <li id={activeLink.split("/")[2] === "class-routine" ? "active" : ""}>
              <Link to='/information/class-routine'>Class Routine</Link>
            </li>
            <li id={activeLink.split("/")[2] === "exam-schedule" ? "active" : ""}>
              <Link to='/information/exam-schedule'>Exam Schedule</Link>
            </li>
            <li id={activeLink.split("/")[2] === "yearly-academic-calendar-and-holidays" ? "active" : ""}>
              <Link to='/information/yearly-academic-calendar-and-holidays'>Yearly Academic Calendar and Holidays</Link>
            </li>
          </ul>
        </li>

        {/* Result Dropdown */}
        <li id={activeLink.split("/")[1] === "result" ? "active" : ""} className="dropdown-parents">
          <a href='#'>Result</a>
          <ul className='dropdown-menu'>
            <li id={activeLink.split("/")[2] === "school-result" ? "active" : ""}>
              <Link to='/result/school-result'>School Result</Link>
            </li>
            <li id={activeLink.split("/")[2] === "board-result" ? "active" : ""}>
              <Link to='/result/board-result'>Board Result</Link>
            </li>
            <li id={activeLink.split("/")[2] === "ssc-result" ? "active" : ""}>
              <Link to='/result/ssc-result'>SSC Result</Link>
            </li>
          </ul>
        </li>

        {/* Admission Dropdown */}
        <li id={activeLink.split("/")[1] === "admission" ? "active" : ""} className="dropdown-parents">
          <a href='#'>Admission</a>
          <ul className='dropdown-menu'>
            <li id={activeLink.split("/")[2] === "how-to-take-admission" ? "active" : ""}>
              <Link to='/admission/how-to-take-admission'>How to take Admission?</Link>
            </li>
            <li id={activeLink.split("/")[2] === "admission-exam" ? "active" : ""}>
              <Link to='/admission/admission-exam'>Admission Exam</Link>
            </li>
            <li id={activeLink.split("/")[2] === "admission-policy" ? "active" : ""}>
              <Link to='/admission/admission-policy'>Admission Policy</Link>
            </li>
            <li id={activeLink.split("/")[2] === "more" ? "active" : ""}>
              <Link to='/admission/more'>More...</Link>
            </li>
          </ul>
        </li>

        {/* Facilities Dropdown */}
        <li id={activeLink.split("/")[1] === "facilities" ? "active" : ""} className="dropdown-parents">
          <a href='#'>Facilities</a>
          <ul className='dropdown-menu'>
            <li id={activeLink.split("/")[2] === "library" ? "active" : ""}>
              <Link to='/facilities/library'>Library</Link>
            </li>
            <li id={activeLink.split("/")[2] === "playground" ? "active" : ""}>
              <Link to='/facilities/playground'>Playground</Link>
            </li>
            <li id={activeLink.split("/")[2] === "garden" ? "active" : ""}>
              <Link to='/facilities/garden'>Garden</Link>
            </li>
            <li id={activeLink.split("/")[2] === "pond" ? "active" : ""}>
              <Link to='/facilities/pond'>Pond</Link>
            </li>
            <li id={activeLink.split("/")[2] === "science-lab" ? "active" : ""}>
              <Link to='/facilities/science-lab'>Science Lab</Link>
            </li>
            <li id={activeLink.split("/")[2] === "computer" ? "active" : ""}>
              <Link to='/facilities/computer'>Computer</Link>
            </li>
            <li id={activeLink.split("/")[2] === "spoken-english" ? "active" : ""}>
              <Link to='/facilities/spoken-english'>Spoken English</Link>
            </li>
            <li id={activeLink.split("/")[2] === "quran-teaching" ? "active" : ""}>
              <Link to='/facilities/quran-teaching'>Quran Teaching</Link>
            </li>
            <li id={activeLink.split("/")[2] === "prayer-house" ? "active" : ""}>
              <Link to='/facilities/prayer-house'>Prayer House</Link>
            </li>
            <li id={activeLink.split("/")[2] === "co-curricular-activities" ? "active" : ""}>
              <Link to='/facilities/co-curricular-activities'>Co-curricular Activities</Link>
            </li>
          </ul>
        </li>

        {/* Single Links */}
        <li id={activeLink.split("/")[1] === "notices" ? "active" : ""}>
          <Link to='/notices'>Notices</Link>
        </li>
        <li id={activeLink.split("/")[1] === "contact-us" ? "active" : ""}>
          <Link to='/contact-us'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
