import axios from "axios";
import React, { useEffect, useState } from "react";
import { Select } from "antd";
const { Option } = Select;

const ContenidoPrima = ({onEstadoChange}) => {
  const [estados, setEstados] = useState([]);
  const [agentes, setAgentes] = useState([]);
  const [ejecutivos, setEjecutivos] = useState([]);

  const onChange = (value) => {
    localStorage.setItem('estado', value);
    onEstadoChange(value);
  };

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

  useEffect(() => {
    axios
      .get("http://localhost:3001/agentes") 
      .then((response) => {
        setAgentes(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener agentes:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/ejecutivos") 
      .then((response) => {
        setEjecutivos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener ejecutivos:", error);
      });
  }, []);

  return (
    <>
      <Select showSearch placeholder="Oficinas en la república" onChange={onChange}>
        {estados.map((estado) => (
          <Option key={estado.id} value={estado.nombre}>
            {estado.nombre}
          </Option>
        ))}
      </Select>
      <Select
        style={{
          margin: "10px",
        }}
        showSearch
        placeholder="Agente"
      >
        {agentes.map((agente) => (
          <Option key={agente.id} value={agente.nombre}>
            {agente.nombre}
          </Option>
        ))}
      </Select>
      <Select
        style={{
          margin: "10px",
        }}
        showSearch
        placeholder="Ejecutivo"
      >
        {ejecutivos.map((ejecutivo) => (
          <Option key={ejecutivo.id} value={ejecutivo.nombre}>
            {ejecutivo.nombre}
          </Option>
        ))}
      </Select>
    </>
  );
};
export default ContenidoPrima;
