import React, {useMemo} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import BottomTabNavigator from '@src/routes/BottomTabNavigator';
import Home from '@src/screens/Home';
import CreateNewCollection from '@src/screens/CreateNewCollection';
import type {RootStackParamsList} from '@src/types/navigation';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  const screenOptions: NativeStackNavigationOptions = useMemo(
    () => ({
      headerShown: false,
      animation: 'slide_from_left',
    }),
    [],
  );

  return (
    <RootStack.Navigator
      initialRouteName={'BottomTab'}
      screenOptions={screenOptions}>
      <RootStack.Screen name="BottomTab" component={BottomTabNavigator} />
      <RootStack.Screen name="Home" component={Home} />

      <RootStack.Group>
        <RootStack.Screen
          name="CreateNewCollection"
          component={CreateNewCollection}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
