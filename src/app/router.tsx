import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./dashboard/dashboard";
import Headerlayout from "./dashboard/layout";
import { MenuLayout } from "./dashboard/nav";
import { DepLayout } from "./deposit/depLayout";
import { Buyinfo } from "./buy bitcoin/bitcoinInfo";

export const AppRoutes:React.FC = ()=>{
    return(
        <Layout>
        <Headerlayout />
        <MenuLayout />
        <Layout className="app-container">
          <Layout className="app-layout">
            <Routes>
                <Route path="/" element={<AppLayout />} />
                <Route path="/dashboard" element={<AppLayout />} />
                <Route path="/byte-coin" element={<Buyinfo />} />
                <Route path="/deposit" element={<DepLayout />} />
            </Routes>
        </Layout>
        </Layout>
        </Layout>
    )
}
