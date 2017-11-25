import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button } from 'antd';

import * as Actions from '../actions';

import PushUps from './PushUps';
import SitUps from './SitUps';
import Run from './Run';

const PUSHUPS_SCORING = {
  '30': 16, '37': 18, '22': 11, '36': 18, '60': 25, '19': 8, '35': 18, '34': 17, '23': 12, '24': 13, '25': 14, '26': 15,
  '27': 15, '20': 9, '21': 10, '48': 21, '49': 22, '46': 21, '47': 21, '44': 20, '45': 21, '42': 20, '43': 20, '40': 20,
  '41': 20, '1': 0, '3': 0, '2': 0, '5': 0, '4': 0, '7': 0, '6': 0, '9': 0, '8': 0, '18': 6, '28': 15,
  '13': 0, '12': 0, '15': 1, '29': 16, '14': 0, '11': 0, '10': 0, '39': 19, '38': 19, '59': 24, '58': 24, '17': 4,
  '16': 2, '55': 23, '54': 23, '57': 24, '56': 23, '51': 22, '50': 22, '53': 23, '52': 22, '33': 17, '32': 17, '31': 16
}

class Calculator extends Component {
  render() {
    const { actions } = this.props;
    return (
      <div>
        <Form layout="inline" id="calculator">
          <PushUps updatePushUpsReps={actions.updatePushUpsReps} />
          <SitUps updateSitUpsReps={actions.updateSitUpsReps} />
          <Run updateRunTime={actions.updateRunTime} />
          <Button type="primary" shape="circle" icon="calculator" id="calculate"></Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    calculator: state.calculator
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
