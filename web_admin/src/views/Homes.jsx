/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// import logo from "./logo.svg";
// import { Link } from "react-router-dom";
import "../App.css";
import Particle from "../components/Particle";
function Homes() {
  return (
    <div className="home-style">
      <div className="home-top d-flex">
        <Particle />
        <div className="container">
          <div className="row h-100">
            <div className="col-md-8 text-white d-flex justify-content-center align-items-center">
              <div className="container">
                <h1>Mercy (Medan Smart City) Mobile</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center h-100 pt-5 pb-5">
              <img
                alt="Get it on Google Play"
                src={require("../assets/images/cellphone.png")}
                style={{ height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-bottom">
        <div className="container container-md h-100">
          <div className="row row-md h-100">
            <div className="col-md d-flex align-items-center justify-content-center">
              <a
                className="w-50"
                href="https://play.google.com/store/apps/details?id=com.mercypedia&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              >
                <img
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  className="w-100"
                />
              </a>
            </div>

            <div className="col-md d-flex justify-content-center align-items-center">
              <div className="container d-flex justify-content-center align-items-center">
                <ul className="ul-unstyled">
                  <li className="d-flex mb-2 align-items-center">
                    <img
                      alt="Get it on Google Play"
                      src={require("../assets/images/facebook.png")}
                      style={{ width: "3vh", height: "3vh" }}
                    />
                    <a href="#" className="text-decoration-none ms-2 text-dark">
                      @diskominfo_medan
                    </a>
                  </li>
                  <li className="d-flex mb-2 align-items-center">
                    <img
                      alt="Get it on Google Play"
                      src={require("../assets/images/instagram.png")}
                      style={{ width: "3vh", height: "3vh" }}
                    />
                    <a href="#" className="text-decoration-none ms-2 text-dark">
                      @diskominfo_medan
                    </a>
                  </li>
                  <li className="d-flex mb-2 align-items-center">
                    <img
                      alt="Get it on Google Play"
                      src={require("../assets/images/twitter.png")}
                      style={{ width: "3vh", height: "3vh" }}
                    />
                    <a href="#" className="text-decoration-none ms-2 text-dark">
                      @diskominfo_medan
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md d-flex justify-content-center align-items-center">
              <div className="container d-flex justify-content-center align-items-center">
                <ul className="ul-unstyled">
                  <li>Jl. Rumah Potong Hewan No.29, Kota Medan, Sumatera Utara, Indonesia - 20241</li>
                  <li>diskominfo@gmail.com</li>
                  <li>+62852********</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homes;
