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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HeaderProfile from './ProfileComponent/HeaderProfile';
import BodyProfile from './ProfileComponent/BodyProfile';
import MyButton from '../components/MyButton';
import { MaterialIcons } from '@expo/vector-icons';
import { updateProfile } from '../src/redux/actions/authActions';
import { KEYS } from '../src/utils/constants';

class Profile extends React.Component {
  state = {
    editProfile: false,
    first_name: null,
    last_name: null
  };

  handleUpdateAction = () => {
    const { first_name, last_name } = this.state;

    if (first_name && last_name) {
      const payload = {
        first_name,
        last_name
      };
      const { navigation, updateProfile } = this.props;
      updateProfile({ payload, navigation });
    } else {
      alert('There have an error in jwt auth plagin with free wordpress theme');
    }
  };

  render() {
    const profile = this.props.profile;
    console.log('p.........', profile);

    return (
      <View style={styles.container}>
        <HeaderProfile
          name={profile.user_display_name}
          onPress={() =>
            this.setState({ editProfile: !this.state.editProfile })
          }
        />
        <ScrollView>
          <BodyProfile
            title="Email"
            iconImage={require('../assets/images/Profile/email-3x.png')}
            imageStyle={{ height: 22, width: 28 }}
            value={profile.user_email}
            onChangeText={first_name => this.setState({ first_name })}
            editable={false}
          />

          <BodyProfile
            style={{ paddingTop: 0 }}
            title={'First Name'}
            icon={
              <MaterialIcons name="person-outline" size={38} color="#9fa8da" />
            }
            value={
              profile.user_display_name !== null
                ? profile.user_display_name.split(' ', 1)
                : null
            }
            onChangeText={last_name => this.setState({ last_name })}
            editable={this.state.editProfile}
          />

          <BodyProfile
            style={{ paddingTop: 0 }}
            title="Last Name"
            icon={
              <MaterialIcons name="person-outline" size={38} color="#9fa8da" />
            }
            value={
              profile.user_display_name !== null
                ? profile.user_display_name.split(' ').reverse()[0]
                : nullreverse()[0]
            }
            editable={this.state.editProfile}
          />

          {this.state.editProfile && (
            <View style={styles.showButtnContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => this.setState({ editProfile: false })}
                activeOpacity={0.5}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => this.handleUpdateAction()}
                activeOpacity={0.5}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          )}
          {/* <MyButton
            buttonTitle="Logout"
            buttonPress={() => alert('No Action added here')}
          /> */}
        </ScrollView>
      </View>
    );
  }
}

Profile.navigationOptions = {
  header: null
};

const mapState = ({ loading, Auth }) => (
  console.log('auth.....', Auth),
  {
    submiting: loading[KEYS.UPDATE],
    profile: Auth.users.res
  }
);

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      updateProfile
    },
    dispatch
  );

export default connect(mapState, mapDispatch)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  showButtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20
  },
  cancelButton: {
    height: 45,
    width: 138,
    backgroundColor: '#f0575c',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  saveButton: {
    height: 45,
    width: 138,
    backgroundColor: '#242a37',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
