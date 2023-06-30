import { motion } from "framer-motion";
import ServicesIndex from ".";
function Referrals(){
    return (
        <>
        <motion.div className="container" style={{minHeight: "80vh", height: "100%"}}
        initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        >
            <h4 className="text-success mt-5 fw-bold">Referral</h4>
            <div className="row mt-4">
                <div className="col-md-8">
                    <ol>
                        <li>Referral letter will be provided to student/s who wishes to do research to other libraries subject to the rules and regulations of the school the wish to visit.</li>
                        <li>All students who requested for referral letter must sign-in the record book.</li>
                        <li>Referral letter will be issued upon presentation of the Library ID.</li>
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
export default Referrals;