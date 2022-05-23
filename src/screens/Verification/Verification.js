import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Verification = props => {
  const [code, setCode] = useState(null);

  const handleCode = () => {
    if (code == 12345) {
      props.navigation.navigate('Login');
    } else {
      alert('Please Enter correct Code');
    }
  };

  return (
    <ImageBackground
      source={require('./assets/bg.png')}
      style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.textStyle}>Verification</Text>
      </View>
      <View style={styles.inpView}>
        <View style={styles.inpSpace}>
          <TextInput
            onChangeText={text => setCode(text)}
            placeholder="Enter Code Here"
            style={styles.textinp}></TextInput>
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={() => handleCode()} style={styles.btn}>
          <Text style={styles.textColor}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    height: hp('20%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: '800',
    fontSize: hp('3%'),
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
});
