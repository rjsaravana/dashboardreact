import React from 'react';
import { AppstoreOutlined, LineChartOutlined, UserOutlined,LogoutOutlined, CaretLeftOutlined, SettingOutlined,ReconciliationOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

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
  getItem('Bye bitcoin', '2',<ReconciliationOutlined />),
  getItem('Deposit', '3', <LineChartOutlined />),
  
  getItem('Account Pages', 'sub1', '', [
    getItem('Profile', '4', <UserOutlined />),
    getItem('Setting', '5', <SettingOutlined />),
  ]),
  getItem('Log Out','6', <LogoutOutlined />),

];

const MenuLayout: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256, height:'100%', marginTop:'62px', position:'fixed', zIndex:'10', background: '#1E7589', color:'#ffffff', fontWeight:'600' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default MenuLayout;