import React from 'react';
import { Menu } from 'antd';
import { Link } from "@reach/router"; 

const exotelLogo = require("./logo.png");

function App() {
  return (
    <div>
        <Link to="/"><img src={exotelLogo} style={{margin: '20px'}} /></Link>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='vertical'
          theme='light'
        >        
          <Menu.Item key="1">
            <Link to="call">Call</Link>
          </Menu.Item>
          <Menu.Item key="2">
            SMS
          </Menu.Item>
          <Menu.Item key="3">
            Addess Book 
          </Menu.Item>
          <Menu.Item key="4">
            Dashboard
          </Menu.Item>
          <Menu.Item key="5">
            Campaigns
          </Menu.Item>
          <Menu.Item key="6">
            Agents
          </Menu.Item>       
          <Menu.Item key="7">
            Reports
          </Menu.Item>                
        </Menu>
    </div>
  );
}

export default App;
