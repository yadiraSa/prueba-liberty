import "./App.css";
import React, { useState } from "react";
import { Divider, Layout } from "antd";
import ContenidoPrima from "./pages/ContenidoPrima";
import Monedas from "./pages/Monedas";
import Tabla from "./pages/Tabla";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [estadoUpdate, setEstadoUpdate] = useState(
    localStorage.getItem("estado")
  );

  const handleEstadoChange = (newEstado) => {
    setEstadoUpdate(newEstado);
  };

  return (
    <Layout>
      <Layout>
        <Header
          style={{
            padding: 0,
            minWidth: 100,
            background: "#DDE156",
          }}
        >
          <h1
            style={{
              padding: 0,
              background: "#DDE156",
              textAlign: "center",
              color: "#EBEBE9",
            }}
          >
            Prima por cobrar
          </h1>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 500,
              background: "#7C95E7",
            }}
          >
            <h2
              style={{
                padding: 0,
                textAlign: "left",
                color: "#EBEBE9",
              }}
            >
              ¡Bienvenidos!
            </h2>
            <ContenidoPrima onEstadoChange={handleEstadoChange} />
            <Monedas />
            <Divider />
            <Tabla estado={estadoUpdate} />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Prueba Yadira Salazar ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
