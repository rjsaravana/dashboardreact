import React from "react";
import {
  CaretLeftOutlined,
  SearchOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Divider, Layout, Space } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  color: "#fff",
  position: "sticky",
  height: 64,
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "64px",
  backgroundColor: "#1E7589",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const siderStyle: React.CSSProperties = {
  marginLeft: "150px",
  fontSize: "20px",
  color: "#fff",
};

const Headerlayout: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout style={{display:'flex', width:'100%', position:'fixed',zIndex:10}}>
        <Header style={headerStyle}>
          Dasxp
          <CaretLeftOutlined style={{ color: "#E6C60D" }} />
          <CaretLeftOutlined style={{ color: "rgba(230, 198, 13, 0.34)" }} />
          <span style={siderStyle}>Invoice</span>
          <div style={{ float: "right" }}>
            <SearchOutlined />
            <BellOutlined style={{ marginLeft: "20px", marginRight: "20px" }} />
            <Divider
              type="vertical"
              style={{
                fontSize: "35px",
                fontWeight: "800",
                background: "#ffffff",
              }}
            />
            <Avatar
              style={{
                float: "right",
                marginLeft: "20px",
                marginTop: "10px",
              }}
              shape="circle"
              size={40}
              icon={<UserOutlined />}
            />
            <span> Saravanan</span>
          </div>
        </Header>
      </Layout>
    </Space>
  );
};

export default Headerlayout;
