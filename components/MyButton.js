import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import Layout from '../constants/Layout';
import { LinearGradient } from 'expo-linear-gradient';

const MyButton = props => {
  return (
    <TouchableOpacity
      onPress={() => props.buttonPress()}
      style={styles.buttonView}
      activeOpacity={0.6}
    >
      <LinearGradient
        colors={['#39b7e9', '#4bdfc1']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.buttnGradient}
      >
        <Text style={styles.buttonText}>{props.buttonTitle}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

MyButton.navigationOptions = {
  header: null
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonView: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttnGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: Layout.window.width - 35,
    height: 55
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5
  }
});
