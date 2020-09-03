import React, { memo } from 'react';
import styled, { css } from 'styled-components/native';

import { Theme } from './types';

interface Props {
  flex: number;
  direction: 'column' | 'row';
  justify: 'flex-start' | 'flex-end' | 'center';
  align: 'flex-start' | 'flex-end' | 'center';
  background: keyof Theme;
  children: React.ReactNode;
}

const Flex: React.FC<Partial<Props>> = ({ children, ...props }) => (
  <S.Container {...props}>{children}</S.Container>
);

const S = {
  Container: styled.View<Partial<Props>>`
    ${(props) => css`
      flex: ${props.flex};
      direction: ${props.direction};
      justify: ${props.justify};
      align: ${props.align};
      background: ${props.background};
    `}
  `,
};

Flex.defaultProps = {
  flex: 1,
  direction: 'column',
  justify: 'flex-start',
  align: 'flex-start',
  background: 'BACKGROUND',
};

export default memo(Flex);
