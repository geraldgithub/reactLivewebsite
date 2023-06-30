import { motion } from "framer-motion";
import ServicesIndex from ".";

function borrowingReturning(){
    return (
        <>
        <motion.div className="container" style={{minHeight: "80vh", height: "100%"}}
        initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        >
            <h4 className="text-success mt-5 fw-bold">Borrowing & Returning</h4>
            <div className="row mb-4 mt-4">
                <div className="col-md-8">
                    <b>Borrowing of Books</b>
                    <ol>
                        <li>
                            Students must present their Library ID to the section in-charge before they ask for the books they wnated
                            to borrow.
                        </li>
                        <li>Books can only be borrowed for a limited time, unless not needed by other users.</li>
                        <li>
                            Students who want to photocopy the material are given 30 minutes only.
                        </li>
                        <li>An initial fine of P1.00 is charged per hour and P10 pesos each succeeding days including Saturdays, Sundays
                            and Holidays thereafter. Furthermore, a fine of P20.00 an hour is charged for taking a Reserved Book
                            out of the library without permission.
                        </li>
                    </ol>
                    <b>Loss of Books</b>
                    <ol>
                        <li>
                        Any library material lost must be replaced by the borrower.
                        </li>
                        <li>Any lost book should be replaced by the same or later 
                            edition of the same title of the original book and the corresponding fined fine must be paid.</li>
                        <li>
                            If replacement is not possible, a recent book with the same subject content may be 
                            substituted and the corresponding fine must be paid.
                        </li>
                        <li>
                            Any person with oustanding fees will not be permitted to check out library materials
                            until the amount owed is paid.
                        </li>
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
export default borrowingReturning;