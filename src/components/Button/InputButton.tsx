import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {InputButtonProps} from '.';
import {Icon} from '@src/components';

const _InputButton: React.FC<InputButtonProps> = ({
  onPress,
  placeholder,
  containerStyle,
  value,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {value ? (
        <Text style={styles.value}>{value}</Text>
      ) : (
        <Text style={styles.placeholder}>{placeholder}</Text>
      )}

      <Icon name={'chevron-down'} size={20} color={'#9e9e9e'} />
    </TouchableOpacity>
  );
};

export const InputButton = React.memo(_InputButton);
const styles = StyleSheet.create({
  container: {
    borderColor: '#dadada',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  placeholder: {
    fontSize: 14,
    color: '#9e9e9e',
  },
  value: {
    fontSize: 14,
    color: '#171717',
  },
});
