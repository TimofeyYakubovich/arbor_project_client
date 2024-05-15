import React, { useEffect } from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Events from './pages/Events';
import AppRouter from './components/AppRouter';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoteNames } from './router';

function App() {
  const router = useNavigate()
  const location = useLocation();
  
  return (
    <Layout>
      <Navbar/>
      <Layout.Content>
        <AppRouter/>
        {/* <Events/> */}
      </Layout.Content>
    </Layout> 
  );
}

export default App;
