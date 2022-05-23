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
import {register} from '../../../redux/actions/auth';
import apifunctions from '../../../redux/services/apifunctions';
import api from '../../../redux/services/api';

const Register = props => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    return apifunctions
      .fetchPost(inputs, '/register')
      .then(res => {
        console.log(res.data);
        alert('Registeration Successful Verify your account');
        props.navigation.navigate('Verification');
      })
      .catch(err => {
        console.log(err.response.data);
        // alert(err.response.data.error);
      });
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/bg.png')}>
      <SafeAreaView style={styles.bgStyle}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Register </Text>
        </View>
        <View style={styles.inpView}>
          <View style={styles.inpSpace}>
            <TextInput
              onChangeText={text => setInputs({...inputs, email: text})}
              placeholder="Email"
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
            <Text style={styles.textColor}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgStyle: {
    flex: 1,
  },
  heading: {
    height: hp('15%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headingText: {
    color: 'white',
    fontSize: hp('4%'),
    fontWeight: '800',
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
