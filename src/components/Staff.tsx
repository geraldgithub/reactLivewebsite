import { motion } from "framer-motion";
import Logo from "../assets/images/logo1.png";
import GeraldImg from "../assets/images/Biad.png";
import JuvelynImg from "../assets/images/Juvy.png";
import LynImg from "../assets/images/lyn.png";

function Staff() {
  return (
    <div className="staff-section">
      <div className="container">
        <h2
          className="mb-5 py-2 text-white"
          style={{ borderBottom: "4px solid gold" }}
        >
          Library Staff
        </h2>
      </div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          viewport={{ once: true }}
          className="col-1"
        >
          <div className="profile bg-success">
            <img src={GeraldImg} alt="Gerald Biad"/>
          </div>
          <div className="description">
            <span>GERALD BIAD</span>
            <small style={{fontSize:15}}>Library IT Staff</small>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.4 }}
          viewport={{ once: true }}
          className="col-1"
        >
          <div className="profile bg-success">
            <img src={JuvelynImg} alt="Juvelyn Gaan" />
          </div>
          <div className="description">
            <span>JUVELYN V. GAAN</span>
            <small style={{fontSize:15}}>User/Educational Services In-Charge</small>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.8 }}
          viewport={{ once: true }}
          className="col-1"
        >
          <div className="profile bg-success">
            <img src={LynImg} alt="Prelyn Tomo" />
          </div>
          <div className="description">
            <span>PRELYN T. TIZON</span>
            <small style={{fontSize:15}}>Elib/AVR In-Charge</small>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Staff;
