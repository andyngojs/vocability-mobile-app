import React, {useCallback} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {appConfig} from '@src/app';
import {AppInput, BundleIconSetName, Button, Icon, NavBar} from '@src/components';

const _CreateNewCollection = () => {
  const {bottom} = useSafeAreaInsets();
  const [params, setParams] = React.useState({
    collectionName: '',
  });

  const handleChangeText = useCallback(
    (field: string) => (text: string) => {
      setParams(prevState => {
        return {
          ...prevState,
          [field]: text,
        };
      });
    },
    [],
  );

  return (
    <SafeAreaView style={[styles.container]}>
      <NavBar title={'Create New Collection'} back />
      <KeyboardAvoidingView
        behavior={appConfig.isiOS ? 'padding' : 'height'}
        style={{flex: 1, marginHorizontal: 12}}>
        <AppInput
          placeholder={'collection name'}
          value={params['collectionName']}
          onChangeText={handleChangeText('collectionName')}
        />

        <Button
          onPress={() => {}}
          disabled={false}
          style={[
            styles.buttonSubmit,
            {
              marginBottom: bottom + 16,
            },
          ]}
          title={'Create new collection'}
          iconLeft={
            <Icon
              bundle={BundleIconSetName.IONICONS}
              name={'add-circle'}
              size={20}
              color={'#fff'}
            />
          }
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const CreateNewCollection = React.memo(_CreateNewCollection)
export default CreateNewCollection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonSubmit: {
    marginTop: 12,
  },
})
