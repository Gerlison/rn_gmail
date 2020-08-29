import React, { memo, useMemo } from 'react';

import styled, { css } from 'styled-components/native';

import { TextProps } from '@core/types';

const Text = ({ children, type, ...props }: TextProps) => {
  const defaultPropsByTextType = useMemo(() => {
    switch (type) {
      case 'label':
        return {
          size: 'SMALL',
          color: 'DARK',
          family: 'MEDIUM',
          type,
        };
      case 'title':
        return {
          color: 'DARKEST',
          size: 'LARGE',
        };

      default:
        return {
          color: 'DARKEST',
          size: 'MEDIUM',
        };
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
    color: ${colors[color]};

    font-size: ${typeof size === 'number' ? size : fonts.sizing[size]}px;

    font-family: ${fonts.styling[family || 'REGULAR']};
    font-weight: ${weight || '400'};

    ${type === 'label' &&
    css`
      text-transform: uppercase;
      letter-spacing: 1.5px;
    `}
  `}
`;

export default memo(Text);
