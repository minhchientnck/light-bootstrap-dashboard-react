import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as ChienDichReducers from './views/ChienDich/Reducers';

export default combineReducers({
  form: formReducer,
  ChienDichReducers
});
