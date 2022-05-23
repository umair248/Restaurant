import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchBar from 'react-native-platform-searchbar';

const Home = props => {
  const [data, setData] = useState([]);

  const [resturant, setResturant] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [value, setValue] = useState('');
  const [search, setSearch] = useState(null);

  const initalRender = useRef(false);

  useEffect(() => {
    if (initalRender.current) {
      setIsLoading(true);
      getMoreData();
    } else {
      initalRender.current = true;
    }
    return () => {};
  }, [pageCurrent, search]);

  useEffect(() => {
    setResturant(resturant.concat(getResturants(data, 1)));
  }, [data]);

  useEffect(() => {
    setIsLoading(true);
    handleData();
  }, []);

  const getMoreData = () => {
    if (search) {
      setResturant(linearSearch(data, search), pageCurrent);
    } else {
      setResturant(resturant.concat(getResturants(data, pageCurrent)));
    }
    setIsLoading(false);
  };

  const handleData = () => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://theotterco.ca/apitest.json',
      headers: {},
    };

    axios(config)
      .then(res => {
        setData(res.data.Restaurants);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleLoadMore = () => {
    setPageCurrent(pageCurrent + 1);
    setIsLoading(true);
  };

  const linearSearch = (array, search_key) => {
    if (search_key) {
      const newData = array.filter(function (item) {
        const itemData = item.Name ? item.Name.toUpperCase() : ''.toUpperCase();
        const itemData2 = item.Postcode
          ? item.Postcode.toUpperCase()
          : ''.toUpperCase();
        const textData = search_key.toUpperCase();
        return (
          itemData.indexOf(textData) > -1 || itemData2.indexOf(textData) > -1
        );
      });
      setIsLoading(false);
      return newData;
    }
  };

  const getResturants = (data, whichPage) => {
    const perPage = 10;

    let count = whichPage * perPage;
    let output = [];
    for (let index = count - perPage; index < count; index++) {
      if (typeof data[index] == 'undefined') {
        continue;
      }
      output.push(data[index]);
    }
    return output;
  };

  const renderFooter = () => {
    return isLoading ? (
      <View
        style={{
          position: 'relative',
          // width: width,
          // height: height,
          paddingVertical: 20,
          borderTopWidth: 1,
          marginTop: 10,
          marginBottom: 10,
          borderColor: 'veryLightPink',
        }}>
        <ActivityIndicator animating size="large" />
      </View>
    ) : null;
  };

  return (
    <ImageBackground style={styles.bgStyle} source={require('./assets/bg.png')}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headingView}>
          <View>
            <Text style={styles.heading}>Restaurants</Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Settings')}>
            <Image
              style={styles.setting}
              source={require('./assets/settings.png')}
            />
          </TouchableOpacity>
        </View>

        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          theme="light"
          style={styles.searchBar}>
          {isLoading ? (
            <ActivityIndicator style={{marginRight: 10}} />
          ) : undefined}
        </SearchBar>

        <FlatList
          data={resturant}
          renderItem={({item}) => (
            <View style={{flex: 1, paddingBottom: 20}}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('RestaurantsDetail', {
                    restuarant: item,
                  })
                }>
                <Text style={styles.itemStyle}>{item.Name}</Text>
                <Text style={styles.itemStyle}>
                  {' '}
                  Post Code : {item.Postcode}
                </Text>
              </TouchableOpacity>
              <View style={styles.seperater} />
            </View>
          )}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          keyExtractor={(item, index) => index.toString()}
          ListFooterComponent={renderFooter}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('80%'),
    alignItems: 'center',
  },
  heading: {
    fontSize: hp('3%'),
    color: 'skyblue',
    fontWeight: '800',
  },
  setting: {
    width: 40,
    height: 40,
    tintColor: 'skyblue',
  },
  itemStyle: {
    color: 'white',
    paddingVertical: 10,
    fontWeight: '800',
    fontSize: hp('3%'),
  },
  seperater: {
    width: wp('80%'),
    height: 2,
    backgroundColor: 'white',
  },
  searchBar: {
    // paddingHorizontal: 15,
    width: wp('90%'),
  },
});
