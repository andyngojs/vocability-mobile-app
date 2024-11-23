import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export * from './CheckBoxList';

export interface CheckBoxItem {
  id: number;
  name: string;
  checked: boolean;
}

export interface CheckBoxListProps {
  checkBoxList: CheckBoxItem[];
  horizontal?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  checkboxContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  colorChecked?: string;
  colorUnChecked?: string;
  onValueChange?: (value: CheckBoxItem[]) => void;
}
