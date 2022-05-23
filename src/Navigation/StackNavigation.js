import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Home from '../screens/Home/Home';
import Register from '../screens/Register/Register';
import Verification from '../screens/Verification/Verification';
import Settings from '../screens/Settings/Settings';
import {useSelector} from 'react-redux';
import RestaurantsDetail from '../screens/Restaurants/RestaurantsDetail';

const Stack = createStackNavigator();
const RootNavigator = () => {
  const user = useSelector(state => state.userReducer);

  return (
    <Stack.Navigator initialRouteName={'Login'}>
      {user.isLoggedIn == false ? (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Verification"
            component={Verification}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              headerShown: true,
              headerTrnsparent: true,
              headerTitle: '',
            }}
          />
          <Stack.Screen
            name="RestaurantsDetail"
            component={RestaurantsDetail}
            options={{
              headerShown: true,
              headerTrnsparent: true,
              headerTitle: '',
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
export default RootNavigator;
