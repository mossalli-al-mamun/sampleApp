
import { createReducer } from 'redux-act';
import { registerSuccess, loginSuccess } from '../actions/authActions';

const initialState = {
  users: {},
}

const authReducer = createReducer({
  [registerSuccess]: (state, payload) => ({ ...state, [payload.key]: payload.value }),
  [loginSuccess]: (state, payload) => ({ ...state, [payload.key]: payload.value })
}, initialState);

export default authReducer;