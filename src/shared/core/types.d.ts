import React from 'react';
import { TextProps as DefaultTextProps } from 'react-native';
import fonts from '@styles/fonts';
import colors from '@styles/colors';

export type Theme = typeof colors.LIGHT_THEME;

export interface User {
  id: string;
  name: string;
  address: string;
}

export interface MailLabel {
  id: string;
  name: string;
  mailTotal: number;
  mailUnread: number;
  cosmetic: {
    icon: string;
    textColor: string;
    backgroundColor: string;
  };
}

export interface Mail {
  id: string;
  labelIds: string[];
  date: Date;
  from: User;
  to: User;
  subject: string;
  body: string;
}
