/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// import logo from "./logo.svg";
// import { Link } from "react-router-dom";
import "../App.css";
import Particle from "../components/Particle";
function Home() {
  return (
    <div className="home-container d-block">
      <div className="home-top">
        <Particle />
        <div className="container">
          <div className="row">
            <div className="col-md d-flex justify-content-center align-items-center">
              <div className="container text-white">
                <h1>Mercy (Medan Smart City) Mobile</h1>
                <p>
                  Mercy (Medan Smart City) Mobile merupakan sebuah aplikasi yang di dalamnya menampilkan struktur bentuk visualisasi data
                  berupa gambar karikatur yang tiap icon lokasinya memiliki sebuah data yang akan di sajikan di dalamnya
                  berdasarkan kategori dan tampilan yang di klik oleh penggunanya. Data yang disajikan aplikasi ini
                  merupakan data yang ada dan dikelola oleh pemerintah kota medan, dapat yang ditampilkan pun beragam,
                  sehingga aplikasi ini akan memudahkan masyarakat ketika ingin mencari sebuah informasi yang
                  membutuhkan sebuah data lokasi nantinya.
                </p>
              </div>
            </div>
            <div className="col-md d-flex justify-content-center align-items-center">
              <div className="container text-center p-5">
                <img alt="Get it on Google Play" src={require("../assets/images/cellphone.png")} className="w-50" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-bottom mt-1">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4 d-flex justify-content-center align-items-center text-center">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                <a href="https://play.google.com/store/apps/details?id=com.mercypedia&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  className="w-100"
                />
              </a>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img
                  alt="Get it on Google Play"
                  src={require("../assets/images/qrcode.png")}
                  className="w-50"
                />
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <ul className="ul-unstyled p-0 m-0">
                <li className="d-flex mb-2 align-items-center">
                  <img
                    alt="Get it on Google Play"
                    src={require("../assets/images/facebook.png")}
                    style={{ width: "2vh", height: "2vh" }}
                  />
                  <a
                    href="https://www.facebook.com/PemkoMedan"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none ms-2 text-dark"
                  >
                    @PemkoMedan
                  </a>
                </li>
                <li className="d-flex mb-2 align-items-center">
                  <img
                    alt="Get it on Google Play"
                    src={require("../assets/images/instagram.png")}
                    style={{ width: "2vh", height: "2vh" }}
                  />
                  <a
                    href="https://www.instagram.com/pemko.medan/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none ms-2 text-dark"
                  >
                    @pemko.medan
                  </a>
                </li>
                <li className="d-flex mb-2 align-items-center">
                  <img
                    alt="Get it on Google Play"
                    src={require("../assets/images/twitter.png")}
                    style={{ width: "2vh", height: "2vh" }}
                  />
                  <a
                    href="https://twitter.com/pemko_medan"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none ms-2 text-dark"
                  >
                    @pemko_medan
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <ul className="ul-unstyled p-0 m-0">
                <li>
                  Jl. Kapten Maulana Lubis No.2, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20231
                </li>
                <li>sekretariat@pemkomedan.go.id</li>
                <li>(061) 4511690</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
