import { motion } from "framer-motion";
// canuto images
import Canutolibrary from "../assets/images/canuto-library/canuto.png";
import Pagadianlibrary from "../assets/images/pagadian-campus/pagadian.png";
import Dumingaglibrary from "../assets/images/dumingag-campus/dumingag.png";
import Mainlibrary from "../assets/images/main-campus/img1.png";
import librarianIcon from "../assets/images/librarian.png";

function Libraries() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 1.5 }}
      viewport={{ once: true }}
      className="libraries"
      id="jhcsc-libraries"
    >
      <div className="overlay">
        <div style={{ display: "grid", placeItems: "center" }}>
          <h2
            className="mb-5 text-center py-2 text-dark"
            style={{ borderBottom: "4px solid gold" }}
          >
            JHCSC Libraries
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="row">
                <div className="col-md-3 py-4" style={{backgroundColor:'#f1f1f1'}}>
                  <img src={Mainlibrary} style={{ width: "100%" }} alt="" />
                </div>
                <div className="col-md-3 mb-4">
                  <strong>Main Library</strong>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>
                          <small>
                            <img
                              src={librarianIcon}
                              style={{ width: "2rem" }}
                              alt=""
                            />
                          </small>
                        </td>
                        <td>
                          <small>Mrs. Rudilyn Dayanan, MLIS</small>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-envelope"></i>
                        </td>
                        <td>
                          <a href="mailto:jhcscmainlib2020@gmail.com">
                            <small>jhcscmainlib2020@gmail.com</small>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-facebook"></i>
                        </td>
                        <td>
                          <small>
                            <a
                              href="https://www.facebook.com/profile.php?id=100064622084746"
                              target="_blank"
                            >
                              Facebook Page
                            </a>
                          </small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-3 mb-4 py-4" style={{backgroundColor:'#f1f1f1'}}>
                  <img src={Dumingaglibrary} style={{ width: "100%" }} alt="" />
                </div>
                <div className="col-md-3">
                  <strong>Dumingag Library</strong>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>
                          <small>
                            <img
                              src={librarianIcon}
                              style={{ width: "2rem" }}
                              alt=""
                            />
                          </small>
                        </td>
                        <td>
                          <small>Mrs. Erma S. Ambalong, MLIS</small>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-envelope"></i>
                        </td>
                        <td>
                          <a href="mailto:library.dumingag@jhcsc.edu.ph">
                            <small>library.dumingag@jhcsc.edu.ph</small>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-facebook"></i>
                        </td>
                        <td>
                          <small>
                            <a
                              href="https://www.facebook.com/profile.php?id=100071273140386"
                              target="_blank"
                            >
                              Facebook Page
                            </a>
                          </small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 mb-4 py-4" style={{backgroundColor:'#f1f1f1'}}>
                  <img src={Pagadianlibrary} style={{ width: "100%" }} alt="" />
                </div>
                <div className="col-md-3 mb-4">
                  <strong>Pagadian Library</strong>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>
                          <small>
                            <img
                              src={librarianIcon}
                              style={{ width: "2rem" }}
                              alt=""
                            />
                          </small>
                        </td>
                        <td>
                          <small>Mrs. Shienalie S. Lubon</small>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-envelope"></i>
                        </td>
                        <td>
                          <a href="mailto:jhcscpagadianlibrary@gmail.com">
                            <small>jhcscpagadianlibrary@gmail.com</small>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-facebook"></i>
                        </td>
                        <td>
                          <small>
                            <a
                              href="https://www.facebook.com/jhcscpagadiancollegelibrary"
                              target="_blank"
                            >
                              Facebook Page
                            </a>
                          </small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-3 mb-4 py-4" style={{backgroundColor:'#f1f1f1'}}>
                  <img src={Canutolibrary} style={{ width: "100%" }} alt="" />
                </div>
                <div className="col-md-3">
                  <h5>Canuto MS Enerio Library</h5>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>
                          <small>
                            <img
                              src={librarianIcon}
                              style={{ width: "2rem" }}
                              alt=""
                            />
                          </small>
                        </td>
                        <td>
                          <small>Mrs. Jocelyn Ungang</small>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-envelope"></i>
                        </td>
                        <td>
                          <a href="mailto:jhcsc.lakewoodlibrary@gmail.com">
                            <small>jhcsc.lakewoodlibrary@gmail.com</small>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <i className="fa fa-facebook"></i>
                        </td>
                        <td>
                          <small>
                            <a
                              href="https://www.facebook.com/profile.php?id=100072355733564"
                              target="_blank"
                            >
                              Facebook Page
                            </a>
                          </small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Libraries;
