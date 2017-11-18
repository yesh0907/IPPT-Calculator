import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import Calculator from './Components/Calculator';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <h1 className="logo">Max's IPPT Calculator</h1>
        </Header>
        <Content className="content">
          <div id="bg">
            <Calculator />
          </div>
        </Content>

        <Footer className="footer">
          Max Huang &copy; Created by Yesh Chandiramani
        </Footer>
      </Layout>
    );
  }
}

export default App;
