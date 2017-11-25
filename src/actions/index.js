export const UPDATE_PUSHUPS_REPS = 'UPDATE_PUSHUPS_REPS';
export const UPDATE_SITUPS_REPS = 'UPDATE_SITUPS_REPS';
export const UPDATE_RUN_TIME = 'UPDATE_RUN_TIME';
export const CALCULATE_SCORE = 'CALCULATE_SCORE';

export function updatePushUpsReps(reps) {
  return {
    type: UPDATE_PUSHUPS_REPS,
    payload: reps
  }
}

export function updateSitUpsReps(reps) {
  return {
    type: UPDATE_SITUPS_REPS,
    payload: reps
  }
}

export function updateRunTime(time) {
  return {
    type: UPDATE_RUN_TIME,
    payload: time
  }
}

export function calculateScore() {
  return {
    type: CALCULATE_SCORE
  }
}
