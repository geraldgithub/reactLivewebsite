import AboutIndex from ".";
import { motion } from "framer-motion";
const VisionMission = () => {
  return (
    <motion.div
      className="container mt-5 mb-5"
      style={{ minHeight: "80vh", height: "100%" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      id="vis-mis"
    >
      <div className="row">
        <div className="col-md-8">
          <div className="col-md-12">
            <h4 className="text-success fw-bold">Vision</h4>
            <ul>
              <li>
                Leading public higher education institution serving the ASEAN
                community with quality, innovative and culture-sensitive
                programs.
              </li>
            </ul>
          </div>
          <div className="col-md-12">
            <h4 className="text-success fw-bold">Mission</h4>
            <ul>
              <li>
                Provides relevant and responsive programs in Agriculture,
                Education and other courses deemed necessary for the fulfillment
                of its vision.
              </li>
              <li>
                Undertakes applied research, extension and production services
                that yield workable and durable solutions to sector specific
                challenges, thus improving the socio-economic well-being of
                identified communities.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <AboutIndex />
        </div>
      </div>
    </motion.div>
  );
};
export default VisionMission;
