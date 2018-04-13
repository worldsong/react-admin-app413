import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content, Footer } = Layout;

import './style/index.less';

import HeaderCustom from './components/HeaderCustom';
import SiderCustom from './components/SiderCustom';

class App extends Component {
  render() {
    return (
        <Layout className="ant-layout-has-sider">
            <SiderCustom />
            <Layout>
                <HeaderCustom />
                <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                    Hello
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
  }
}

export default App;
