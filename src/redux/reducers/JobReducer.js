import * as types from '../../constants/JobConstants';


export const jobCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_JOB_REQUEST:
      return {  loading: true };

    case types.CREATE_JOB_SUCCESS:
      return { loading: false, job:action.payload };

    case types.CREATE_JOB_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const jobListReducer = (state = {}, action) => {
  switch (action.type) {
    case types.JOB_LIST_REQUEST:
      return {  loading: true };

    case types.JOB_LIST_SUCCESS:
      return { loading: false, jobs:action.payload };

    case types.JOB_LIST_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

