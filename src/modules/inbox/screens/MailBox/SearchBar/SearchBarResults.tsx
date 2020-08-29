import React from 'react';
import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';

import Text from '@core/Text';

interface Props {
  focused: boolean;
  animation: Animated.Node<number>;
}

const SearchBarResults = ({ animation, focused }: Props) => {
  return (
    <S.Container
      style={{
        opacity: animation,
      }}
    >
      <Text type="label">Recent mail searches</Text>
      {/* #TODO while is not @focused, does not render any results  */}
    </S.Container>
  );
};

const S = {
  Container: styled(Animated.View)`
    ${({ theme: { metrics, colors } }) => css`
      width: 100%;
      padding: ${metrics.SMALL}px;
      border-top-width: 1px;
      border-color: ${colors.LIGHT};
      background-color: ${colors.BACKGROUND};
    `}
  `,
};

export default SearchBarResults;
