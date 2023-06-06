import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Progress } from "antd";

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
    companis: "Bmw",
    member: "img",
    budget: "$850,57",
    completion: <Progress style={{ width: "100px" }} percent={60} />,
  },
  {
    companis: "Dyson",
    member: "img",
    budget: "$3,785",
    completion: <Progress style={{ width: "100px" }} percent={45} />,
  },
  {
    companis: "Huwai",
    member: "img",
    budget: "$27,580",
    completion: <Progress style={{ width: "100px" }} percent={90} />,
  },
  {
    companis: "Nasa",
    member: "img",
    budget: "$89,254",
    completion: <Progress style={{ width: "100px" }} percent={82} />,
  },
];

export default Byebitcoin;
