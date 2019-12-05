import { createAction } from 'redux-act';
//
import { KEYS } from '../../utils/constants';
import { setLoading } from './loadingAction';
import { authService } from '../../../App';
export const registerSuccess = createAction('registerSuccess');
export const loginSuccess = createAction('loginSuccess');

export const handleRegi = ({ payload, navigation }) => {
  return async dispatch => {
    const key = KEYS.REGISTER;
    try {
      dispatch(setLoading({ key, value: true }));

      const res = await authService
        .register(JSON.stringify(payload))
        .then(res => res.json());
      console.log('...........>>>>', res);
      dispatch(setLoading({ key, value: false }));
      if (res.id !== null) {
        dispatch(registerSuccess({ key: 'users', value: { res } }));
        alert('Congratulation');
        navigation.navigate('Login');
      } else {
        alert('Sorry server Error!');
      }
    } catch (errors) {
      console.error('ERROR****', errors);
    }
  };
};

export const handleLogin = ({ payload, navigation }) => {
  return async dispatch => {
    const key = KEYS.LOGIN;
    try {
      dispatch(setLoading({ key, value: true }));
      console.log('PRINT IN %s=====>', 'login', payload);
      const res = await authService
        .login(JSON.stringify(payload))
        .then(res => res.json());

      const { message, token } = res;
      console.log('login.....', token);
      dispatch(setLoading({ key, value: false }));
      if (token !== null) {
        dispatch(loginSuccess({ key: 'users', value: { res } }));
        navigation.navigate('Main');
      } else {
        alert(message);
      }
    } catch (err) {
      console.error('ERROR****', err);
    }
  };
};

export const updateProfile = ({ payload, navigation }) => {
  return async dispatch => {
    const key = KEYS.PROFILE;
    try {
      dispatch(setLoading({ key, value: true }));
      console.log('PRINT IN %s=====>', 'AuthActions', payload);
      const res = await authService
        .updateProfile(payload)
        .then(res => res.json());

      console.log('Update Profile....', res);
      // const { success, message, token, users } = res;
      // dispatch(setLoading({ key, value: false }));
      // if (success) {
      //   dispatch(registerSuccess({ key: 'users', value: { res } }));
      //   navigation.navigate('Main');
      // } else {
      //   alert(message);
      // }
    } catch (err) {
      console.error('ERROR****', err);
    }
  };
};
