import {Dimensions, Platform} from 'react-native';

export const appConfig = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
  isAndroid: Platform.OS === "android",
  isiOS: Platform.OS === "ios",
}
