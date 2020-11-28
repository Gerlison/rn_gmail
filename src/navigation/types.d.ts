import { MailLabel } from '@modules/inbox/types';

export type DrawerParamList = {
  Home: {
    selectedLabel: MailLabel;
  };
  Settings: undefined;
};

export type RootStackParamList = {
  Drawer: undefined;
  Compose: undefined;
};
