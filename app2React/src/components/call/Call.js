import React from "react";
import { Table, Divider, Row, Col, Input, Button, Switch } from "antd";
import Filter from "./filter";
import './call.css';
const columns = [
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Date & Time",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "Flow & Group",
    dataIndex: "flow",
    key: "flow"
  },
  {
    title: "Agent",
    dataIndex: "agent",
    key: "agent"
  },
  {
    title: "Ticket Status",
    dataIndex: "ticket",
    key: "ticket"
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    customer: "+91-9992223338",
    date: "a minute ago",
    flow: "Sales /Level 1",
    agent: "John Doe",
    ticket: "Pending",
    duration: "00:00"
  },
  {
    key: "2",
    customer: "+91-9992223338",
    date: "a minute ago",
    flow: "Sales /Level 1",
    agent: "John Doe",
    ticket: "Pending",
    duration: "00:00"
  },
  {
    key: "3",
    customer: "+91-9992223338",
    date: "a minute ago",
    flow: "Sales /Level 1",
    agent: "John Doe",
    ticket: "Pending",
    duration: "00:00"
  },
  {
    key: "4",
    customer: "+91-9992223338",
    date: "a minute ago",
    flow: "Sales /Level 1",
    agent: "John Doe",
    ticket: "Pending",
    duration: "00:00"
  },
  {
    key: "5",
    customer: "+91-9992223338",
    date: "a minute ago",
    flow: "Sales /Level 1",
    agent: "John Doe",
    ticket: "Pending",
    duration: "00:00"
  },
  {
    key: "6",
    customer: "+91-9992223338",
    date: "a minute ago",
    flow: "Sales /Level 1",
    agent: "John Doe",
    ticket: "Pending",
    duration: "00:00"
  }
];

const Search = Input.Search;

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

function App() {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <Button>Call</Button>
          <Button>SMS</Button>
        </Col>
        <Col xs={12} className="float-right">
          <Switch defaultChecked onChange={onChange} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12}>1257 total calls from all groups for today</Col>
        <Col xs={12} className="float-right">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
          <Button>Filter</Button>
          <Button>Refresh</Button>
        </Col>
      </Row>
      <Filter />
      <br/>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default App;
