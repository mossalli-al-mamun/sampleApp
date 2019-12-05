import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import Layout from '../../constants/Layout';

class BodyProfile extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.itemContainer}>
          <View style={styles.iconView}>
            {this.props.icon}
            <Image
              source={this.props.iconImage}
              style={this.props.imageStyle}
            />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: '#6b6b6b', fontSize: 14 }}>
              {this.props.title}
            </Text>
            <TextInput
              style={styles.valueText}
              editable={this.props.editable}
              onChangeText={() => this.props.onChangeText()}
            >
              {this.props.value}
            </TextInput>
          </View>
        </View>

        <View style={styles.horozontalLine} />
      </View>
    );
  }
}

BodyProfile.navigationOptions = {
  header: null
};

export default BodyProfile;

const styles = StyleSheet.create({
  container: {
    padding: 20
    // backgroundColor: "red"
  },
  horozontalLine: {
    height: 2,
    width: Layout.window.width - 40,
    backgroundColor: 'rgba(168, 168, 168, 0.27)',
    marginTop: 20
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  iconView: {
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  valueText: { color: '#272727', fontSize: 18, marginTop: 6 }
});
