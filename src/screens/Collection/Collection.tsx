import React from 'react';
import {Text, View} from 'react-native';

const _Collection = () => {
  return (
    <View>
      <Text>Collection screen</Text>
    </View>
  )
}

const Collection = React.memo(_Collection)
export default Collection
