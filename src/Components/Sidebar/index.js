import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  BankOutlined,
  ApartmentOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import styles from './styles.module.scss';


const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider className={styles.sidebar} theme='light' width={400} >
      <div className={styles.sidebarHeader} >
      <h1>Heaven Diagnostics</h1>
      </div>
      <Menu  className={styles.sidebarItems}  mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item style={{height:'50px'}} key="1" icon={<DashboardOutlined  style={{fontSize:'20px'}}/>}>
          <Link style={{padding:'20px'}} to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item style={{height:'50px'}} key="2" icon={<BankOutlined style={{fontSize:'20px'}}/>}>
          <Link style={{padding:'20px'}} to="/dallas">Dallas Office</Link>
        </Menu.Item>
        <Menu.Item style={{height:'50px'}} key="3" icon={<ApartmentOutlined style={{fontSize:'20px'}} />}>
          <Link style={{padding:'20px'}} to="/coppel">Coppel Office</Link>
        </Menu.Item>
        <Menu.Item style={{height:'50px'}} key="4" icon={<EnvironmentOutlined style={{fontSize:'20px'}}/>}>
          <Link style={{padding:'20px'}} to="/la">Los Angeles Office</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;