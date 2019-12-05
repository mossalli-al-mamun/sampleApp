import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Home extends React.Component{
    render(){
        return(
            <View>
                <Text>Profile page</Text>
            </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


