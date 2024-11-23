import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {appConfig} from '@src/app';
import {Icon, AppModal} from '@src/components';
import {useNavigation} from '@react-navigation/native';
import {NavigationScreenProps} from '@src/types/navigation';

const _Collection = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const navigation = useNavigation<NavigationScreenProps>();

  const handleCreateCollection = useCallback(() => {
    navigation.navigate('CreateNewCollection');
  }, []);

  const handleHideModalCreateCollection = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleGreeting}>Welcome back!</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonContainer}
          onPress={handleCreateCollection}>
          <Icon name={'add-circle'} size={18} color="#fff" />
          <Text style={{fontSize: 14, color: '#fff'}}>Create collection</Text>
        </TouchableOpacity>
      </View>

      <AppModal
        position={'bottom'}
        isVisible={isVisible}
        onClose={handleHideModalCreateCollection}
        title={'Create collection'}>
        <Text>Hhello ddjdj</Text>
        <Text>Hhello ddjdj</Text>
        <Text>Hhello ddjdj</Text>
        <Text>Hhello ddjdj</Text>
      </AppModal>
    </SafeAreaView>
  );
};

const Collection = React.memo(_Collection);
export default Collection;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#000',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  titleGreeting: {
    fontSize: 20,
    color: '#fff',
  },
  buttonContainer: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#888',
    marginTop: 24,
  },
});
