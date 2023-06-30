import { useState } from "react";

function Welcome() {
  const [showModal, setTrue] = useState(false);

  setInterval(function(){
    setTrue(true)
  },10000);

  return (
    <>
      <div
        className="welcome-message"
        style={showModal == true ? { display: "none" } : { display: "block" }}
      >
        <div className="card">
          <div className="card-header">
            Welcome To The Official Website Of JHCSC Library
          </div>
          <div className="card-body">
            <p style={{fontSize:'14px'}}>
              Thank you for visiting the J.H. Cerilles State College Library.
              Our portal to our resources and services is the library's website.
              The library website seeks to give a quick overview of the
              resources and services offered by the library, as well as
              information on its opening and closing times and other essentials.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;

