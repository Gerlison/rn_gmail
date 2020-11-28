import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';

import MailBox from '@modules/inbox/screens/MailBox';
import MailView from '@modules/inbox/screens/MailView/MailView';

import { Mail } from '@core/types';
import { DrawerParamList } from '@navigation/types';

export type InboxParamList = {
  MailBox: undefined;
  MailView: {
    mail: Mail;
  };
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
      <Stack.Screen
        name="MailView"
        children={() => <MailView selectedLabel={selectedLabel} />}
      />
    </Stack.Navigator>
  );
};
