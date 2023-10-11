import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "antd";
const { Column } = Table;

const data = [
  {
    fianza: "1954-0000",
    estado: "Ciudad de México",
    movimiento: "Expedición",
    fiado: "AGROGEN S.A DE C.V",
    antiguedad: 200,
    vencimiento: 92,
    importe: "$200.000",
  },
  {
    fianza: "8524-0000",
    estado: "Monterrey, Nuevo León",
    movimiento: "Expedición",
    fiado: "DOMANI S.A DE C.V",
    antiguedad: 150,
    vencimiento: 61,
    importe: "$150.000",
  },
  {
    fianza: "1584-0000",
    estado: "Saltillo, Coahuila",
    movimiento: "Ampliación",
    fiado: "AUTO SERVICIO COAHUILA S.A DE C.V",
    antiguedad: 98,
    vencimiento: 31,
    importe: "$20.000",
  },
  {
    fianza: "1845-0000",
    estado: "Aguascalientes",
    movimiento: "Prorroga",
    fiado: "BARCO QUIREZA FRANCISCO",
    antiguedad: 63,
    vencimiento: 33,
    importe: "$980.000",
  },
  {
    fianza: "9711-0457",
    estado: "Querétaro",
    movimiento: "Ampliación",
    fiado: "CASA GALLARDO S.A DE C.V",
    antiguedad: 20,
    vencimiento: 0,
    importe: "$1.000.000",
  },
  {
    fianza: "6857-0457",
    estado: "Guadalajara, Jal",
    movimiento: "Prorroga",
    fiado: "AGROGEN S.A DE C.V",
    antiguedad: 15,
    vencimiento: 0,
    importe: "$80.000",
  },
];
const Tabla = ({ estado }) => {
  const [estados, setEstados] = useState({});
  console.log(estado);

  useEffect(() => {
    axios
      .get("http://localhost:3001/estados")
      .then((response) => {
        setEstados(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener estados:", error);
      });
  }, []);

  const filteredData = estados
    ? data.filter((item) => item.estado === estado)
    : data;

  return (
    <Table dataSource={filteredData}>
      <Column title="Fianza" dataIndex="fianza" key="fianza" />
      <Column title="Movimiento" dataIndex="movimiento" key="movimiento" />
      <Column title="Fiado" dataIndex="fiado" key="fiado" />
      <Column title="Antiguedad" dataIndex="antiguedad" key="antiguedad" />
      <Column
        title=" Días de Vencimiento"
        dataIndex="vencimiento"
        key="vencimiento"
      />
      <Column title="Importe" dataIndex="importe" key="importe" />
    </Table>
  );
};
export default Tabla;
