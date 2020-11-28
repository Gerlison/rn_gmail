import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Inbox from '@modules/inbox';
import Compose from '@modules/compose';
import Settings from '@modules/settings';

import CustomDrawer from '@core/Drawer';

import { RootStackParamList, DrawerParamList } from '@navigation/types';
import { useTypedSelector } from '@store/index';

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  const selectedLabel = useTypedSelector((state) => state.labels.labels?.[0]);

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        initialParams={{
          selectedLabel,
        }}
        name="Home"
        component={Inbox}
      />
      <Drawer.Screen
        options={{ title: 'account-cog-outline' }}
        name="Settings"
        component={Settings}
      />
    </Drawer.Navigator>
  );
};

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Drawer" headerMode="none">
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Compose" component={Compose} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
