import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Layout from '../constants/Layout';

class BackGround extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['#4072ec', '#224eba']}
        style={[styles.container, this.props.style]}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Sample-app</Text>
          <Image
            source={require('../assets/images/ChooseProfile/group-copy.png')}
          />
        </View>

        {this.props.children}
      </LinearGradient>
    );
  }
}

export default BackGround;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 40
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: Layout.window.width
    // backgroundColor: "red"
  },

  logoText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: '8%',
    marginBottom: '10%'
  }
});
