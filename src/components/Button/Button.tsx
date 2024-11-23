import React, {useCallback, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {ButtonProps} from '.';

const _Button: React.FC<ButtonProps> = ({
  children,
  title = '',
  onPress = () => {},
  iconLeft,
  useTouchableHighlight,
  style,
  disabled = false,
}) => {
  const buttonContainerStyle = useMemo(
    () => ({
      backgroundColor: disabled ? '#eeeeee' : '#171717',
    }),
    [disabled],
  );

  const WrapperComponent = useMemo(() => {
    return useTouchableHighlight ? TouchableHighlight : TouchableOpacity;
  }, [useTouchableHighlight]);

  const renderContent = useCallback(() => {
    return (
      <>
        {iconLeft && iconLeft}
        <Text style={styles.title}>{title}</Text>
      </>
    );
  }, [title, iconLeft]);

  return (
    <WrapperComponent
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, buttonContainerStyle, style]}>
      {title ? renderContent() : children}
    </WrapperComponent>
  );
};
export const Button = React.memo(_Button);
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    marginLeft: 5,
  },
  contentView: {},
});
