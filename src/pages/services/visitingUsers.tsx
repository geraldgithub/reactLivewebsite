import { motion } from "framer-motion";
import ServicesIndex from ".";
function Visiting_user(){
    return (
        <>
        <motion.div className="container" style={{minHeight: "80vh", height: "100%"}}
        initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        >
            <h4 className="text-success mt-5 fw-bold">Visiting User/s</h4>
            <div className="row mt-4">
                <div className="col-md-8">
                <b>Library Visitor/s</b>
                    <ol>
                        <li>All Library visitor/s must present any valid Identification Card to the library in charge.</li>
                        <li>The library visitor/s is required to log-in and out in the visitor's logbook.</li>
                        <li>Visitor/s is subject to the library's rules and regulations when using the library.</li>
                    </ol>
                </div>
                <div className="col-md-4">
                    <ServicesIndex />
                </div>
            </div>
        </motion.div>
        </>
    )
}
export default Visiting_user;
