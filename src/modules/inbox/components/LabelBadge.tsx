import React, { memo } from 'react';
import styled, { css } from 'styled-components/native';

import Text from '@core/Text';

interface Props {
  children: React.ReactText;
}

const LabelBadge: React.FC<Props> = ({ children }) => {
  return (
    <S.Container>
      <Text size="SMALLER" color="DARKER">
        {children}
      </Text>
    </S.Container>
  );
};

const S = {
  Container: styled.View`
    border-radius: 4px;

    ${({ theme: { colors, metrics } }) => css`
      padding: 0px ${metrics.SMALLER}px;
      background-color: ${colors.LIGHTER};
    `};
  `,
};

export default memo(LabelBadge);
