import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CheckBoxItem, CheckBoxListProps} from '.';
import {BundleIconSetName, Icon} from '@src/components';

const _CheckBoxList: React.FC<CheckBoxListProps> = ({
  checkBoxList,
  horizontal,
  containerStyle,
  checkboxContainerStyle,
  titleStyle,
  colorChecked = '#171717',
  colorUnChecked = '#dadada',
  onValueChange,
}) => {
  const [items, setItems] = useState<CheckBoxItem[]>(checkBoxList);

  const toggleCheckbox = (id: number, index: number) => {
    const result = items.map(item => {
      return item.id === id ? {...item, checked: !item.checked} : item;
    });

    setItems(result);

    if (onValueChange) {
      onValueChange(result.filter(item => item.checked));
    }
  };

  if (checkBoxList.length === 0 || items.length === 0) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        horizontal && styles.checkBoxListHorizontal,
        containerStyle,
      ]}>
      {items.map((item: CheckBoxItem, index: number) => (
        <View key={item.id || index} style={horizontal && styles.item}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.checkboxContainer, checkboxContainerStyle]}
            onPress={() => toggleCheckbox(item.id, index)}>
            <Icon
              bundle={
                item.checked
                  ? BundleIconSetName.ANT_DESIGN
                  : BundleIconSetName.FEATHER
              }
              name={item.checked ? 'checksquare' : 'square'}
              size={17}
              color={!item.checked ? colorUnChecked : colorChecked}
            />
            <Text style={[styles.checkboxText, titleStyle]}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export const CheckBoxList = React.memo(_CheckBoxList);

const styles = StyleSheet.create({
  container: {},
  checkBoxListHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  item: {
    width: '48%',
  },
  checkboxContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 12,
    color: '#333',
  },
});
