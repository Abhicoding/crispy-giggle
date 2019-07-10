import React from 'react';
import { connect } from 'react-redux';
import { Router } from "@reach/router"; 
import LeftMenu from "./components/common/LeftMenu"

// import Call from './components/call';
import { Row, Col } from 'antd';
import './App.css';


function App() {
  return (
    <div className="App">   
    <Row>
      <Col xs={3}><LeftMenu /></Col>
      <Col xs={21} >    
      {/* <Router className="app-container">
        <Call path="/" />
      </Router> */}
    </Col>
    </Row>
    </div>
  );
}

export default connect()(App)

