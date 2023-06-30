import ServicesIndex from ".";
import "../../assets/css/icon.css";
import { motion } from "framer-motion";
const AskLibrarian = () => {
  return (
    <motion.div
      className="container mt-5 mb-5"
      style={{ minHeight: "80vh", height: "100%" }}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <h4 className="text-success fw-bold">Ask The Librarian</h4>
      <div className="row">
        <div className="col-md-8 mb-4">
          <p>
            Through chat, email, facebook and short messaging system (SMS), the
            Librarian gives precise and prompt responses to reference queries.
          </p>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="px-5 py-4"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <i className="fa fa-envelope"></i>
                  Email
                </th>
                <td>
                  You can message the librarian through email. Excluding Sundays
                  and holidays, you should anticipate a response within 24
                  hours. Just click this link{" "}
                  <a href="mailto:library@jhcsc.edu.ph">library@jhcsc.edu.ph</a>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-5 py-3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <i className="fa fa-mobile"></i> SMS
                </th>
                <td>+639076771755</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-5 py-4"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <i className="fa fa-wechat"></i>
                  Messenger
                </th>
                <td>
                  Send the librarian a message using messenger. On the left side
                  of the page, simply click the messenger icon. Or follow us on
                  facebook. <a href="">JHCSC Library Facebook Page</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <ServicesIndex />
        </div>
      </div>
    </motion.div>
  );
};
export default AskLibrarian;
