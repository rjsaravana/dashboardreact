import { Button, Card, Col, Row } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import React from "react";

interface DataType {
  invoices: any;
  view: any;
}

const PaymentInfo: React.FC = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Invoices",
      dataIndex: "invoices",
      key: "invoices",
    },
    {
      title: <Button>View All</Button>,
      dataIndex: "view",
      key: "view",
    },
  ];

  const data: DataType[] = [
    {
      invoices: "#GT-685458",
      view: "$220",
    },
    {
      invoices: "#GT-685458",
      view: "$220",
    },
    {
      invoices: "#GT-685458",
      view: "$220",
    },
    {
      invoices: "#GT-685458",
      view: "$220",
    },
    {
      invoices: "#GT-685458",
      view: "$220",
    },
    {
      invoices: "#GT-685458",
      view: "$220",
    },
    {
      invoices: "#GT-685458",
      view: "$220",
    },
    {
      invoices: "#GT-685458",
      view: "$220",
    },
    {
      invoices: "#GT-685458",
      view: "$220",
    },
    {
      invoices: "#GT-685458",
      view: "$220",
    },
    {
      invoices: "#GT-685458",
      view: "$220",
    },
  ];

  return (
    <Row gutter={24} style={{ marginTop: "70px" }}>
      <Col span={18}>
        <Row>
          <Col span={8}>
            <div>
              <Card
                hoverable
                style={{
                  width: "90%",
                  height: "100%",
                  marginLeft: "20px",
                }}
              >
                <h2 style={{ fontSize: "16px", fontWeight: "700" }}>Wallet</h2>
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

          <Col span={8}>
            <Card
              bordered={false}
              hoverable
              style={{
                width: "90%",
                height: "100%",
                marginLeft: "10px",
              }}
            >
              <div className="card-flex">
                <h2>
                  Salary<br></br>
                  <span style={{ fontSize: "15px", fontWeight: "400" }}>
                    $3399.00
                  </span>
                </h2>
                <img
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "20px",
                  }}
                  src="./assets/icon/bankicon.png"
                />
              </div>
              <div className="card-update-text">
                <p>Belong Interactive</p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              bordered={false}
              hoverable
              style={{
                width: "90%",
                height: "100%",
              }}
            >
              <div className="card-flex">
                <h2>
                  Paypal<br></br>
                  <span style={{ fontSize: "15px", fontWeight: "400" }}>
                    $890.00
                  </span>
                </h2>
                <img
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "20px",
                  }}
                  src="./assets/icon/paypal.png"
                />
              </div>
              <div className="card-update-text">
                <p>Freelance Payment</p>
              </div>
            </Card>
          </Col>
        </Row>
        
        <div className="pay-method">
            <div>
              <h1 style={{fontSize:'25px', fontWeight:'700', marginLeft:'30px'}}>Payment Method</h1>
            </div>
            <div>
              <button className="add-btn">+ ADD NEW CARD</button>
            </div>
          </div>

        <Row style={{marginLeft:'25px'}}>
          <Col span={8}>
            <Card
              bordered={false}
              hoverable
              style={{
                width: "100%",
                height: "100%",
                marginTop: "20px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "20px",
                  }}
                  src="./assets/icon/mastercard.png"
                />
                <h3
                  style={{
                    marginLeft: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  **** **** **** 3340
                </h3>
              </div>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              bordered={false}
              hoverable
              style={{
                width: "100%",
                height: "100%",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    width: "80px",
                    height: "50px",
                    marginTop: "20px",
                  }}
                  src="./assets/icon/visa.png"
                />
                <h3
                  style={{
                    marginLeft: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  **** **** **** 3340
                </h3>
              </div>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <Table
          style={{ marginTop: "20px" }}
          className="byecoincontent"
          columns={columns}
          pagination={false}
          dataSource={data}
        />
      </Col>
    </Row>
  );
};

export default PaymentInfo;
