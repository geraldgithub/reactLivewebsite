import AboutIndex from ".";
import { motion } from "framer-motion";
const ContactUs = () => {
  return (
    <motion.div
      className="container mt-5 mb-5"
      style={{ minHeight: "50vh", height: "100%" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <h4 className="text-success fw-bold">Contact Us</h4>
      <div className="row">
        <div className="col-md-8">
          <strong className="text-muted">J.H. CERILLES STATE COLLEGE</strong>
          <ul>
            <li>Mati, San Miguel, Zamboanga del Sur, 7029</li>
            <li>Tel. Nos: (632) 524-8835</li>
            <li>Email Address: library@jhcsc.edu.ph</li>
          </ul>
        </div>
        <div className="col-md-4">
          <AboutIndex />
        </div>
      </div>
    </motion.div>
  );
};
export default ContactUs;
