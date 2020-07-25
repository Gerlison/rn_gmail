import React from 'react';

import styled, { css } from 'styled-components/native';

import { sizing, styling } from '@styles/fonts';

import { TextProps, Styled } from '@core/types';

const Text = ({ children, type, ...props }: TextProps) => {
  const renderComponent = (style: TextProps = {}) => (
    <StyledText {...style} {...props}>
      {children}
    </StyledText>
  );

  switch (type) {
    case 'label':
      return renderComponent({
        size: 'SMALL',
        color: 'DARKER',
        weight: 'ROBOTO_MEDIUM',
        type,
      });
    case 'title':
      return renderComponent({
        color: 'DARKEST',
        size: 'LARGE',
      });

    default:
      return renderComponent();
  }
};

const StyledText = styled.Text<Styled<TextProps>>`
  color: ${({ theme, color }) => theme[color || 'DARKEST']};
  font-size: ${({ size }) =>
    (typeof size === 'string' ? sizing[size] : size) || sizing.MEDIUM}px;
  font-family: ${({ weight }) => styling[weight || 'ROBOTO_REGULAR']};
  ${({ type }) =>
    type === 'label' &&
    css`
      text-transform: uppercase;
      letter-spacing: 1.5px;
    `}
`;

export default Text;
