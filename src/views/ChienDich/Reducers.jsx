import {
  START_TAO_CHIEN_DICH,
  TAO_CHIEN_DICH_SUCCESS,
  TAO_CHIEN_DICH_FAILURE,
} from './Events';

const initialState = {};
const actionHandlers = {};

actionHandlers[START_TAO_CHIEN_DICH] = () => ({
  ...initialState
});

actionHandlers[TAO_CHIEN_DICH_SUCCESS] = (state, action) => ({
  ...initialState,
  payload: action.payload,
});

actionHandlers[TAO_CHIEN_DICH_FAILURE] = (state, action) => ({
  ...initialState,
  error: action.error,
});

export default (state = initialState, action) => {
  console.log(action);
  const fn = actionHandlers[action.type];
  return fn ? fn(state, action) : state;
};