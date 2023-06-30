import { Link } from "react-router-dom";

const AboutIndex = (props: any) => {
  const mystyle = {
    maxWidth: "500px",
    width: "100%",
    height: "100%",
  };
  console.log(props.onScrollTrue);
  return (
    <div className="navbar-container px-2" style={mystyle}>
      <div style={{ borderLeft: "4px solid green", padding: "10px 10px" }}>
        <strong className="text-success">ABOUT THE LIBRARY</strong>
        <nav className="navbar">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/vision-mission">
                  Vision Mission
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/brief-history">
                  Brief History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service-hours">
                  Service Hours
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default AboutIndex;
