import React from "react";
import {
  Space,
  Table,
  Image,
  Tag,
  Avatar,
  Tooltip,
  Col,
  Row,
  Button,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { Progress } from "antd";
import {
  UserOutlined,
  AntDesignOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

interface DataType {
  companis: any;
  member: any;
  budget: any;
  completion: any;
}

const Byebitcoin: React.FC = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Companis",
      dataIndex: "companis",
      key: "companis",
    },
    {
      title: "Member",
      dataIndex: "member",
      key: "member",
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
    },
    {
      title: "Completion",
      key: "completion",
      dataIndex: "completion",
    },
  ];

  const data: DataType[] = [
    {
      companis: (
        <>
          <Image src="./assets/icon/bmw.png" width={40} />
          <span style={{ marginLeft: "15px" }}>Bmw</span>
        </>
      ),
      member: (
        <Avatar.Group>
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      ),
      budget: "$850,57",
      completion: <Progress style={{ width: "100px" }} percent={60} />,
    },
    {
      companis: (
        <>
          <Image src="./assets/icon/dyson.png" width={40} />
          <span style={{ marginLeft: "15px" }}>Dyson</span>
        </>
      ),
      member: (
        <Avatar.Group>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      ),
      budget: "$3,785",
      completion: <Progress style={{ width: "100px" }} percent={45} />,
    },
    {
      companis: (
        <>
          <Image src="./assets/icon/huawei.png" width={40} />
          <span style={{ marginLeft: "15px" }}>Huawei</span>
        </>
      ),
      member: (
        <Avatar.Group>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      ),
      budget: "$27,580",
      completion: <Progress style={{ width: "100px" }} percent={90} />,
    },
    {
      companis: (
        <>
          <Image src="./assets/icon/nasa.png" width={40} />
          <span style={{ marginLeft: "15px" }}>Nasa</span>
        </>
      ),
      member: (
        <Avatar.Group>
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      ),
      budget: "$89,254",
      completion: <Progress style={{ width: "100px" }} percent={82} />,
    },
  ];

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <h2>Buy Bitcoin</h2>
      </div>

      <div>
        <Row>
          <Col span={18}>
            <Table
              style={{ marginTop: "10px" }}
              className="byecoincontent"
              columns={columns}
              pagination={false}
              dataSource={data}
            />
          </Col>

          <Col span={6}>
            <div>
              <h3>Order Overview</h3>
              <p>
                <ArrowUpOutlined
                  style={{ color: "#1E7589", marginRight: "10px" }}
                />
                64% this month
              </p>
            </div>

            <div className="pay-method" style={{ marginTop: "15px" }}>
              <h3>
                App Design <br />
                <span style={{ fontSize: "13px", color: "#186A7E" }}>
                &bull; 29 Mar 06:45 PM
                </span>
              </h3>
              <Button className="paid-btn" style={{marginTop:'25px', marginRight:'20px'}}>$60 Paid</Button>
            </div>

            <div className="pay-method" style={{ marginTop: "15px" }}>
              <h3>
                Invoice Details <br />
                <span style={{ fontSize: "13px", color: "#186A7E" }}>
                &bull; 29 Mar 06:45 PM
                </span>
              </h3>
              <Button className="paid-btn" style={{marginTop:'25px', marginRight:'20px', backgroundColor:'#E6C60D'}}>View More</Button>
            </div>

            <div className="pay-method" style={{ marginTop: "15px" }}>
              <h3>
                New Order <br />
                <span style={{ fontSize: "13px", color: "#186A7E" }}>
                &bull; 29 Mar 06:45 PM
                </span>
              </h3>
              <Button className="paid-btn" style={{marginTop:'25px', marginRight:'20px'}}>$60 Paid</Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Byebitcoin;
