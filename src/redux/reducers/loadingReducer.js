
import { createReducer } from 'redux-act';
import { setLoading } from '../actions/loadingAction';

const initialState = {
  app: true,
}

const loadingReducer = createReducer({
  [setLoading]: (state, payload) => ({ ...state, [payload.key]: payload.value })
}, initialState);

export default loadingReducer;