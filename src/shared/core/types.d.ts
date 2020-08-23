import React from 'react';
import { TextProps as DefaultTextProps } from 'react-native';
import { styling, sizing } from '@styles/fonts';
import { LIGHT_THEME } from '@styles/colors';

/**
 *
 * @Core
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
