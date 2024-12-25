import React, {useCallback, useMemo, useState} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {appConfig} from '@src/app';
import {
  AppInput,
  AppModal,
  BundleIconSetName,
  Button,
  Icon,
  InputButton,
  NavBar,
  RadioButton,
} from '@src/components';
import {showMessage} from 'react-native-flash-message';

const partOfSpeech = [
  {
    label: 'Noun',
    value: 'noun',
  },
  {
    label: 'Adjective',
    value: 'adj',
  },
  {
    label: 'Adverse',
    value: 'adv',
  },
];

const _CreateNewWord = () => {
  const {bottom} = useSafeAreaInsets();
  const [isVisible, setIsVisible] = React.useState(false);
  const [isShowCollection, setIsShowCollection] = React.useState(false);
  const [params, setParams] = useState({
    newWord: '',
    partOfSpeech: '',
    collection: '',
    meaning: '',
    note: '',
  });

  const isDisableButton = useMemo(
    () => !params['meaning'] || !params['partOfSpeech'] || !params['newWord'],
    [params],
  );

  const handleAddWord = useCallback(() => {
    showMessage({
      message: 'Add new word',
      type: 'success',
      icon: 'success',
    });
  }, []);

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
    <SafeAreaView style={styles.container}>
      <NavBar title={'Create New Word'} />

      <KeyboardAvoidingView
        behavior={appConfig.isiOS ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.contentContainerWrapper, {paddingBottom: bottom}]}>
          <View style={styles.formContainer}>
            <AppInput
              placeholder={'Enter New Word'}
              value={params['newWord']}
              onChangeText={handleChangeText('newWord')}
            />

            <InputButton
              onPress={() => setIsVisible(true)}
              value={params['partOfSpeech']}
              placeholder={'Parts of speech'}
            />

            <InputButton
              onPress={() => setIsShowCollection(true)}
              value={params['collection']}
              placeholder={'Choose collection'}
            />

            <AppInput
              placeholder={'Meaning'}
              value={params['meaning']}
              onChangeText={handleChangeText('meaning')}
            />

            <AppInput
              inputContainerStyle={styles.inputContainer}
              placeholder={'Note'}
              value={params['note']}
              onChangeText={handleChangeText('note')}
              numberOfLines={2}
              multiline={true}
            />
          </View>
        </ScrollView>

        <Button
          onPress={handleAddWord}
          disabled={isDisableButton}
          style={[
            styles.buttonSubmit,
            {
              marginBottom: bottom + 16,
            },
          ]}
          title={'Add Word'}
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

      <AppModal
        canPressBackdrop={true}
        position={'bottom'}
        isVisible={isShowCollection}
        onClose={() => setIsShowCollection(false)}
        title={'Choose collection'}>

      </AppModal>

      <AppModal
        canPressBackdrop={true}
        position={'bottom'}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        title={'Choose part of speech'}>
        <RadioButton
          listData={partOfSpeech}
          currentValue={params['partOfSpeech']}
          onChangeValue={handleChangeText('partOfSpeech')}
        />
      </AppModal>
    </SafeAreaView>
  );
};

const CreateNewWord = React.memo(_CreateNewWord);
export default CreateNewWord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainerWrapper: {
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  formContainer: {
    marginTop: 16,
  },
  inputContainer: {
    height: '50%',
  },
  buttonSubmit: {
    marginHorizontal: 12,
    marginTop: 12,
  },
});
