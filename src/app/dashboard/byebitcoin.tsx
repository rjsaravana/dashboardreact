import React from "react";
import { Space, Table, Image, Tag, Avatar, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Progress } from "antd";
import { UserOutlined, AntDesignOutlined } from "@ant-design/icons";

interface DataType {
  companis: any;
  member: any;
  budget: any;
  completion: any;
}

const Byebitcoin: React.FC = () => (
  <Table
    style={{ marginTop: "20px" }}
    className="byecoincontent"
    columns={columns}
    dataSource={data}
  />
);

<div>
  <h2>Bye Bitcoin</h2>
</div>;
const columns: ColumnsType<DataType> = [
  {
    // render: (text: string, record: DataType) => (
    //   <Image src={"./assets/icon/bmw.png"} width={20} />
    // ),
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

export default Byebitcoin;
