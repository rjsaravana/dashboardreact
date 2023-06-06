import { Layout, MenuProps } from "antd";
import Cardcontent from "./card";
import Headerlayout from "./layout";
import MenuLayout from "./nav";
import Byebitcoin from "./byebitcoin";

export const AppLayout: React.FC = () => {
  return (
    <Layout>
      <Headerlayout />
      <MenuLayout />
      <Layout className="app-container">
        <Layout className="app-layout">
          <Cardcontent />
          <Byebitcoin />
        </Layout>
      </Layout>
    </Layout>
  );
};
