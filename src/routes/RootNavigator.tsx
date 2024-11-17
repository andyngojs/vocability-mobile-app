import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@src/screens/Home';

const RootStack = createNativeStackNavigator()

const RootNavigator = () => {
  console.log("render RootNavigator");
  return (
    <RootStack.Navigator initialRouteName={'Home'} >
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  )
}

export default RootNavigator;
