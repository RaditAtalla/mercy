import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faTrash } from "@fortawesome/free-solid-svg-icons";

import Sidebar from "../components/Sidebar";
import { getCategories, getCatId, me } from "../apis/Collections";
import CreateForm from "../components/CreateForm";
import UpdateForm from "../components/UpdateForm";
import DeleteForm from "../components/DeleteForm";

import axios from "../apis/Axios";

import { useNavigate } from "react-router-dom";
import DashbboardData from "./dashboard_assets/DashboardData";
import Setting from "./dashboard_assets/Setting";

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [total, settotal] = useState(0);
  const [dataName, setDataName] = useState("Dashboard");
  const [catId, setCatId] = useState(null);
  const [page, setPage] = useState("Dashboard");
  const [selectedData, setSelectedData] = useState({
    id: "",
    name: "",
    address: "",
    operation: "",
    phone: "",
    email: "",
    website: "",
    description: "",
    photo: "",
    gmap: "",
  });
  const imgUri = axios.defaults.baseURL;

  const tableClicked = (element) => {
    setSelectedData({
      dataname: dataName,
      categoryId: catId,
      id: element.id,
      name: element.name,
      address: element.address,
      operation: element.operation,
      phone: element.phone,
      email: element.email,
      website: element.website,
      description: element.website,
      photo: element.photo,
      gmap: element.gmap,
    });
  };

  const getCategoryData = async () => {
    const res = await getCategories();
    setCategory(res.data);
  };

  const getData = async (id, name) => {
    setCatId(id);
    let theData = [];
    const res = await getCatId(id);
    res.data.forEach((element) => {
      let d = {
        set: (
          <div className="d-flex">
            <div
              type="button"
              onClick={() => tableClicked(element)}
              data-bs-toggle="modal"
              data-bs-target="#updateForm"
              className="me-3"
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div
              type="button"
              onClick={() => tableClicked(element)}
              data-bs-toggle="modal"
              data-bs-target="#deleteForm"
            >
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        ),
        name: element.name,
        address: element.address,
        operation: element.operation,
        phone: element.phone,
        email: element.email,
        website: element.website,
        description: element.website,
        photo: element.photo,
        gmap: element.gmap,
      };

      theData.push(d);
    });

    settotal(res.total);
    setData(theData);
    setTableData(theData);
    setDataName(name);
  };

  const checkLogin = async () => {
    await me();
  };

  const logout = async () => {
    localStorage.clear();
    navigate("/login");
  };

  const searchData = (e) => {
    const result = data.filter((val) => val.name.toLowerCase().includes(e.toLowerCase()));
    setTableData(result);
  };

  useEffect(() => {
    checkLogin();
    getCategoryData();
  }, []);

  return (
    <div id="dashboard-container">
      <div className="h-100 d-flex">
        <div id="sidebar" className={activeSidebar ? "active" : true}>
          <div className="navbar-brand text-white d-flex justify-content-end">
            <FontAwesomeIcon
              id="sidebar-toggler"
              role={"button"}
              onClick={() => setActiveSidebar(!activeSidebar)}
              icon={faClose}
            />
          </div>
          <div className="container text-center pt-3 pb-3 border-bottom h-25">
            <img src={require("../assets/icons/kominfo-icon.png")} alt="" className="img-responsive w-25 mb-2" />
            <h6 className="text-white">Dinas Komunikasi Dan Informatika</h6>
            <h6 className="text-white">Kota Medan</h6>
          </div>

          <div className="container h-75 overflow-auto">
            <Sidebar data={category} getCat={(id, name) => getData(id, name)} setPage={(page) => setPage(page)} />
          </div>
        </div>

        <div id="content" className={activeSidebar ? "active" : true}>
          {page === "Dashboard" ? (
            <DashbboardData
              imgUri={imgUri}
              dataName={dataName}
              handleSidebar={() => setActiveSidebar(!activeSidebar)}
              total={total}
              tableData={tableData}
              handleSearchdata={(e) => searchData(e)}
              handleLogout={logout}
            />
          ) : page === "Source" ? (
            <Setting />
          ) : null}
        </div>
      </div>

      <CreateForm catId={catId} catName={dataName} refresh={(id, name) => getData(id, name)} />
      <UpdateForm catId={catId} catName={dataName} data={selectedData} refresh={(id, name) => getData(id, name)} />
      <DeleteForm catId={catId} catName={dataName} data={selectedData} refresh={(id, name) => getData(id, name)} />
    </div>
  );
}
