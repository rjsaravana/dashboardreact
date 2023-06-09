import { Avatar, Button, Empty, Image, Modal, Progress } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import React, { useState } from "react";

interface DataType {
  name: any;
  date: any;
  price: any;
  order: any;
  button: any;
}

const TransHistory: React.FC = () => {


  const [modal1Open, setModal1Open] = useState(false);


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
      button: <><Button onClick={() => setModal1Open(true)} className="view-btn" style={{ fontWeight: "600" }}>View Details</Button><Modal
        title=""
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <Empty />
      </Modal></>,
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
      button: <><Button onClick={() => setModal1Open(true)} className="view-btn" style={{ fontWeight: "600" }}>View Details</Button><Modal
      title=""
      centered
      open={modal1Open}
      onOk={() => setModal1Open(false)}
      onCancel={() => setModal1Open(false)}
    >
      <Empty />
    </Modal></>,
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
      button: <><Button onClick={() => setModal1Open(true)} className="view-btn" style={{ fontWeight: "600" }}>View Details</Button><Modal
        title=""
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <Empty />
      </Modal></>,
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
      button: <><Button onClick={() => setModal1Open(true)} className="view-btn" style={{ fontWeight: "600" }}>View Details</Button><Modal
        title=""
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <Empty />
      </Modal></>,
    },
  ];

  return (
    <>
      <div  style={{ marginTop: "20px",marginLeft:'30px' }}>
        <h2>Transfer History</h2>
      </div>

      <Table
        style={{ marginTop: "10px",marginLeft:'30px'}}
        columns={columns}
        pagination={false}
        dataSource={data}
      />
    </>
  );
};

export default TransHistory;
