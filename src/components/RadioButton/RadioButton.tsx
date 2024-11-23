import React, {useCallback} from 'react';
import {
  Text,
  TouchableOpacity,
  ViewStyle,
  View,
  StyleProp,
  StyleSheet,
} from 'react-native';
import {BundleIconSetName, Icon} from '@src/components';

export type Item = {
  label: string;
  value: string;
};

interface RadioButtonProps {
  listData: Item[];
  colorInactive?: string;
  colorActive?: string;
  iconActive?: string;
  style?: StyleProp<ViewStyle>;
  onChangeValue: (value: Item) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const _RadioButton: React.FC<RadioButtonProps> = ({
  listData,
  colorInactive = '#7C7C7C',
  colorActive = '#FBAF17',
  style,
  onChangeValue,
  containerStyle,
}) => {
  const [valueChecked, setValueChecked] = React.useState<Item>();

  const handleChangeRadio = useCallback(
    (item: Item) => () => {
      setValueChecked(item);
      onChangeValue(item);
    },
    [onChangeValue],
  );

  return (
    <View style={containerStyle}>
      {listData.map((item: Item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.radioItem, style]}
          onPress={handleChangeRadio(item)}>
          <Icon
            bundle={BundleIconSetName.MATERIAL_ICONS}
            name={
              valueChecked?.value === item.value
                ? 'radio-button-checked'
                : 'radio-button-unchecked'
            }
            size={20}
            color={
              valueChecked?.value === item.value ? colorActive : colorInactive
            }
          />
          <Text
            style={[
              styles.label,
              {
                color:
                  valueChecked?.value === item.value
                    ? colorActive
                    : colorInactive,
              },
            ]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const RadioButton = React.memo(_RadioButton);

const styles = StyleSheet.create({
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  label: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});
