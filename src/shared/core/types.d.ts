import React from 'react';
import {
  TouchableWithoutFeedbackProps,
  TextProps as DefaultTextProps,
  TextInputProps,
  TouchableOpacityProps,
  ImageProps as DefaultImageProps,
  ActivityIndicatorProps,
} from 'react-native';
import { styling, sizing } from '@styles/fonts';
import { Theme, ThemeState } from '@store/ducks/Theme/types';

/**
 *
 * @Core
 * Typing for core components
 */

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
