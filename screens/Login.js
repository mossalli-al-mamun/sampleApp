import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Layout from '../constants/Layout';
import BackGround from '../components/BackGround';
import MyButton from '../components/MyButton';
import { KEYS } from '../src/utils/constants';
import { handleLogin } from '../src/redux/actions/authActions';

class Login extends React.Component {
  state = {
    username: null,
    password: null
  };
  handleSubmit = () => {
    const { username, password } = this.state;

    if (username && password) {
      const payload = {
        username,
        password
      };
      const { navigation, handleLogin } = this.props;
      handleLogin({ payload, navigation });
    } else {
      alert('Please insert username and password.');
    }
  };
  render() {
    const { username, password } = this.state;
    return (
      <BackGround colors={['#4072ec', '#224eba']} style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <View style={styles.inputView}>
            <TextInput
              style={[styles.buttonText, { color: '#2f2f2f' }]}
              placeholder="user name"
              onChangeText={username => this.setState({ username })}
              value={username}
              placeholderTextColor="#6b6b6b"
            />
            <Image source={require('../assets/images/Login/username-ic.png')} />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={[styles.buttonText, { color: '#2f2f2f' }]}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
              value={password}
              placeholder="password"
              placeholderTextColor="#6b6b6b"
            />
            <Image source={require('../assets/images/Login/lock-1.png')} />
          </View>

          <MyButton
            buttonTitle="Login"
            buttonPress={() => this.handleSubmit()}
          />

          <TouchableOpacity onPress={() => alert('No action placed here')}>
            <Text
              style={[styles.noticeText, { textDecorationLine: 'underline' }]}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.27)',
              height: 2,
              width: Layout.window.width
            }}
          />
          <Text style={styles.noticeText}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Signup')}
          >
            <Text style={styles.noticeHighlightText}>Signup Now</Text>
          </TouchableOpacity>
        </View>
      </BackGround>
    );
  }
}

Login.navigationOptions = {
  header: null
};

const mapState = ({ loading }) => ({
  submiting: loading[KEYS.LOGIN]
});

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      handleLogin
    },
    dispatch
  );

export default connect(mapState, mapDispatch)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 60
  },
  inputView: {
    height: 55,
    flexDirection: 'row',
    marginTop: 15,
    width: Layout.window.width - 35,
    paddingLeft: 17,
    paddingRight: 17,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 5
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5
  },
  noticeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 18,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center'
  },
  noticeHighlightText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
});
