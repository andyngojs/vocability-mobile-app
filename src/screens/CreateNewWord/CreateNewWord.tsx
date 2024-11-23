import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppModal, Icon, NavBar} from '@src/components';
import {RadioButton} from '@src/components/RadioButton';

const partOfSpeech = [{
  label: 'Noun',
  value: 'noun',
}, {
  label: 'Adjective',
  value: 'adj'
}, {
  label: 'Adverse',
  value: 'adv'
}]

const _CreateNewWord = () => {
  const {bottom} = useSafeAreaInsets()
  const [isVisible, setIsVisible] = React.useState(false);
  const [params, setParams] = useState({
    newWord: '',
    meaning: '',
    note: ''
  })

  const handleChangeText = useCallback((field: string) => (text: string) => {
    setParams((prevState) => {
      return {
        ...prevState,
        [field]: text
      }
    })
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavBar title={'Create New Word'}  />

      <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 12, backgroundColor:'#fff', paddingBottom: bottom}}>
        <View style={styles.container}>
          <View style={{borderColor: '#dadada', borderWidth: 1, borderRadius: 10, backgroundColor: '#fff'}}>
            <TextInput placeholder={'Enter New Word'} value={params['newWord']} onChangeText={handleChangeText('newWord')} style={{fontSize: 14, paddingHorizontal: 16}} />
          </View>

          <TouchableOpacity onPress={() => setIsVisible(true)} style={{borderColor: '#dadada', borderWidth: 1, borderRadius: 10, backgroundColor: '#fff', marginTop: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
            paddingHorizontal: 12,
            paddingVertical: 8
          }}>
            <Text style={{fontSize: 14, color: '#171717', }} >Parts of speech</Text>

            <Icon name={'chevron-down'} size={20} color={'#171717'} />
          </TouchableOpacity>

          <View style={{borderColor: '#dadada', borderWidth: 1, borderRadius: 10, backgroundColor: '#fff', marginTop: 12}}>
            <TextInput placeholder={'Meaning'} value={params['meaning']} onChangeText={handleChangeText('meaning')} style={{fontSize: 14, paddingHorizontal: 16}} />
          </View>

          <View style={{borderColor: '#dadada', borderWidth: 1, borderRadius: 10, backgroundColor: '#fff', marginTop: 12, height: '50%'}}>
            <TextInput placeholder={'Note'} value={params['note']} onChangeText={handleChangeText('note')} style={{fontSize: 14, paddingHorizontal: 16, height: '100%'}} numberOfLines={2} multiline={true} />
          </View>
        </View>
      </ScrollView>

      <AppModal
        canPressBackdrop={true}
        position={'bottom'}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        title={'Choose part of speech'}>
          <RadioButton listData={partOfSpeech} onChangeValue={(value) => console.log(value)} />
      </AppModal>
    </SafeAreaView>
  )
}

const CreateNewWord = React.memo(_CreateNewWord)
export default CreateNewWord

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  }
})
