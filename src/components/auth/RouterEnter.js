import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import AuthWidget from '../widget/AuthWidget';

class RouterEnter extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first="权限管理" second="路由拦截" />
                <AuthWidget
                    children={auth => (
                        <Row>
                            <Col span={24}>
                                <Card bordered={false} bodyStyle={{minHeight: 600}}>
                                    <h2 style={{height: 500}} className="center">还在开发中，等下就来</h2>
                                </Card>
                            </Col>
                        </Row>
                    )}
                />
            </div>
        )
    }
}

export default RouterEnter;