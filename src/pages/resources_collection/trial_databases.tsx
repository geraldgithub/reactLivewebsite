import { motion } from "framer-motion";
import CollectionIndex from ".";

function Trial_databases(){
    return(
        <>
        <motion.div className="container py-5" style={{height:'80vh'}}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        >
        <div className="row">
            <div className="col-md-8">
            <h4 style={{color:'green', fontWeight:700}}>Databases</h4>
            <div className="row">
                <div className="col-md-6">
                    <h5 className="text-muted">Gale Ref Complete</h5>
                    <small className="text-muted">
                        Gale offers a variety of resources for education, lifelong learning, and academic research. Whether you are looking for peer-reviewed articles; full-text magazines, newspapers, and eBooks; primary source documents; and videos or podcasts, Gale puts the right vetted content and tools at your fingertips!
                    </small>
                    <br/>
                    <a target="_blank" href="https://link.gale.com/apps/GDCS?u=phjhcsc&fbclid=IwAR241DTz0ECkJLGthyYNjAgtmGxZfhp66UH2MpB19O_nGzHdyi2_m0Z98tY" className="mt-2">https://link.gale.com/apps/</a>
                </div>
                <div className="col-md-6 mt-4">
                    <h5 className="text-muted">Phil E-Journal</h5>
                    <small className="text-muted">
                    The Philippine E-Journals is an expanding collection of academic journals that are made accessible globally through a single Web-based platform. It is hosted by C&E Publishing, Inc., a premier educational publisher in the Philippines and a leader in the distribution of integrated information-based solutions.
                    </small>
                    <br/>
                    <a target="_blank" href="https://ejournals.ph/" className="mt-2">https://ejournals.ph/</a>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="text-muted">ProQuest</h5>
                        <small className="text-muted">
                        Empower researchers to take on today’s global challenges.
                        </small>
                        <br/>
                        <a target="_blank" href="https://www.proquest.com/" className="mt-2">https://www.proquest.com/</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <CollectionIndex />
            </div>
        </div>
        </motion.div>
        </>
    )
}

export default Trial_databases;