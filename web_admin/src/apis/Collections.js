import axios from "./Axios";

const token = JSON.parse(localStorage.getItem("token"));

export const getCategories = async () => {
  const res = await axios.get("/api/category");
  return res.data;
};

export const getCatId = async (id) => {
  const res = await axios.get("/api/data/" + id);
  return res.data;
};

export const login = async (data) => {
  const res = await axios.post("/api/auth/login", data, {
    headers: {
      "Content-type": "application/json",
    },
  });
  return res.data;
};

export const me = async () => {
  const res = await axios.get("/api/auth/me", {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const createData = async (data) => {
  const res = await axios.post("/api/data/create", data, {
    validateStatus: function (status) {
      return status >= 200;
    },
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const getAllData = async () => {
  const res = await axios.get("/api/data/", {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const updateData = async (data) => {
  const res = await axios.post("/api/data/update", data, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const deleteData = async (id) => {
  const res = await axios.get("/api/data/delete/" + id, {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
