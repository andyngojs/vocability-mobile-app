import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NavBarProps} from '.';
import {Icon} from '@src/components';
import {appConfig} from '@src/app';

const _NavBar: React.FC<NavBarProps> = ({title, back, primary}) => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View
      style={[
        styles.headerContainer,
        primary && styles.primaryHeaderContainer,
      ]}>
      {back && (
        <TouchableOpacity onPress={goBack}>
          <Icon
            name={
              appConfig.isAndroid
                ? 'arrow-back-outline'
                : 'chevron-back-outline'
            }
            style={[styles.icon, primary && styles.primaryHeaderText]}
          />
        </TouchableOpacity>
      )}

      <Text style={[styles.title, primary && styles.primaryHeaderText]}>
        {title}
      </Text>
    </View>
  );
};

export const NavBar = React.memo(_NavBar);

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#171717',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  title: {
    color: '#171717',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    fontSize: 20,
    color: '#171717',
  },
  primaryHeaderContainer: {
    backgroundColor: '#171717',
    shadowColor: '#fff',
  },
  primaryHeaderText: {
    color: '#fff',
  },
});
