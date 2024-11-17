import React from 'react';
import {Text, View} from 'react-native';

const _CreateNewWord = () => {
  return (
    <View>
      <Text>CreateNewWord screen</Text>
    </View>
  )
}

const CreateNewWord = React.memo(_CreateNewWord)
export default CreateNewWord
