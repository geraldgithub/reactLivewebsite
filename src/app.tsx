/* Import Libraries */
import ReactDOM from "react-dom/client";

/* Import Css */
import "./assets/css/header.css";
import "./assets/css/section.css";
import "./assets/css/footer.css";

/* Import Components */
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div>
    <Header />
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    <Footer />
  </div>
);
