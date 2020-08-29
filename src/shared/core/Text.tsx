import React, { memo, useMemo } from 'react';

import styled, { css } from 'styled-components/native';

import { TextProps } from '@core/types';

type StyledTextProps = Omit<
  Required<Pick<TextProps, 'color' | 'size' | 'family' | 'weight'>> & TextProps,
  'children'
>;

const Text = ({ children, type, ...props }: TextProps) => {
  const defaultPropsByTextType = useMemo<StyledTextProps>(() => {
    switch (type) {
      case 'label':
        return {
          size: 'SMALL',
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
        return {
          color: 'DARKEST',
          size: 'MEDIUM',
          family: 'REGULAR',
          weight: '400',
        };
    }
  }, []);

  return (
    <StyledText {...defaultPropsByTextType} {...props}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.Text<StyledTextProps>`
  ${({ theme: { colors, fonts }, color, size, weight, type, family }) => css`
    color: ${colors[color]};

    font-size: ${typeof size === 'number' ? size : fonts.sizing[size]}px;

    font-family: ${fonts.styling[family]};
    font-weight: ${weight};

    ${type === 'label' &&
    css`
      text-transform: uppercase;
      letter-spacing: 1.5px;
    `}
  `}
`;

export default memo(Text);
