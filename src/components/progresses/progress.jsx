import React, {Component} from 'react';
import {Row, Col,Card, Steps, Button, message, Icon} from 'antd';
import './progress.css';

const Step = Steps.Step;

const steps = [{
    title: 'First',
    content: 'First-content',
}, {
    title: 'Second',
    content: 'Second-content',
}, {
    title: 'Last',
    content: 'Last-content',
}];

class stepProgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({current});
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({current});
    }

    render() {
        const {current} = this.state;
        return (
            <div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={24}>
                        <div className="gutter-box">
                            <Card title="步骤切换" bordered={false}>
                                <Steps current={current}>
                                    {steps.map(item => <Step key={item.title} title={item.title}/>)}
                                </Steps>
                                <div className="steps-content">{steps[this.state.current].content}</div>
                                <div className="steps-action">
                                    {
                                        this.state.current < steps.length - 1
                                        &&
                                        <Button type="primary" onClick={() => this.next()}>Next</Button>
                                    }
                                    {
                                        this.state.current === steps.length - 1
                                        &&
                                        <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                                    }
                                    {
                                        this.state.current > 0
                                        &&
                                        <Button style={{marginLeft: 8}} onClick={() => this.prev()}>
                                            Previous
                                        </Button>
                                    }
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" span={16}>
                        <div className="gutter-box">
                            <Card title="图标进度条" bordered={false}>
                                <Steps>
                                    <Step status="finish" title="Login" icon={<Icon type="user"/>} />
                                    <Step status="finish" title="Verification" icon={<Icon type="solution"/>} />
                                    <Step status="process" title="Pay" icon={<Icon type="loading"/>} />
                                    <Step status="wait" title="Done" icon={<Icon type="smile-o"/>} />
                                </Steps>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box">
                            <Card title="竖直进度条" bordered={false}>
                                <Steps direction="vertical" current={1}>
                                    <Step title="Finished" description="This is a description." />
                                    <Step title="In Progress" description="This is a description." />
                                    <Step title="Waiting" description="This is a description." />
                                </Steps>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default stepProgress;