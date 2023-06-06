import React from "react";
import { Space, Table,Button, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Progress } from "antd";

interface DataType {
  bitcoin: any;
  budget: any;
  status: any;
  completion: any;
  btn: any;
}

const ByebitcoinInfo: React.FC = () => (
  <Table
    style={{ marginTop: "50px" }}
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
    title: "Bitcoin",
    dataIndex: "bitcoin",
    key: "bitcoin",
  },
  {
    title: "Budget",
    dataIndex: "budget",
    key: "budget",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Completion",
    key: "completion",
    dataIndex: "completion",
  },
  {
    title: "",
    key: "btn",
    dataIndex: "btn",
  },
];

const data: DataType[] = [
  {
    bitcoin: "Misubishi",
    budget: "$32,524",
    status: "Working",
    completion: <Progress style={{ width: "100px" }} percent={65} />,
    btn:<Button style={{fontWeight:'600'}}>Buy Now</Button>,
  },
  {
    bitcoin: "Amazon",
    budget: "$32,524",
    status: "Done",
    completion: <Progress style={{ width: "100px" }} percent={80} />,
    btn:<Button style={{fontWeight:'600'}}>Buy Now</Button>,
  },
  {
    bitcoin: "Windows",
    budget: "$32,524",
    status: "Canceled",
    completion: <Progress style={{ width: "100px" }} percent={20} />,
    btn:<Button style={{fontWeight:'600'}}>Buy Now</Button>,
  },
  {
    bitcoin: "Salesforce",
    budget: "$32,524",
    status: "Done",
    completion: <Progress style={{ width: "100px" }} percent={75} />,
    btn:<Button style={{fontWeight:'600'}}>Buy Now</Button>,
  },
  {
    bitcoin: "Amazon",
    budget: "$32,524",
    status: "Canceled",
    completion: <Progress style={{ width: "100px" }} percent={68} />,
    btn:<Button style={{fontWeight:'600'}}>Buy Now</Button>,
  },
  {
    bitcoin: "Windows",
    budget: "$32,524",
    status: "Done",
    completion: <Progress style={{ width: "100px" }} percent={92} />,
    btn:<Button style={{fontWeight:'600'}}>Buy Now</Button>,
  },
  {
    bitcoin: "Salesforce",
    budget: "$32,524",
    status: "Canceled",
    completion: <Progress style={{ width: "100px" }} percent={12} />,
    btn:<Button style={{fontWeight:'600'}}>Buy Now</Button>,
  },
  {
    bitcoin: "Misubishi",
    budget: "$32,524",
    status: "Working",
    completion: <Progress style={{ width: "100px" }} percent={93} />,
    btn:<Button style={{fontWeight:'600'}}>Bue Now</Button>,
  },
];

export default ByebitcoinInfo;
