/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import DataTable from "react-data-table-component";

export default function DataTables({ tableData }) {
  const columns = [
    {
      name: "Setup",
      selector: (row) => row.set,
      width: "100px",
    },
    {
      name: "Nama",
      selector: (row) => row.name,
      width: "200px",
    },
    {
      name: "Alamat",
      selector: (row) => row.address,
      width: "200px",
    },
    {
      name: "Jam Operasi",
      selector: (row) => row.operation,
      width: "200px",
    },
    {
      name: "Telepon",
      selector: (row) => row.phone,
      width: "200px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      width: "200px",
    },
    {
      name: "Website",
      selector: (row) => row.website,
      width: "200px",
    },
    {
      name: "Deskripsi",
      selector: (row) => row.description,
      width: "200px",
    },
    {
      name: "Foto",
      selector: (row) => row.photo,
      width: "200px",
    },
    {
      name: "Gmap",
      selector: (row) => row.gmap,
      width: "200px",
    },
  ];
  return <DataTable columns={columns} data={tableData} pagination dense title="Tabel Data" />;
}
