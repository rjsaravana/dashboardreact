import { Button, Card, Col, Row } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React from "react";

const BillingInfo: React.FC = () => {
  return (
    <Row style={{ marginTop: "80px" }}>
      <Col span={18}>
        <div>
          <h1
            style={{ fontSize: "25px", fontWeight: "700", marginLeft: "30px" }}
          >
            Billing Information
          </h1>
        </div>

        <div className="bill-info">
          <div>
            <h4>Leslie Alexander</h4>
            <p>Company Name: General Electric</p>
            <p>Email Address: General@example.com</p>
            <p>VAT Number: ELFF547854</p>
          </div>
          <div>
            <Button type="primary" style={{marginTop:'20px'}} danger>
              <DeleteOutlined /> Delete
            </Button>
          </div>
          <div>
            <Button type="primary" >
              <EditOutlined /> Edit
            </Button>
          </div>
        </div>
      </Col>
      <Col span={6}>
        <div></div>
      </Col>
    </Row>
  );
};
export default BillingInfo;
