import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Byeinfo } from "./bye bitcoin/bitcoinInfo";
import { AppLayout } from "./dashboard/dashboard";
import { Layout } from "antd";
import Headerlayout from "./dashboard/layout";
import { MenuLayout } from "./dashboard/nav";
import PaymentInfo from "./deposit/paymentInfo";

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
                <Route path="/byte-coin" element={<Byeinfo />} />
                <Route path="/deposit" element={<PaymentInfo />} />
            </Routes>
        </Layout>
        </Layout>
        </Layout>
    )
}
