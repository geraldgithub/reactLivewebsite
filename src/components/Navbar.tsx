import { useState, useRef } from "react";
import { Link, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import VisionMission from "../pages/about/VisionMission";
import BriefHistory from "../pages/about/briefHistory";
import ServiceHours from "../pages/about/serviceHours";
import AskLibrarian from "../pages/services/askLibrarian";
import ContactUs from "../pages/about/contactUs";
import Databases from "../pages/resources_collection/databases";
import Journal from "../pages/resources_collection/e-journal";
import Free_databases from "../pages/resources_collection/free_databases";
import Trial_databases from "../pages/resources_collection/trial_databases";
import Visual_room from "../pages/learning_spaces/audio-visual-room";
import Libraries from "./libraries";
import Referrals from "../pages/services/referrals";
import Visiting_user from "../pages/services/visitingUsers";
import BorrowingReturning from "../pages/services/borrowingReturning";
import Policies from "../pages/services/policies";

function Navbar() {
  const [top, setTop] = useState(false);
  const handleNavClick = () => {
    window.scrollTo(0, 510);
  };

  //scrollY reach 51+ place the navbar to the top
  window.onscroll = () => {
    const scrolledY = window.pageYOffset;
    if (scrolledY > 50) setTop(true);
    else setTop(false);
  };

  //when user click home set scroll to zero
  const returnHome = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
    <a onClick={returnHome} id="arrowUp" style={top?{display:'block'}:{display:'none'}}><i className="fa fa-arrow-up"></i></a>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          width: "100%",
          zIndex: 2000,
          transition: "0.2s",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand px-5" href="#header">
            JHCSC Library
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto px-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" onClick={returnHome}>
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      to="/vision-mission"
                      className="dropdown-item"
                      id="vis-mis"
                      onClick={handleNavClick}
                    >
                      Vision Mission
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/brief-history"
                      className="dropdown-item"
                      onClick={handleNavClick}
                    >
                      Brief History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-hours"
                      className="dropdown-item"
                      onClick={handleNavClick}
                    >
                      Service Hours
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-us"
                      className="dropdown-item"
                      onClick={handleNavClick}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/ask-librarian" onClick={handleNavClick} className="dropdown-item">
                      Ask the Librarian
                    </Link>
                  </li>
                  <li>
                    <Link to="/borrowing-returning" className="dropdown-item" onClick={handleNavClick}>
                      Borrowing & Returning
                    </Link>
                  </li>
                  <li>
                    <Link to="/referrals" className="dropdown-item" onClick={handleNavClick}>
                      Referrals
                    </Link>
                  </li>
                  <li>
                    <Link to="/visiting-users" className="dropdown-item" onClick={handleNavClick}>
                      Visiting Users
                    </Link>
                  </li>
                  <li>
                    <Link to="/policies" className="dropdown-item" onClick={handleNavClick}>
                      Library Policies
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources/Collections
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/databases" className="dropdown-item" onClick={handleNavClick}>
                      Databases
                    </Link>
                  </li>
                  <li>
                    <Link to="/e-journal" className="dropdown-item" onClick={handleNavClick}>
                    E-Journal Titles
                    </Link>
                  </li>
                  <li>
                    <Link to="/trial_databases" className="dropdown-item" onClick={handleNavClick}>
                      Trial Databases
                    </Link>
                  </li>
                  <li>
                    <Link to="/free_databases" className="dropdown-item" onClick={handleNavClick}>
                      Free Databases
                    </Link>
                  </li>
                  <li>
                    <Link to="/special-collections" className="dropdown-item" onClick={handleNavClick}>
                      Special Collections
                    </Link>
                  </li>
                  <li>
                    <Link to="/faculty-publications" className="dropdown-item" onClick={handleNavClick}>
                      Faculty Publications
                    </Link>
                  </li>
                  <li>
                    <Link to="/new-acquisitions" className="dropdown-item" onClick={handleNavClick}>
                      New Acquisitions
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Learning Spaces
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/audio-visual-room" className="dropdown-item" onClick={handleNavClick}>
                      Reserve Audio-Visual Room
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/satellite-libraries" aria-current="page" className="nav-link" onClick={handleNavClick}>
                    Satellite Libraries
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Routers */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/brief-history" element={<BriefHistory />} />
        <Route path="/service-hours" element={<ServiceHours />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/ask-librarian" element={<AskLibrarian />} />
        <Route path="/borrowing-returning" element={<BorrowingReturning />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/visiting-users" element={<Visiting_user />} />
        <Route path="/databases" element={<Databases />} />
        <Route path="/e-journal" element={<Journal />} />
        <Route path="/free_databases" element={<Free_databases />} />
        <Route path="/trial_databases" element={<Trial_databases />} />
        <Route path="/special-collections" element={<Trial_databases />} />
        <Route path="/faculty-publications" element={<Trial_databases />} />
        <Route path="/new-aquisitions" element={<Trial_databases />} />
        <Route path="/audio-visual-room" element={<Visual_room />}/>
        <Route path="/satellite-libraries" element={<Libraries />}/>
        <Route path="/policies" element={<Policies />}/>
      </Routes>
    </>
  );
}

export default Navbar;
