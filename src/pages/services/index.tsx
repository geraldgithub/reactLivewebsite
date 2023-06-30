import { Link } from "react-router-dom";

const ServicesIndex = () => {
  const mystyle = {
    maxWidth: "500px",
    width: "100%",
    height: "100%",
  };
  return (
    <div className="navbar-container px-2" style={mystyle}>
      <div style={{ borderLeft: "4px solid green", padding: "10px 10px" }}>
        <strong className="text-success">LIBRARY SERVICES</strong>
        <nav className="navbar">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/ask-librarian">
                  Ask The Librarian
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/borrowing-returning">
                  Borrowing & Returning
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/referrals">
                  Referrals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/visiting-users">
                  Visiting Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/policies">
                  Library Policies
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default ServicesIndex;
