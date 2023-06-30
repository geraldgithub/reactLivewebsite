import { motion } from "framer-motion";
import Logo from "../assets/images/logo1.png"
import Welcome from "./welcome_message";

function Header() {
  const getStarted=()=>{
    window.scrollTo(0, 600)
  }
  const avr_booking=()=>{
    window.open("https://forms.gle/df68KjBQnfxnkqqL9", "_blank", "width=800,height=800");
  }
  return (
    <header className="header" id="header">
      {/* Welcome Message */}
      <div className="welcome">
       <Welcome/>
      </div>

      {/* Header content */}
      <div className="header-content">
        <div className="row">
          <div className="col-md-12">
            <div className="title mb-4">
              <div className="logo-content">
                <img src={Logo} alt="" style={{maxWidth:'120px', width:'100%'}} />
                <h1 style={{maxWidth:'760px', width:'100%'}}>JHCSC Library</h1>
                <p style={{color:'#fff', fontSize:24}}>Mati, San Miguel, Zamboanga del Sur</p>
                <div className="wrapper">
                  <div className="static-txt">
                    <span style={{ color: "gold", fontWeight: "800" }}>
                      JHCSC
                    </span>{" "}
                    Core Values:{" "}
                  </div>
                  <ul className="dynamic-txts">
                    <li>
                      <b>J</b>
                      <span>
                        <small style={{ color: "#fff" }}> - </small>Justice,
                        Peace and Unity Accountability
                      </span>
                    </li>
                    <li>
                      <b>H</b>
                      <span>
                        <small style={{ color: "#fff" }}> - </small>Hope,
                        Honesty and Humility
                      </span>
                    </li>
                    <li>
                      <b>C</b>
                      <span>
                        <small style={{ color: "#fff" }}> - </small>Credibility
                        and Integrity
                      </span>
                    </li>
                    <li>
                      <b>S</b>
                      <span>
                        <small style={{ color: "#fff" }}> - </small>Social
                        Responsibility and Interfaith Dialogue
                      </span>
                    </li>
                    <li>
                      <b>C</b>
                      <span>
                        <small style={{ color: "#fff" }}> - </small>
                        Collaboration and Shared Competence
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="buttons">
                <button onClick={getStarted}>Get Started</button>
                <button onClick={avr_booking}>AVR Booking</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}export default Header;
