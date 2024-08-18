import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClipboard, faClose, faCopy, faDownload, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getCategories, getAllData } from "../../apis/Collections";

export default function Setting() {
  const [data, setData] = useState([]);

  const handleCategories = async () => {
    const res = await getCategories();
    setData(res.data);
  };

  const handleData = async () => {
    const res = await getAllData();
    setData(res.data);
  };

  return (
    <div className="h-100">
      <div className="container mb-2 pt-2">
        <div className="row">
          <div className="col-md">
            <div className="card">
              <div className="card-body text-center" role={"button"} onClick={() => handleCategories()}>
                <FontAwesomeIcon icon={faDownload} /> Kategori Json
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card">
              <div className="card-body text-center" role={"button"} onClick={() => handleData()}>
                <FontAwesomeIcon icon={faDownload} /> Data Json
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container h-50">
        <div className="container d-flex justify-content-end">
          <div
            role={"button"}
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(data, undefined, 2));
            }}
          >
            <FontAwesomeIcon icon={faCopy} /> Copy
          </div>
        </div>

        <textarea
          name="description"
          value={JSON.stringify(data, undefined, 2)}
          type="text"
          className="form-control h-100"
          id="descriptionInput"
          placeholder="Deskripsi"
          rows="4"
        />
      </div>
    </div>
  );
}
