import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export * from './InputButton';
export * from './Button';

export interface ButtonProps {
  title?: string;
  onPress?: () => void;
  iconLeft?: React.ReactNode;
  children?: React.ReactNode;
  useTouchableHighlight?: boolean;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export interface InputButtonProps {
  onPress?: () => void;
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
  value?: string;
}
