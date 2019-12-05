import base64 from 'react-native-base64';
import { REGISTER, LOGIN, UPDATE_PROFILE } from '../utils/api';

const WP_USER = 'admin';
const WP_PASS = 'password';
const auth = base64.encode(`${WP_USER}:${WP_PASS}`);

export class AuthService {
  async register(value) {
    return await fetch(REGISTER, {
      method: 'post',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json'
      },
      body: value
    });
  }

  async login(value) {
    return await fetch(LOGIN, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: value
    });
  }

  async updateProfile(value) {
    return await fetch(UPDATE_PROFILE, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${value}`
      }
    });
  }
}
