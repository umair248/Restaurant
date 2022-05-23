import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const RestaurantsDetail = props => {
  const [resData, SetResData] = useState();
  let data = props.route.params.restuarant;

  console.log(data);

  return (
    <ImageBackground source={require('./assets/bg.png')} style={styles.bgStyle}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.headingView}>
            <Text style={styles.resText}>{data.Name}</Text>
          </View>
          <View style={styles.logoView}>
            <Image
              style={{width: 120, height: 120}}
              source={{uri: data.LogoUrl}}></Image>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.resText}> City : {data.Address.City}</Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.resText}>
              FirstLine : {data.Address.FirstLine}
            </Text>
          </View>
          <View style={styles.headingView}>
            <Text style={styles.resText}>
              Postcode : {data.Address.Postcode}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RestaurantsDetail;

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
    alignItems: 'center',
    paddingTop: 40,
  },
  resText: {
    fontSize: hp('2.5%'),
    fontWeight: '800',
    color: 'skyblue',
  },
  logoView: {
    width: wp('80%'),
    alignItems: 'center',
  },
});
