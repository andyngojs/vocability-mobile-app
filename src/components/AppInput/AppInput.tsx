import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {AppInputProps} from '.';
import {Color} from '@src/resources';

const _AppInput: React.FC<AppInputProps> = ({
  label,
  containerWrapperStyle,
  require,
  inputContainerStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerWrapperStyle]}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
          {require && <Text style={styles.asterisk}>*</Text>}
        </View>
      )}

      <View style={[styles.inputContainer, inputContainerStyle]}>
        <TextInput {...props} style={styles.input} />
      </View>
    </View>
  );
};

export const AppInput = React.memo(_AppInput);
const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  labelContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: -11,
    zIndex: 99,
    height: '40%',
    left: 15,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  label: {
    fontSize: 12,
    color: '#717171',
    lineHeight: 20,
  },
  asterisk: {
    fontSize: 12,
    color: Color.danger,
    lineHeight: 20,
    marginLeft: 2,
  },
  inputContainer: {
    borderColor: '#dadada',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingVertical: 2,
  },
  input: {
    fontSize: 14,
    paddingHorizontal: 16,
  },
});
