import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

const Settings = () => {
  const user = useSelector(state => state.userReducer);

  return (
    <ImageBackground style={styles.bgStyle} source={require('./assets/bg.png')}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headingView}>
          <Text style={styles.TextStyle}> Settings</Text>
        </View>
        <View style={styles.inpView}>
          <View style={styles.inpSpace}>
            <TextInput
              onChangeText={text => setInputs({...inputs, email: text})}
              placeholder="Email"
              value={user.email}
              style={styles.textinp}></TextInput>
          </View>
          <View style={styles.inpSpace}>
            <TextInput
              onChangeText={text => setInputs({...inputs, password: text})}
              placeholder="Password"
              style={styles.textinp}></TextInput>
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity onPress={() => handleLogin()} style={styles.btn}>
            <Text style={styles.textColor}>Update</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Settings;

const styles = StyleSheet.create({
  bgStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headingView: {
    paddingVertical: hp('5%'),
  },
  TextStyle: {
    fontSize: hp('4%'),
    fontWeight: '800',
    color: 'white',
  },
  inpView: {
    paddingVertical: hp('5%'),
    alignItems: 'center',
  },
  textinp: {
    width: wp('70%'),
    backgroundColor: 'white',
  },
  inpSpace: {
    paddingVertical: hp('3%'),
  },
  btn: {
    width: wp('30%'),
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    alignItems: 'center',
  },
  textColor: {
    color: 'black',
  },
  registerText: {
    color: 'white',
  },
});
