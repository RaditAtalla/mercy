import React, { useEffect, useState } from "react";
import { updateData } from "../apis/Collections";

export default function UpdateForm({ data, catId, catName, refresh }) {
  let [name, setName] = useState(data.name);
  let [address, setAddress] = useState(data.address);
  let [operation, setOperation] = useState(data.operation);
  let [phone, setPhone] = useState(data.phone);
  let [email, setEmail] = useState(data.email);
  let [website, setWebsite] = useState(data.website);
  let [description, setDescription] = useState(data.description);
  let [photo, setPhoto] = useState(data.photo);
  let [gmap, setGmap] = useState(data.gmap);

  const update = async () => {
    const dt = {
      id: data.id,
      name: name,
      address: address,
      operation: operation,
      phone: phone,
      email: email,
      website: website,
      description: description,
      photo: photo,
      gmap: gmap,
      categoryId: catId,
    };

    const res = await updateData(dt);
    if (res.success) {
      refresh(catId, catName);
      clear();
    }
  };

  const clear = () => {
    setName("");
    setAddress("");
    setOperation("");
    setPhone("");
    setEmail("");
    setWebsite("");
    setDescription("");
    setPhoto("");
    setGmap("");
  }

  useEffect(() => {
    setName(data.name);
    setAddress(data.address);
    setOperation(data.operation);
    setPhone(data.phone);
    setEmail(data.email);
    setWebsite(data.website);
    setDescription(data.description);
    setPhoto(data.photo);
    setGmap(data.gmap);
  }, [data.name, data.address, data.operation, data.phone, data.email, data.website, data.description, data.photo, data.gmap]);

  return (
    <div className="modal fade" id="updateForm" tabIndex="-1" aria-labelledby="dashboardTaableModal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Update Data
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-2">
                <label htmlFor="nameInput" className="form-label">
                  Nama
                </label>
                <input
                  name="name"
                  value={name}
                  defaultValue={data.name}
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Nama"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="addressInput" className="form-label">
                  Alamat
                </label>
                <input
                  name="address"
                  value={address}
                  defaultValue={data.address}
                  type="text"
                  className="form-control"
                  id="addressInput"
                  placeholder="Alamat"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="operationInput" className="form-label">
                  Jam Operasi
                </label>
                <input
                  name="operation"
                  value={operation}
                  defaultValue={data.operation}
                  type="text"
                  className="form-control"
                  id="operationInput"
                  placeholder="Jam Operasi"
                  onChange={(e) => setOperation(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="phoneInput" className="form-label">
                  Telepon
                </label>
                <input
                  name="phone"
                  value={phone}
                  defaultValue={data.phone}
                  type="text"
                  className="form-control"
                  id="phoneInput"
                  placeholder="Telepon"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="emailInput" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  value={email}
                  defaultValue={data.email}
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="websiteInput" className="form-label">
                  Website
                </label>
                <input
                  name="website"
                  value={website}
                  defaultValue={data.website}
                  type="text"
                  className="form-control"
                  id="websiteInput"
                  placeholder="Website"
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="descriptionInput" className="form-label">
                  Deskripsi
                </label>
                <textarea
                  name="description"
                  value={description}
                  defaultValue={data.description}
                  type="text"
                  className="form-control"
                  id="descriptionInput"
                  placeholder="Deskripsi"
                  rows="4"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="photoInput" className="form-label">
                  Foto
                </label>
                <input
                  name="photo"
                  value={photo}
                  defaultValue={data.photo}
                  type="text"
                  className="form-control"
                  id="photoInput"
                  placeholder="Foto"
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="gmapInput" className="form-label">
                  Gmap
                </label>
                <input
                  name="gmap"
                  value={gmap}
                  defaultValue={data.gmap}
                  type="text"
                  className="form-control"
                  id="gmapInput"
                  placeholder="Gmap"
                  onChange={(e) => setGmap(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button onClick={update} type="button" className="btn btn-primary" data-bs-dismiss="modal">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
