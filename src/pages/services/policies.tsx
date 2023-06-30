import { motion } from "framer-motion";
import ServicesIndex from ".";
function Policies(){
    return (
        <>
        <motion.div className="container" style={{minHeight: "80vh", height: "100%"}}
        initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        >
            <h4 className="text-success mt-5 fw-bold">Library Policies</h4>
            <div className="row mt-4">
                <div className="col-md-8">
                    <b>Library Hours Policy</b>
                    <ul>
                        <li>
                            The library is open 54 hours per week. Currently, operating hours
                            are Monday-Friday, from 7:00 AM to 6:00 PM, no noon-break. The
                            library is closed on Saturdays, Sundays, Holidays as well as all
                            holidays’ days observed by the Province of Zamboanga del Sur
                        </li>
                    </ul>

                    <b>Rules in the Use of Library</b>
                    <ul>
                        <li>

                            The College Library seeks to provide a safe, friendly, and
                            welcoming environment for library patrons and staff. In order to
                            effectively accomplish this mission, it becomes necessary to
                            outline certain prohibited behaviors. A complete understanding of
                            what is and what is not permissible within the library benefits of
                            patrons, staff, and any visitors to the premises. 
                            Internet is generated outside the library, the library is not held
                            responsible for the information accuracy, authenticity, and recency.
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ServicesIndex />
                </div>
            </div>
        </motion.div>
        </>
    )
}
export default Policies;