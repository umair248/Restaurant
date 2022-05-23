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
import apifunctions from '../../../redux/services/apifunctions';
import {useDispatch} from 'react-redux';
import {login} from '../../../redux/actions/auth';

const Login = props => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(inputs))
      .then(res => {
        props.navigation.navigate('Home');
      })
      .catch(error => {
        //console.log(error.response.data);
        alert('Invalid login credentials!');
      });
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/bg.png')}>
      <SafeAreaView style={styles.bgStyle}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Login</Text>
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
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register Now</Text>
          </TouchableOpacity>
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

export default Login;

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
