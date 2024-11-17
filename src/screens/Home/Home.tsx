import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '@src/app';
import {increment, selectCount} from '@src/features/counter/counterSlice';

const _Home = () => {
  const counter = useAppSelector(selectCount)
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>{counter}</Text>

      <Text>Home screen</Text>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Count </Text>
      </TouchableOpacity>
    </View>
  )
}

const Home = React.memo(_Home)
export default Home
