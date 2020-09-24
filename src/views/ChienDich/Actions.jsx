import {
  START_TAO_CHIEN_DICH,
  TAO_CHIEN_DICH_SUCCESS,
  TAO_CHIEN_DICH_FAILURE,
} from './Events';

export const startTaoChienDich = () => ({
  type: START_TAO_CHIEN_DICH,
});

export const taoChienDichSuccess = payload => ({
  type: TAO_CHIEN_DICH_SUCCESS,
  payload,
});

export const taoChienDichFailure = error => ({
  type: TAO_CHIEN_DICH_FAILURE,
  error,
});

export const taoChienDich = data => dispatch => {
  dispatch(startTaoChienDich());
  dispatch(taoChienDichSuccess(data));
}
