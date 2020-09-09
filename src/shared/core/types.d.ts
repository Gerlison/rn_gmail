import React from 'react';
import { TextProps as DefaultTextProps } from 'react-native';
import fonts from '@styles/fonts';
import colors from '@styles/colors';

/**
 *
 * @Components
 * Typing for core components
 */

export type Theme = typeof colors.LIGHT_THEME;

export interface TextProps {
  color?: keyof Theme;
  type?: 'label' | 'title';
  size?: keyof typeof fonts.sizing | number;
  weight?: 'normal' | 'bold' | '200' | '400' | '500' | '600' | '700' | '800';
  family?: keyof typeof fonts.styling;
  children: React.ReactNode;
}

export interface IconProps {
  color?: keyof Theme;
  name: string;
  size?: keyof typeof fonts.sizing | number;
}

/**
 *
 * @Types
 * Types for data
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
