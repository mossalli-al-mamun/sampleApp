import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';
import Layout from '../../constants/Layout';

class HeaderProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/Profile/rectangle3x.png')}
          style={styles.headerImage}
        >
          <View style={styles.profileImageView}>
            <Image
              source={{
                uri:
                  'https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }}
              style={styles.profileImage}
            />
          </View>
        </ImageBackground>

        <View style={styles.contentView}>
          <Text style={styles.nameText}>{this.props.name}</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.5}
            onPress={() => this.props.onPress()}
          >
            <Text style={{ color: '#4072ec', fontSize: 15 }}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horozontalLine} />
      </View>
    );
  }
}
HeaderProfile.navigationOptions = {
  header: null
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  headerImage: {
    width: Layout.window.width,
    height: 155,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },
  profileImageView: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 2,
    top: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 5,
    borderWidth: 2
  },

  profileImage: {
    height: 90,
    width: 90,
    borderRadius: 45
  },

  contentView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  nameText: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10
  },
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#4072ec',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 105
  },
  horozontalLine: {
    height: 2,
    width: Layout.window.width,
    backgroundColor: 'rgba(168, 168, 168, 0.27)',
    marginTop: 20
  }
});
