import {
  UPDATE_PUSHUPS_REPS,
  UPDATE_SITUPS_REPS,
  UPDATE_RUN_TIME
} from '../actions';

const initialState = {
  runTime: '10:30',
  pushupsReps: 30,
  situpsReps: 30
};

export default function calculator(state=initialState, action) {
  switch (action.type) {
    case UPDATE_PUSHUPS_REPS:
      return {
        ...state,
        pushupsReps: action.payload
      }
    case UPDATE_SITUPS_REPS:
      return {
        ...state,
        situpsReps: action.payload
      }
    case UPDATE_RUN_TIME:
      return {
        ...state,
        runTime: action.payload
      }
    default:
      return state;
  }
}
