import { motion } from "framer-motion";
import { useState } from "react";
import Date_time from "../../functions/date";

function Visual_room(){
    const[date, setDate]=useState('');
    setInterval(function(){
        setDate(Date_time())
    },1000)

    const avr_booking=()=>{
        window.open("https://forms.gle/df68KjBQnfxnkqqL9", "_blank", "width=800,height=800");
    }
    return(
        <>
        <motion.div className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        >
            <h4 style={{color:'green', fontWeight:700}} className="mt-5 ml-5">AUDIO-VISUAL ROOM</h4>
            <div className="row pl-5 pr-5">
                <div className="col-md-3">
                    <div className="card mb-5">
                        <div className="card-header p-1">
                            <span className="card-title ml-2">Space Booking</span>
                        </div>
                        <div className="card-body d-flex justify-content-center flex-column">
                            <small className="mb-2">
                                Click the button tool below to book a discussion rooms in the Library!
                            </small>
                            <a onClick={avr_booking} className="btn btn-info btn-sm" style={{fontSize:15}}>Book a discussion room</a>
                        </div>
                    </div>

                    <div className="card mb-5">
                        <div className="card-header p-1">
                            <span className="card-title ml-2">Today's Date and Time</span>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h6 id="load" className="text-center">
                                {date}
                            </h6>
                            <hr/>
                            <center>
                                <small className="text-primary" style={{display:'block'}}>The learning commons </small>
                                <span className="float-right text-dark">
                                    7:00 AM - 6:00 PM
                                </span>
                            </center>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card mb-5">
                        <div className="card-header">
                            <span className="card-title"><b>Guidelines and Policies</b></span>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <ul className="pl-2 text-muted">
                                <li style={{listStyleType:'circle'}}>
                                    The use of the Audio Visual Room must be in a first come first serve basis.
                                </li>
                                <li style={{listStyleType:'circle'}}>
                                    The user, i.e. students; teachers; department must schedule the utilization of the AVR
                                    five (5) days before the actual usage.
                                </li>
                                <li style={{listStyleType:'circle'}}>
                                    The user of the room shall be responsible for the immediate removal and "clean-up" of
                                    decoration,
                                    props, etc. after the even or the program.
                                </li>
                                <li style={{listStyleType:'circle'}}>
                                    The individual or department who is responsible for the event or program take charge
                                    of the damage, misuse, deterioration, vandalism, and the theft of any equipment or facilities
                                    and if anything
                                    happen or destroyed, they shall be required to pay, repair, replace or shoulder the cost of
                                    same;
                                    refusal to do so and valid investigation shall be subject to disciplinary action or prescribe in
                                    the College Code
                                </li>
                                <li style={{listStyleType:'circle'}}>
                                    The user must at all times be responsible to ensure that all exits must remain unobstracted and
                                    accessible to all.
                                </li>
                                <li style={{listStyleType:'circle'}}>
                                    The JHCSC AVR is a smoke free area.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    )
}

export default Visual_room;