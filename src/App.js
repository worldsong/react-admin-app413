import React, { Component } from 'react';
import { Layout } from 'antd';

import './style/index.less';

import HeaderCustom from './components/HeaderCustom';
import SiderCustom from './components/SiderCustom';

const { Content, Footer } = Layout;


class App extends Component {
  render() {
    return (
        <Layout className="ant-layout-has-sider">
            <SiderCustom path={this.props.location.pathname} />
            <Layout>
                <HeaderCustom />
                <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                    {this.props.children}
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
