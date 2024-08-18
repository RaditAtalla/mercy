import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignOut } from "@fortawesome/free-solid-svg-icons";
import DataTables from "../../components/DataTables";

export default function DashboardData({
  imgUri,
  dataName,
  handleSidebar,
  handleLogout,
  handleSearchdata,
  total,
  tableData,
}) {
  return (
    <div className="h-100">
      <div
        id="top-content"
        className="d-flex justify-content-center align-items-center h-50 w-100 bg-light position-relative"
      >
        <img
          src={imgUri + "/images/img/" + dataName + ".jpg"}
          alt=""
          className="position-absolute top-0 start-0 end-0 w-100 h-100 z-1 darken-img"
          style={{ filter: "brightness(0.35)" }}
        />
        <div className="position-absolute top-0 start-0 end-0">
          <nav className="navbar navbar-dark">
            <div className="container-fluid">
              <div role={"button"} onClick={handleSidebar} className="navbar-brand">
                <FontAwesomeIcon icon={faBars} />
              </div>
              <div onClick={handleLogout} role={"button"} className="navbar-brand">
                <FontAwesomeIcon icon={faSignOut} />
              </div>
            </div>
          </nav>
        </div>

        <div className="container text-white position-relative z-2">
          <h1 className="display-3 text-center mb-3 text-uppercase">{dataName}</h1>
          {dataName === "Dashboard" ? null : (
            <div className="container d-flex justify-content-center">
              <input
                id="top-content-search"
                className="form-control form-control-lg"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => handleSearchdata(e.target.value)}
              />
            </div>
          )}

          {dataName === "Dashboard" ? null : (
            <div className="row d-flex justify-content-center mt-4">
              <div className="col-md-2 p-1">
                <div className="container border text-center rounded-pill p-1 top-content-pill">
                  <span>Total : {total}</span>
                </div>
              </div>
              <div role={"button"} data-bs-toggle="modal" data-bs-target="#createForm" className="col-md-2 p-1">
                <div className="container border text-center rounded-pill p-1 top-content-pill">
                  <span>+ Tambah Data</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container mt-3">{dataName === "Dashboard" ? null : <DataTables tableData={tableData} />}</div>
    </div>
  );
}
