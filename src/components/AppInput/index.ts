import {StyleProp, TextInputProps, ViewStyle} from 'react-native';

export * from './AppInput'

export interface AppInputProps extends TextInputProps {
  containerWrapperStyle?: StyleProp<ViewStyle>;
  label?: string;
  require?: boolean;
  inputContainerStyle?: StyleProp<ViewStyle>;
}
