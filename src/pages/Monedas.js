import React from "react";
import { Card, Col, Row, Image } from "antd";
import AltasBajas from "../components/AltasBajas";

const Monedas = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Pesos" bordered={false}>
        <h3>Saldo en Moneda</h3>
        <span>$1,000.000.00</span>
        <AltasBajas />
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Dólares" bordered={false}>
        <h3>Saldo en Moneda</h3>
        <span>$1,000.000.00</span>
        <AltasBajas />
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Euros" bordered={false}>
        <h3>Saldo en Moneda</h3>
        <span>$1,000.000.00</span>
        <AltasBajas />
      </Card>
    </Col>
  </Row>
);
export default Monedas;
