import React, { Component } from 'react';
import { Form, InputNumber } from 'antd';

export default class Run extends Component {
  constructor() {
    super();

    this.state = {
      minutes: 10,
      seconds: 30
    }
  }

  updateMinutes = (val) => {
    this.setState({ minutes: val }, this.updateRunTime);
  }

  updateSeconds = (val) => {
    this.setState({ seconds: val });
  }

  updateRunTime() {
    this.props.updateRunTime(this.state.minutes + ':' + this.state.seconds);
  }

  render() {
    return (
        <Form.Item label={<h1 className="form-label">Run:</h1>} colon={false}>
          <InputNumber
            min={8}
            max={18}
            size="large"
            defaultValue={10}
            onChange={this.updateMinutes}
          />
          <span className="colon">:</span>
          <InputNumber
            min={0}
            max={59}
            size="large"
            defaultValue={30}
            step={10}
            onChange={this.updateSeconds}
          />
        </Form.Item>
    );
  }
}
