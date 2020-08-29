import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MailBox from '@modules/inbox/screens/MailBox';
import MailView from '@modules/inbox/screens/MailView/MailView';

import { RouteProp } from '@react-navigation/core';
import { DrawerParamList } from '@navigation/types';

export type InboxParamList = {
  MailBox: undefined;
  MailView: undefined;
};

type Route = RouteProp<DrawerParamList, 'Home'>;

const Stack = createStackNavigator<InboxParamList>();

export default ({ route }: { route: Route }) => {
  const {
    params: { selectedLabel },
  } = route;

  return (
    <Stack.Navigator initialRouteName="MailBox" headerMode="none">
      <Stack.Screen
        name="MailBox"
        children={() => <MailBox selectedLabel={selectedLabel} />}
      />
      <Stack.Screen name="MailView" component={MailView} />
    </Stack.Navigator>
  );
};
