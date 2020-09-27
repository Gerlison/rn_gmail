import React, { memo, useMemo } from 'react';
import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

import { Theme } from '@core/types';
import fonts, { Sizing, Styling } from '@styles/fonts';

interface Props extends TextProps {
  color?: keyof Theme;
  type?: 'label' | 'title';
  size?: keyof Sizing | number;
  weight?: 'normal' | 'bold' | '200' | '400' | '500' | '600' | '700' | '800';
  family?: keyof Styling;
  children: React.ReactNode;
}

const Text: React.FC<Props> = ({ children, type, ...props }) => {
  const defaultPropsByTextType = useMemo<Omit<Props, 'children'>>(() => {
    switch (type) {
      case 'label':
        return {
          size: 'SMALLER',
          color: 'DARK',
          family: 'MEDIUM',
          weight: '400',
          type,
        };
      case 'title':
        return {
          color: 'DARKEST',
          size: 'LARGE',
          family: 'REGULAR',
          weight: '400',
        };

      default:
        return {};
    }
  }, []);

  return (
    <StyledText {...defaultPropsByTextType} {...props}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.Text<Props>`
  ${({ theme: { colors }, color, size, weight, type, family }) => css`
    color: ${colors[color || 'DARKEST']};

    font-size: ${typeof size === 'number'
      ? size
      : fonts.sizing[size || 'MEDIUM']}px;

    font-family: ${fonts.styling[family || 'REGULAR']};
    font-weight: ${weight || 400};

    ${type === 'label' &&
    css`
      text-transform: uppercase;
      letter-spacing: 1.5px;
    `}
  `}
` as React.FC<Props>;

export default memo(Text);
