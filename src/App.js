import React, { Component } from 'react';
import { Layout } from 'antd';
import './style/index.less';

import HeaderCustom from './components/HeaderCustom';

class App extends Component {
  render() {
    return (
        <Layout className="ant-layout-has-sider">
            <Layout>
                <HeaderCustom />
            </Layout>
        </Layout>
    );
  }
}

export default App;
