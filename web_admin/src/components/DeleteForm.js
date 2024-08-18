import React, { useState } from "react";
import { deleteData } from "../apis/Collections";

export default function DeleteForm({ data, catId, catName, refresh }) {
  const delData = async () => {
    const res = await deleteData(data.id);
    if (res.success) {
      refresh(catId, catName);
    }
  };

  return (
    <div className="modal fade" id="deleteForm" tabIndex="-1" aria-labelledby="dashboardTaableModal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Hapus Data
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <div>
                    <span>ID</span>
                  </div>
                </div>
                <div className="col-auto">
                  <div>
                    <span>:</span>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <span>{data.id}</span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-2">
                  <div>
                    <span>Kategori</span>
                  </div>
                </div>
                <div className="col-auto">
                  <div>
                    <span>:</span>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <span>{catName}</span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-2">
                  <div>
                    <span>Nama</span>
                  </div>
                </div>
                <div className="col-auto">
                  <div>
                    <span>:</span>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <span>{data.name}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <div>
                    <span>Alamat</span>
                  </div>
                </div>
                <div className="col-auto">
                  <div>
                    <span>:</span>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <span>{data.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button onClick={delData} type="button" className="btn btn-primary" data-bs-dismiss="modal">
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
