import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BackGround from '../components/BackGround';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import MyButton from '../components/MyButton';
import { KEYS } from '../src/utils/constants';
import { handleRegi } from '../src/redux/actions/authActions';

const fields = [
  { title: 'User Name' },
  { title: 'First Name' },
  { title: 'Last Name' },
  { title: 'Email' },
  { title: 'Password' }
];

class Signup extends React.Component {
  state = {
    username: null,
    email: null,
    password: null,
    first_name: null,
    last_name: null
  };
  handleRegAction = () => {
    const { username, email, password, first_name, last_name } = this.state;

    console.log('KKKKKK<<<<<<<<', email);

    if (username && password && email) {
      const payload = {
        username,
        email,
        password,
        first_name,
        last_name
      };

      const { navigation, handleRegi } = this.props;
      handleRegi({ payload, navigation });
    } else {
      alert('Please insert username and password.');
    }
  };
  render() {
    // console.log('state......', this.state.password);
    // console.log('state......', this.state.first_name);
    const { username, email, password, first_name, last_name } = this.state;
    return (
      <BackGround colors={['#4072ec', '#224eba']} style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <KeyboardAvoidingView enabled behavior="padding">
              {fields.map((items, key) => {
                return (
                  <View style={styles.inputView} key={key}>
                    <TextInput
                      style={[styles.buttonText, { color: '#2f2f2f' }]}
                      onChangeText={
                        items.title == 'User Name'
                          ? username => this.setState({ username })
                          : items.title == 'Email'
                          ? email => this.setState({ email })
                          : items.title == 'Password'
                          ? password => this.setState({ password })
                          : items.title == 'First Name'
                          ? first_name => this.setState({ first_name })
                          : items.title == 'Last Name'
                          ? last_name => this.setState({ last_name })
                          : null
                      }
                      placeholder={items.title}
                      placeholderTextColor={Colors.placeHolderText}
                      value={
                        items.title == 'Username'
                          ? username
                          : items.title == 'Email'
                          ? email
                          : items.title == 'Password'
                          ? password
                          : items.title == 'First Name'
                          ? first_name
                          : items.title == 'Last Name'
                          ? last_name
                          : null
                      }
                    />
                  </View>
                );
              })}

              <MyButton
                buttonTitle="Sign up"
                // buttonPress={() => this.props.navigation.navigate('Login')}
                buttonPress={() => this.handleRegAction()}
              />
            </KeyboardAvoidingView>
          </View>
          <View style={{ marginTop: 40, marginBottom: 10 }}>
            <View
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.27)',
                height: 2,
                width: Layout.window.width
              }}
            />
            <Text style={styles.noticeText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.noticeHighlightText}>Login Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </BackGround>
    );
  }
}

Signup.navigationOptions = {
  header: null
};

const mapState = ({ loading }) => ({
  submiting: loading[KEYS.REGISTER]
});

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      handleRegi
    },
    dispatch
  );

export default connect(mapState, mapDispatch)(Signup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputView: {
    height: 55,
    marginTop: 15,
    width: Layout.window.width - 35,
    paddingLeft: 17,
    paddingRight: 17,
    alignItems: 'flex-start',
    justifyContent: 'center',
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
