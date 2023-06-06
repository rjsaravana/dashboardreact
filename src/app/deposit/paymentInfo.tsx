import { Card, Col, Row, Tag } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

const PaymentInfo: React.FC = () => {
  return (
    <Row gutter={24} style={{ marginTop: "70px" }}>
      <Col span={6}>
        <div style={{ marginTop: "40px" }}>
          <Card
            hoverable
            style={{
              width: "70%",
              height: "10%",
              marginTop: "20px",
              marginLeft: "20px",
            }}
          >
            <p style={{ fontSize: "16px", fontWeight: "600" }}>Wallet</p>
            <p>Balance</p>
            <h2>$2,548.00</h2>
            <p>9687 5784 3358 3451</p>
            <p>Jerome Bell</p>
            <div style={{ float: "right" }}>
              <p>07/27</p>
              <img
                style={{
                  width: "70px",
                  height: "40px",
                }}
                src="./assets/icon/cclogo.png"
              ></img>
            </div>
          </Card>
        </div>
      </Col>

      <Col span={6}>
        <Card bordered={false} hoverable>
          <div className="card-flex">
            <h2>
              Salary<br></br>
              <span style={{ fontSize: "15px", fontWeight: "400" }}>
                $3399.00
              </span>
            </h2>
            {/* <DollarOutlined style={{ fontSize: "40px", color:'1E7589' }} /> */}
            <img
              style={{
                width: "60px",
                height: "60px",
                marginLeft: "50px",
                marginTop: "20px",
              }}
              src="./assets/icon/Frame339.png"
            />
          </div>
          <div className="card-update-text">
            <p>Belong Interactive</p>
          </div>
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false} hoverable>
          <div className="card-flex">
            <h2>
              Paypal<br></br>
              <span style={{ fontSize: "15px", fontWeight: "400" }}>
                $890.00
              </span>
            </h2>
            {/* <DollarOutlined style={{ fontSize: "40px", color:'1E7589' }} /> */}
            <img
              style={{
                width: "60px",
                height: "60px",
                marginLeft: "50px",
                marginTop: "20px",
              }}
              src="./assets/icon/Frame339.png"
            />
          </div>
          <div className="card-update-text">
            <p>Freelance Payment</p>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default PaymentInfo;
