import { Card, Col, Row, Tag } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import "./dashboard.css";

const Cardcontent: React.FC = () => {
  return (
    <>
      <Row gutter={24} style={{ marginTop: "70px" }}>
        <Col span={6}>
          <Card bordered={false} hoverable>
            <div className="card-flex">
              <h2>
                $857.00<br></br>
                <span style={{ fontSize: "15px", fontWeight: "400" }}>
                  Total Balance
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
              <p>Update hour ago</p>
              <ArrowRightOutlined />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} hoverable>
            <div className="card-flex">
              <h2>
                23<br></br>
                <span style={{ fontSize: "15px", fontWeight: "400" }}>BTC</span>
              </h2>
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  marginLeft: "50px",
                  marginTop: "20px",
                }}
                src="./assets/icon/Frame340.png"
              />
            </div>
            <div className="card-update-text">
              <p>Update hour ago</p>
              <ArrowRightOutlined />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} hoverable>
            <div className="card-flex">
              <h2>
                78<br></br>
                <span style={{ fontSize: "15px", fontWeight: "400" }}>
                  Ethereum
                </span>
              </h2>
              {/* <CloseCircleOutlined style={{ fontSize: "40px" }} /> */}
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  marginLeft: "50px",
                  marginTop: "20px",
                }}
                src="./assets/icon/Frame343.png"
              />
            </div>
            <div className="card-update-text">
              <p>Update hour ago</p>
              <ArrowRightOutlined />
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} hoverable>
            <div className="card-flex">
              <h2>
                $965,451<br></br>
                <span style={{ fontSize: "15px", fontWeight: "400" }}>
                  Sales
                </span>
              </h2>
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  marginLeft: "50px",
                  marginTop: "20px",
                }}
                src="./assets/icon/Frame344.png"
              />
            </div>
            <div className="card-update-text">
              <p>Update hour ago</p>
              <ArrowRightOutlined />
            </div>
          </Card>
        </Col>
      </Row>

      <div>
        <div className="payment-content">
          <Card
            hoverable
            style={{ width: "70%", marginTop: "20px", alignItems: "center" }}
          >
            <Row gutter={18}>
              <Col span={6} className="card-center">
                <div>
                  <h4>Previouse payout</h4>
                  <h1 style={{ fontSize: "25px" }}>$258,300</h1>
                  <p style={{ color: "#1E7589", fontWeight: "600" }}>
                    View transactions
                  </p>
                </div>
              </Col>
              <Col span={6} className="card-center">
                <div>
                  <h4>Mar 29,2023</h4>
                  <Tag
                  className="paid-tag"
                  >
                    Paid
                  </Tag>
                </div>
              </Col>
              <Col span={6} className="card-center">
                <div>
                  <h4>Previouse payout</h4>
                  <h1 style={{ fontSize: "25px" }}>$258,300</h1>
                  <p style={{ color: "#1E7589", fontWeight: "600" }}>
                    View transactions
                  </p>
                </div>
              </Col>
              <Col span={6} className="card-center">
                <div>
                  <h4>Mar 29,2023</h4>
                  <Tag
                   className="paid-tag"
                    style={{
                      color: "#E6C60D",
                      background: "#F9F4D5",
                    }}
                  >
                    Pending
                  </Tag>
                </div>
              </Col>
            </Row>
          </Card>

          <Card
            hoverable
            style={{
              width: "20%",
              height: "10%",
              marginTop: "20px",
              marginLeft: "20px",
              lineHeight: "0.671429",
            }}
          >
            <h2
              style={{
                fontSize: "16px",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Wallet
            </h2>
            <p>Balance</p>
            <h2>$2,548.00</h2>
            <p>9687 5784 3358 3451</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p>Jerome Bell</p>
              </div>
              <div>
                <p style={{ marginLeft: "15px" }}>07/27</p>
                <img
                  style={{
                    width: "60px",
                    height: "35px",
                  }}
                  src="./assets/icon/cclogo.png"
                ></img>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Cardcontent;
