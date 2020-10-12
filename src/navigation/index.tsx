import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Inbox from '@modules/inbox';
import Compose from '@modules/compose';
import Settings from '@modules/settings';

import CustomDrawer from '@core/Drawer';

import { RootStackParamList, DrawerParamList } from '@navigation/types';

const Drawer = createDrawerNavigator<DrawerParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={(props) => <CustomDrawer {...props} />}
  >
    <Drawer.Screen
      initialParams={{
        selectedLabel: {
          id: '1',
          name: 'Primary',
          mailTotal: 0,
          mailUnread: 0,
          cosmetic: {
            icon: 'inbox',
            textColor: '#E04444',
            backgroundColor: '#E0444420',
          },
        },
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

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Compose" headerMode="none">
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Compose" component={Compose} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
