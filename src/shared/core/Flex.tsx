import React, { memo } from 'react';
import styled, { css } from 'styled-components/native';

import { Theme } from '@core/types';

interface Props {
  flex: number;
  flexDirection: 'column' | 'row';
  justify:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  align: 'flex-start' | 'flex-end' | 'center';
  background: keyof Theme;
  children: React.ReactNode;
}

const Flex: React.FC<Partial<Props>> = ({ children, ...props }) => (
  <S.Container {...props}>{children}</S.Container>
);

const S = {
  Container: styled.View<Partial<Props>>`
    ${({ theme, ...props }) => css`
      flex: ${props.flex};
      flex-direction: ${props.flexDirection};
      justify-content: ${props.justify};
      align-items: ${props.align};
      background: ${theme.colors[props.background || 'BACKGROUND']};
    `}
  `,
};

Flex.defaultProps = {
  flex: 1,
  flexDirection: 'column',
  justify: 'flex-start',
  align: 'flex-start',
};

export default memo(Flex);
