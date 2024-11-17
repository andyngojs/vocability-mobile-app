import React, {useMemo} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import BottomTabNavigator from '@src/routes/BottomTabNavigator';
import Home from '@src/screens/Home';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  const screenOptions: NativeStackNavigationOptions = useMemo(
    () => ({
      headerShown: false,
      animation: 'ios_from_left',
    }),
    [],
  );

  return (
    <RootStack.Navigator
      initialRouteName={'BottomTab'}
      screenOptions={screenOptions}>
      <RootStack.Screen name="BottomTab" component={BottomTabNavigator} />
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
