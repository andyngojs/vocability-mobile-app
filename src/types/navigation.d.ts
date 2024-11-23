import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NavigationProp} from '@react-navigation/native';

export type BottomTabParamsList = {
  Collection: undefined;
  CreateNewWord: undefined;
};

export type RootStackParamsList = {
  Home: undefined;
  BottomTab: BottomTabParamsList;
  CreateNewCollection: undefined;
};

export type NavigationScreenProps = NavigationProp<RootStackParamsList>;
export type NavigationBottomTabProps = NavigationProp<BottomTabParamsList>;

export type ScreenProps<T extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, T>;
export type AppBottomTabScreenProps<T extends keyof BottomTabParamsList> =
  BottomTabScreenProps<BottomTabParamsList, T>;
