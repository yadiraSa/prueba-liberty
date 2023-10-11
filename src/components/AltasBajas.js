import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";

const AltasBajas = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Activo"
          value={11.28}
          precision={2}
          valueStyle={{
            color: "#3f8600",
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
        <span style={{ color: "blue", margin: "30px" }}>$700,000.000</span>
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Inactivo"
          value={9.3}
          precision={2}
          valueStyle={{
            color: "#cf1322",
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
        <span style={{ color: "red", margin: "30px", flex: 1 }}>$300,000.000</span>
      </Card>
    </Col>
  </Row>
);
export default AltasBajas;
