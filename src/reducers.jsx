const initialState = {}

const todoApp = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }
  return state;
};

export default todoApp;
