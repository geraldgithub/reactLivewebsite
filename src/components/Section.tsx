import { useState } from "react";
import IMG1 from "../assets/images/img1.png";
import IMG2 from "../assets/images/img3.png";
import IMG3 from "../assets/images/img4.png";
import IMG4 from "../assets/images/img5.jpg";
import IMG5 from "../assets/images/img6.png";
import IMG6 from "../assets/images/img6.png";
import IMG7 from "../assets/images/img8.png";
import Date_time from "../functions/date";

function Section() {
  const[date, setDate]=useState('');
    setInterval(function(){
        setDate(Date_time())
    },1000)

    const chatBot=()=>{
      window.open("http://jhcsclibrary.42web.io/", "_blank", "width=450,height=500");
    }

  return (
    <section className="container mb-5">
      <div className="row">
        <div className="col-md-8">
          <div
            id="carouselExampleControls"
            className="carousel slide slideShow"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={IMG7} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={IMG6} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={IMG1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={IMG2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={IMG3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={IMG4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={IMG5} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div
            className="card"
            style={{ maxWidth: "700px", width: "100%", margin: "1rem 0" }}
          >
            <div className="card-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.763101608243!2d123.28986510967293!3d7.708550708228737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256a7c534e55169%3A0xc912169190408699!2sJ.H.%20Cerilles%20State%20College%20-%20Main%20Campus!5e0!3m2!1sen!2sph!4v1687486366133!5m2!1sen!2sph" 
              width="100%;" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row px-2">
            <div
              className="col-md-12 mb-5"
              style={{
                border: "1px solid green",
                borderStyle: "dashed",
                padding: "1.5rem",
              }}
            >
              <div className="row">
                <div className="col-md-6">
                  <center className="mb-4">
                    <i
                      className="fa fa-clock-o text-success"
                      style={{
                        fontSize: "3rem",
                        display: "block",
                      }}
                    ></i>
                    <span style={{fontWeight:600}}>Library Hours</span>
                    <div className="mt-2 mb">
                      <span style={{ display: "block"}}>Monday - Friday</span>
                      <small>07:00 AM - 06:00 PM</small>
                    </div>
                  </center>
                </div>
                <div className="col-md-6">
                <center className="mb-4">
                    <i
                      className="fa fa-calendar-o text-success"
                      style={{
                        fontSize: "3rem",
                        display: "block",
                      }}
                    ></i>
                    <span style={{fontWeight:600}}>Date Today</span>
                    <div className="mt-2 mb">
                      <small id="date" style={{display:'block'}} className="text-center">{date}</small>
                    </div>
                  </center>                       
                </div>
                <div className="col-md-12">
                <center className="mb-4">
                    <i
                      className="fa fa-commenting-o text-success mb-2"
                      style={{
                        fontSize: "3rem",
                        display: "block",
                      }}
                    ></i>
                    <span className="mb-2" style={{fontWeight:600, display:'block'}}>Ask The Librarian</span>
                    <button onClick={chatBot} className="btn btn-success btn-sm" style={{width:'100%'}}><i className="fa fa-commenting-o"></i> Ask Now</button>
                  </center>
                </div>
              </div>
            </div>
            <div
              className="col-md-12"
              style={{ border: "1px solid green", borderStyle: "dashed" }}
            >
              <ul
                style={{
                  padding: "1.5rem 3.5rem",
                }}
              >
                <li>
                  <i className="fa fa-envelope-o"></i>
                  <a href="mailto:jhcscmainlib2020@gmail.com"> Email</a>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <a href="/ask-librarian"> TextLibrarian</a>
                </li>
                <li>
                  <i className="fa fa-building-o"></i>
                  <a href="#jhcsc-libraries"> JHCSC Libraries</a>
                </li>
                <li>
                  <i className="fa fa-facebook-official"></i>
                  <a
                    href="https://www.facebook.com/profile.php?id=100064622084746"
                    target="_blank"
                  >
                    Facebook Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
