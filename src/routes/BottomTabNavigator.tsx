import React, {useCallback} from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import type {BottomTabList} from '@src/types/tabs-list';
import Collection from '@src/screens/Collection';
import CreateNewWord from '@src/screens/CreateNewWord';
import {Icon} from '@src/components';

const bottomTabList: BottomTabList[] = [
  {
    name: 'Collection',
    component: Collection,
    icon: 'apps-outline',
    selectedIcon: 'apps',
  },
  {
    name: 'CreateNewWord',
    component: CreateNewWord,
    icon: 'add-circle-outline',
    selectedIcon: 'add-circle',
  },
];

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const renderIcon = useCallback(
    (tabItem: BottomTabList) =>
      (props: {focused: boolean; color: string; size: number}) => {
        let iconName;
        if (props.focused) {
          iconName = tabItem.selectedIcon || tabItem.icon;
        } else {
          iconName = tabItem.icon;
        }

        return <Icon name={iconName} size={props.size} color={props.color} />;
      },
    [],
  );

  const tabItemOptions: (item: BottomTabList) => BottomTabNavigationOptions =
    useCallback(
      (item: BottomTabList) => {
        return {
          tabBarIcon: renderIcon(item),
          tabBarHideOnKeyboard: true,
          animation: 'shift',
          lazy: true,
          headerShown: false,
          tabBarActiveTintColor: '#33312E',
          tabBarInactiveTintColor: '#909591'
        };
      },
      [renderIcon],
    );

  return (
    <BottomTab.Navigator screenOptions={{}}>
      {bottomTabList.map((item: BottomTabList, index: number) => (
        <BottomTab.Screen
          key={item.name || index}
          name={item.name}
          component={item.component}
          options={tabItemOptions(item)}
        />
      ))}
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
