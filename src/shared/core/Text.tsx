import React, { memo, useMemo } from 'react';

import styled, { css } from 'styled-components/native';

import { TextProps } from '@core/types';

const Text: React.FC<TextProps> = ({ children, type, ...props }) => {
  const defaultPropsByTextType = useMemo<Omit<TextProps, 'children'>>(() => {
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
        return {};
    }
  }, []);

  return (
    <StyledText {...defaultPropsByTextType} {...props}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.Text<TextProps>`
  ${({ theme: { colors, fonts }, color, size, weight, type, family }) => css`
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
`;

export default memo(Text);
