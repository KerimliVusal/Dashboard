import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import './App.css'

const { Content, Header } = Layout;

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout className="siteLayout">
        <Header className="sitelayoutbackground" >
        <h1 className="navLinkh1">Dashboard</h1>
          <Link to="/" className="navLink">Dashboard</Link>
          <Link to="/dallas" className="navLink">Dallas Office</Link>
          <Link to="/coppel" className="navLink">Coppel Office</Link>
          <Link to="/la" className="navLink">Los Angeles Office</Link>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>

  );
};

export default App;