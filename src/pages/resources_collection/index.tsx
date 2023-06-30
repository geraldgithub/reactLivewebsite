import { Link } from "react-router-dom";

const CollectionIndex = (props: any) => {
  const mystyle = {
    maxWidth: "500px",
    width: "100%",
    height: "100%",
  };
  console.log(props.onScrollTrue);
  return (
    <div className="navbar-container px-2" style={mystyle}>
      <div style={{ borderLeft: "4px solid green", padding: "10px 10px" }}>
        <strong className="text-success">RESOURCES/COLLECTIONS</strong>
        <nav className="navbar">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/databases">
                  Databases
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/e-journal">
                    E-Journal Titles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trial_databases">
                    Trial Databases
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/free_databases">
                    Free Databases
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/special-collections">
                    Special Collections
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faculty-publications">
                    Faculty Publications
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/new-aquisitions">
                    New Aquisitions
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default CollectionIndex;
