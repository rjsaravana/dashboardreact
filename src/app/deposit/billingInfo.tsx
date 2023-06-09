import { Button, Card, Col, Popconfirm, Row, message } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import Transactions from "./transactions";

const confirm = (e: any) => {
  console.log(e);
  message.success("Click on Yes");
};

const cancel = (e: any) => {
  console.log(e);
  message.error("Click on No");
};

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

        <div className="bill-info" style={{ marginTop: "30px" }}>
          <div>
            <h4>Leslie Alexander</h4>
            <p>Company Name: General Electric</p>
            <p>Email Address: General@example.com</p>
            <p>VAT Number: ELFF547854</p>
          </div>

          <div>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            >
              <Button
                className="del-btn"
                style={{ marginTop: "20px" }}
              >
                <DeleteOutlined /> Delete
              </Button>
            </Popconfirm>
          </div>

          <div>
            <Button
              className="edit-btn"
              style={{ marginTop: "20px" }}
            >
              <EditOutlined /> Edit
            </Button>
          </div>
        </div>

        <div className="bill-info" style={{ marginTop: "30px" }}>
          <div>
            <h4>Cameron Williamson</h4>
            <p>Company Name: General Electric</p>
            <p>Email Address: General@example.com</p>
            <p>VAT Number: ELFF547854</p>
          </div>

          <div>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            >
              <Button
                className="del-btn"
                style={{ marginTop: "20px" }}
              >
                <DeleteOutlined /> Delete
              </Button>
            </Popconfirm>
          </div>

          <div>
            <Button
              className="edit-btn"
              style={{ marginTop: "20px" }}
            >
              <EditOutlined /> Edit
            </Button>
          </div>
        </div>

        <div className="bill-info" style={{ marginTop: "30px" }}>
          <div>
            <h4>Brooklyn Simmons</h4>
            <p>Company Name: General Electric</p>
            <p>Email Address: General@example.com</p>
            <p>VAT Number: ELFF547854</p>
          </div>

          <div>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            >
              <Button
                className="del-btn"
                style={{ marginTop: "20px" }}
              >
                <DeleteOutlined /> Delete
              </Button>
            </Popconfirm>
          </div>
          <div>
            <Button
              className="edit-btn"
              style={{ marginTop: "20px" }}
            >
              <EditOutlined /> Edit
            </Button>
          </div>
        </div>
      </Col>

      <Col span={6}>
        <div>
          <Transactions />
        </div>
      </Col>
    </Row>
  );
};
export default BillingInfo;
