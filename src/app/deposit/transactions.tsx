import { Button, Card, Col, Row } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import React from "react";

const Transactions: React.FC = () => {
return(
<div>
    <h3>Your Transaction's</h3>
    <div>
        <p>NEWEST</p>
        <p><CalendarOutlined /> 24-31 May 2023</p>
    </div>
</div>
)
}
export default Transactions;
