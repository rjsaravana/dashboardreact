import { Button, Card, Col, Input, Modal, Row, Select } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import React, { useState } from "react";

interface DataType {
  invoices: any;
  view: any;
}

const PaymentInfo: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Invoices",
      dataIndex: "invoices",
      key: "invoices",
    },
    {
      title: <Button style={{ borderRadius: "15px" }}>View All</Button>,
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
                  lineHeight: '0.571429'
                }}
              >
                <h2 style={{ fontSize: "16px", fontWeight: "800", marginBottom:'20px' }}>Wallet</h2>
                <p>Balance</p>
                <h2>$2,548.00</h2>
                <p>9687 5784 3358 3451</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <p>Jerome Bell</p>
                  </div>
                  <div>
                    <p style={{ marginLeft:'20px'}}>07/27</p>
                    <img
                      style={{
                        width: "70px",
                        height: "40px",
                      }}
                      src="./assets/icon/cclogo.png"
                    ></img>
                  </div>
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
            <h1
              style={{
                fontSize: "25px",
                fontWeight: "700",
                marginLeft: "30px",
              }}
            >
              Payment Method
            </h1>
          </div>
          <div>
            <button className="add-btn" onClick={showModal}>
              + ADD NEW CARD
            </button>

            <Modal
              title="Add New Card"
              open={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="OK"
              cancelText="Cancel"
            >
              <label>Select a Card</label>
              <br />
              <Select
                defaultValue="Master Card"
                style={{ width: 120, marginTop: "10px" }}
                onChange={handleChange}
                options={[
                  { value: "Master Card", label: "Master Card" },
                  { value: "Visa", label: "Visa" },
                  { value: "Rupay", label: "Rupay" },
                ]}
              />{" "}
              <br />
              <br />
              <label>Enter a Card Number</label>
              <Input
                placeholder="Card Number"
                style={{ marginTop: "10px", marginBottom: "20px" }}
              />
            </Modal>
          </div>
        </div>

        <Row style={{ marginLeft: "25px" }}>
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
