import { Avatar, Button, Image, Progress } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import React from "react";

interface DataType {
  name: any;
  date: any;
  price: any;
  order: any;
  button: any;
}

const TransHistory: React.FC = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "",
      key: "order",
      dataIndex: "order",
    },
    {
      title: "",
      key: "button",
      dataIndex: "button",
    },
  ];

  const data: DataType[] = [
    {
      name: (
        <>
           <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          <span style={{ marginLeft: "20px", fontWeight:'500'}}>Gladys</span>
        </>
      ),
      date: "24 Apr 2023",
      price: "$325.00",
      order: "Order Shipped",
      button: <Button className="view-btn"  style={{ fontWeight: "600" }}>View Details</Button>,
    },
    {
      name: (
        <>
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
          <span style={{ marginLeft: "20px", fontWeight:'500' }}>Darlene</span>
        </>
      ),
      date: "24 Apr 2023",
      price: "$325.00",
      order: "Order Shipped",
      button: <Button className="view-btn" style={{ fontWeight: "600" }}>View Details</Button>,
    },
    {
      name: (
        <>
         <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
          <span style={{ marginLeft: "20px", fontWeight:'500' }}>Debra</span>
        </>
      ),
      date: "24 Apr 2023",
      price: "$325.00",
      order: "Order Shipped",
      button: <Button className="view-btn" style={{ fontWeight: "600" }}>View Details</Button>,
    },
    {
      name: (
        <>
         <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=4" />
          <span style={{ marginLeft: "20px", fontWeight:'500' }}>Aubrey</span>
        </>
      ),
      date: "24 Apr 2023",
      price: "$325.00",
      order: "Order Shipped",
      button: <Button className="view-btn" style={{ fontWeight: "600" }}>View Details</Button>,
    },
  ];

  return (
    <>
      <div  style={{ marginTop: "20px",marginLeft:'30px' }}>
        <h2>Transfer History</h2>
      </div>

      <Table
        style={{ marginTop: "10px",marginLeft:'30px' }}
        columns={columns}
        pagination={false}
        dataSource={data}
      />
    </>
  );
};

export default TransHistory;
