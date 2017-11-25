import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button } from 'antd';

import * as Actions from '../actions';

import PushUps from './PushUps';
import SitUps from './SitUps';
import Run from './Run';


class Calculator extends Component {
  render() {
    const { actions, state } = this.props;
    const { score } = state;

    let result = null;
    if (score !== -1) {
      if (score >= 90) result = (<h1>Commando/Guards Gold!<br />Score: <b>{score}</b></h1>);
      else if (score >= 85) result = (<h1>You got Gold!<br />Score: <b>{score}</b></h1>);
      else if (score >= 75) result = (<h1>You got Silver!<br />Score: <b>{score}</b></h1>);
      else if (score >= 61) result = (<h1>You Passed (skip IPPT lah)!<br />Score: <b>{score}</b></h1>);
      else result = (<h1>You Failed :(<br />Score: <b>{score}</b></h1>)
    }

    return (
      <div id="calculator">
        <Form layout="inline">
          <PushUps updatePushUpsReps={actions.updatePushUpsReps} />
          <SitUps updateSitUpsReps={actions.updateSitUpsReps} />
          <Run updateRunTime={actions.updateRunTime} />
          <Button
            type="primary"
            shape="circle"
            icon="calculator"
            id="calculate"
            onClick={actions.calculateScore}
          />
        </Form>
        {result}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
