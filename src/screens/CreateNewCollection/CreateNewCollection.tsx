import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavBar} from '@src/components';

const _CreateNewCollection = () => {
  return (
    <SafeAreaView>
      <NavBar title={'Create New Collection'} back primary />

    </SafeAreaView>
  )
}

const CreateNewCollection = React.memo(_CreateNewCollection)
export default CreateNewCollection;

const styles = StyleSheet.create({

})
