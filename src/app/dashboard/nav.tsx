import { AppstoreOutlined, LineChartOutlined, LogoutOutlined,DashboardOutlined, ReconciliationOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [


  getItem('Dashboard', '1', <AppstoreOutlined />),
  getItem('Buy bitcoin', '2',<ReconciliationOutlined />),
  getItem('Deposit', '3', <LineChartOutlined />), 
  
  getItem('Account Pages', 'sub1', '', [
    getItem('Profile', '4', <UserOutlined />),
    getItem('Setting', '5', <SettingOutlined />),
  ]),
  getItem('Log Out','6', <LogoutOutlined />),

];


const itemsPath:{[key:number]:string} ={
  1:"/dashboard",
  2:"/byte-coin",
  3:"/deposit"
};

export const MenuLayout: React.FC = () => {
  const navigation = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', itemsPath[Number(e?.key) as number]);
    navigation(itemsPath[Number(e?.key) as number])
  };

  return (
    <Menu
      onClick={onClick}
      className='menu-item'
      style={{ width: 230, height:'100%', marginTop:'62px', position:'fixed', zIndex:'10', background: '#1E7589', color:'#ffffff', fontWeight:'600' }}
      defaultSelectedKeys={[]}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items} />  
  );
};
