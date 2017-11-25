import React, { Component } from 'react';
import { Form, InputNumber } from 'antd';

export default class PushUps extends Component {
  updateValue = (val) => {
    this.props.updatePushUpsReps(val);
  }

  render() {
    return (
        <Form.Item label={<h1 className="form-label">Push Ups:</h1>} colon={false}>
          <InputNumber
            min={0}
            max={60}
            size="large"
            defaultValue={30}
            onChange={this.updateValue}
          />
        </Form.Item>
    );
  }
}
