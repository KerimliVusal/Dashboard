import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Layout } from 'antd';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Dallas from './Components/Dallas';
import Coppel from './Components/Coppel';
import LosAngeles from './Components/LosAngeles';
import './App.css'
import Footers from './Components/Fotter';
import { Footer } from 'antd/es/layout/layout';

const { Content, Header } = Layout;

const App = () => {
  return (
    <div className='App'>
      <Layout style={{ marginBottom: '100px' }}>
        <Sidebar />
        <Layout className="siteLayout">
          <Header className="sitelayoutbackground" >
            <h1 className="navLinkh1">Dashboard</h1>
            <Link to="/" className="navLink">Dashboard</Link>
            <Link to="/dallas" className="navLink">Dallas Office</Link>
            <Link to="/coppel" className="navLink">Coppel Office</Link>
            <Link to="/losangeles" className="navLink">Los Angeles Office</Link>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dallas" element={<Dallas />} />
              <Route path="/coppel" element={<Coppel />} />
              <Route path="/losangeles" element={<LosAngeles />} />
            </Routes>
            <Footer style={{background:'none'}}>    
                <Footers />
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </div>

  );
};

export default App;