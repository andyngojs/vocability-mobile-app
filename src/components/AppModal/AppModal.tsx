import React, {useCallback, useMemo} from 'react';
import {
  Modal,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from '@src/components';
import {appConfig} from '@src/app';

interface AppModalProps {
  children: React.ReactNode;
  title?: string;
  isVisible: boolean;
  onClose: () => void;
  fullScreen?: boolean;
  position?: 'center' | 'bottom';
  canPressBackdrop?: boolean;

  isShowAction?: boolean;
  titleCancelButton?: string;
  titleConfirmButton?: string;
  onPressCancel?: () => void;
  onPressConfirm?: () => void;
  modalViewStyle?: StyleProp<ViewStyle>;
  headerModalStyle?: StyleProp<ViewStyle>;
  showIconCloseModal?: boolean;
  coverScreen?: boolean;
}

const _AppModal: React.FC<AppModalProps> = ({
  children,
  title,
  isVisible,
  onClose,
  fullScreen,
  position = 'bottom',
  canPressBackdrop,
  isShowAction,
  onPressCancel = () => {},
  onPressConfirm = () => {},
  titleCancelButton = 'Cancel',
  titleConfirmButton = 'OK',
  modalViewStyle,
  showIconCloseModal = true,
  headerModalStyle,
  coverScreen,
}) => {
  const {top, bottom} = useSafeAreaInsets();

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const modalWithPositionStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      height: position === 'center' ? null : appConfig.height / 2,
      top: position === 'center' ? appConfig.height / 3 : null,
      borderRadius: position === 'center' ? 20 : 0,
      bottom: position === 'bottom' ? bottom : null,
    }),
    [position, bottom],
  );

  const modalContainerStyle: StyleProp<ViewStyle> = useMemo(() => {
    return {
      height: fullScreen ? '100%' : appConfig.height / 2,
      top: fullScreen ? top + 25 : null,
    };
  }, [fullScreen, top]);

  return (
    <Modal
      visible={isVisible}
      onRequestClose={handleClose}
      animationType={'slide'}
      hardwareAccelerated={true}
      statusBarTranslucent={true}
      transparent>
      <TouchableOpacity
        onPress={canPressBackdrop ? handleClose : () => {}}
        activeOpacity={1}
        style={styles.backdropContainer}
      />

      <SafeAreaView
        style={[
          styles.container,
          modalContainerStyle,
          !fullScreen && modalWithPositionStyle,
          modalViewStyle,
        ]}>
        <View style={[styles.headerModal, headerModalStyle]}>
          <Text style={styles.titleModal}>{title}</Text>

          {showIconCloseModal && (
            <TouchableOpacity onPress={onClose}>
              <Icon name={'close-outline'} size={25} color={'#000'} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.contentModal}>{children}</View>

        {isShowAction && (
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={onPressCancel}
              style={styles.buttonContainer}>
              <Text style={styles.textButton}>{titleCancelButton}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onPressConfirm}
              style={styles.buttonContainer}>
              <Text style={styles.textButton}>{titleConfirmButton}</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </Modal>
  );
};

export const AppModal = React.memo(_AppModal);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  backdropContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleModal: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  contentModal: {
    marginTop: 16,
    flex: 1,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buttonContainer: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
  },
});
