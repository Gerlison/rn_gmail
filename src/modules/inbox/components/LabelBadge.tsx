import React, { memo } from 'react';
import styled, { css } from 'styled-components/native';

import Text from '@core/Text';

interface Props {
  children: React.ReactText;
}

const LabelBadge: React.FC<Props> = ({ children }) => {
  return (
    <S.Container>
      <Text size="SMALL" color="DARKER">
        {children}
      </Text>
    </S.Container>
  );
};

const S = {
  Container: styled.View`
    border-radius: 4px;

    ${({ theme: { colors, metrics } }) => css`
      padding: ${metrics.SMALLEST / 2}px ${metrics.SMALLER}px;
      background-color: ${colors.LIGHT};
    `};
  `,
};

export default memo(LabelBadge);
