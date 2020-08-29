import React from 'react';
import { TextProps as DefaultTextProps } from 'react-native';
import { styling, sizing } from '@styles/fonts';
import { LIGHT_THEME } from '@styles/colors';

/**
 *
 * @Components
 * Typing for core components
 */

export type Theme = typeof LIGHT_THEME;

export type Styled<T = {}> = T & {
  theme: Theme & { currentTheme: string };
};

export interface TextProps extends DefaultTextProps {
  color?: keyof Theme;
  type?: 'text' | 'label' | 'title';
  size?: keyof typeof sizing | number;
  weight?: keyof typeof styling;
  children?: React.ReactNode;
}

/**
 *
 * @Types
 * Types for data structures
 */

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
  from: MailAuthor;
  to: MailAuthor;
  subject: string;
  body: string;
}
