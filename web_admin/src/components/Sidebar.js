import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faDashboard, faGear } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ data, getCat, setPage }) {
  const handleClick = (page, id, name) => {
    setPage(page)
    getCat(id, name)
  };
  return (
    <div className="p-4">
      <ul className="list-unstyled components mb-5 menu-elements">
        <li className="nav-item">
          <a href="/dashboard" className="nav-link">
            <FontAwesomeIcon icon={faDashboard} className="me-2" />
            Dashboard
          </a>
        </li>

        <li className="nav-item">
          <a href="#pageSubmenu" data-bs-toggle="collapse" className="dropdown-toggle nav-link">
            <FontAwesomeIcon icon={faArchive} className="me-2" />
            Master Data
          </a>
          <ul className="collapse list-unstyled" id="pageSubmenu" href="#pageSubmenu">
            {data.map((val, index) => {
              return (
                <li className="nav-item" key={index}>
                  <span
                    role={"button"}
                    onClick={() => handleClick("Dashboard", val.id, val.name)}
                    className="nav-link text-capitalize"
                  >
                    {val.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </li>

        <li className="nav-item">
          <span role={"button"} className="nav-link text-capitalize" onClick={() => handleClick("Source", null, null)}>
            <FontAwesomeIcon icon={faGear} className="me-2" />
            Data Source
          </span>
        </li>
      </ul>
    </div>
  );
}
