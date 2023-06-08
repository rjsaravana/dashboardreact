import { CalendarOutlined } from "@ant-design/icons";
import React from "react";

const Transactions: React.FC = () => {
return(
<div style={{marginTop:'90px'}}>
    <h2>Your Transaction's</h2>
    <div className="pay-method">
        <p>NEWEST</p>
        <p><CalendarOutlined /> 24-31 May 2023</p>
    </div>

    <div className="pay-method" style={{marginTop:'15px'}}>
        <h3>Invoice Name <br /> <span style={{fontSize:'13px', color:'#186A7E'}}>&bull; 24/04/2023</span></h3>
        <p className="invoice-content">+$24,200</p>
    </div>

    <div className="pay-method" style={{marginTop:'15px'}}>
        <h3>Invoice Name <br /> <span style={{fontSize:'13px', color:'#186A7E'}}>&bull; 24 Apr 05:32 PM</span></h3>
        <p className="invoice-content">+$33,009</p>
    </div>

    <div className="pay-method" style={{marginTop:'15px'}}>
        <h3>Invoice Name <br /> <span style={{fontSize:'13px', color:'#186A7E'}}>&bull; 25 Apr 09:30 PM</span></h3>
        <p className="invoice-content" style={{color:'#D70000'}}>-$645,60</p>
    </div>

    <div className="pay-method" style={{marginTop:'15px'}}>
        <h3>Invoice Name <br /> <span style={{fontSize:'13px', color:'#186A7E'}}>&bull; 25 Apr 09:30 PM</span></h3>
        <p className="invoice-content">+$33,009</p>
    </div>

    <div className="pay-method" style={{marginTop:'15px'}}>
        <h3>Invoice Name <br /> <span style={{fontSize:'13px', color:'#186A7E'}}>&bull; 25 Apr 09:30 PM</span></h3>
        <p className="invoice-content" style={{color:'#D70000'}}>-$645,60</p>
    </div>

</div>
)
}
export default Transactions;
