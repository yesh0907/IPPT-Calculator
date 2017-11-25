import React, { Component } from 'react';
import { Form, InputNumber } from 'antd';

export default class SitUps extends Component {
  updateVal = (val) => {
    this.props.updateSitUpsReps(val);
  }

  render() {
    return (
        <Form.Item label={<h1 className="form-label">Sit Ups:</h1>} colon={false}>
          <InputNumber
            min={0}
            max={60}
            size="large"
            defaultValue={30}
            onChange={this.updateVal}
          />
        </Form.Item>
    );
  }
}
