import { Layout, MenuProps } from "antd";
import Headerlayout from "../dashboard/layout";
import MenuLayout from "../dashboard/nav";
import ByebitcoinInfo from "./infoContent";

export const Byeinfo: React.FC = () => {
  return (
    <Layout>
      <Headerlayout />
      <MenuLayout />
      <Layout className="app-container">
        <Layout className="app-layout">
          <ByebitcoinInfo />
        </Layout>
      </Layout>
    </Layout>
  );
};