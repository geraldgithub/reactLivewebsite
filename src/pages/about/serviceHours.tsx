import AboutIndex from ".";
import { motion } from "framer-motion";
const ServiceHours = () => {
  return (
    <motion.div
      className="container mt-5 mb-5"
      style={{ minHeight: "50vh", height: "100%" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <h4 className="text-success fw-bold">Service Hours</h4>
      <div className="row">
        <div className="col-md-8">
          <strong className="text-muted">Library Hours Policy</strong>
          <p>
            The library is open 54 hours per week. Currently, operating hours
            are Monday-Friday, from 7:00 AM to 6:00 PM, no noon-break. The
            library is closed on Saturdays, Sundays, Holidays as well as all
            holidays' days observed by the Province of Zamboanga del Sur.
          </p>
        </div>
        <div className="col-md-4">
          <AboutIndex />
        </div>
      </div>
    </motion.div>
  );
};
export default ServiceHours;
