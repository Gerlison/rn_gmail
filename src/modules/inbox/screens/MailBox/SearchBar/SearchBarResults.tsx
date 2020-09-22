import React from 'react';
import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';

import Text from '@core/Text';
import Pressable from '@core/Pressable';
import Icon from '@core/Icon';

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
      {focused && (
        <FlatList
          data={[{ id: '1' }]}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<S.Title>Recent mail searches</S.Title>}
          renderItem={() => (
            <S.Item>
              <S.IconContainer>
                <Icon name="history" size="SMALL" />
              </S.IconContainer>
              <Text color="DARK" size="LARGE">
                english
              </Text>
            </S.Item>
          )}
        />
      )}
    </S.Container>
  );
};

const S = {
  Container: styled(Animated.View)`
    ${({ theme: { colors } }) => css`
      width: 100%;
      border-top-width: 1px;
      border-color: ${colors.LIGHT};
      background-color: ${colors.BACKGROUND};
    `}
  `,
  Title: styled(Text).attrs({ type: 'label' })`
    ${({ theme: { metrics } }) => css`
      padding: ${metrics.SMALL}px;
    `}
  `,
  Item: styled(Pressable).attrs(({ theme: { colors } }) => ({
    android_ripple: {
      color: colors.REGULAR,
    },
  }))`
    width: 100%;
    flex-direction: row;
    align-items: center;

    ${({ theme: { metrics } }) => css`
      padding: ${metrics.SMALL}px ${metrics.SMALL}px;
    `}
  `,
  IconContainer: styled.View`
    border-radius: 20px;

    ${({ theme: { colors, metrics } }) => css`
      padding: ${metrics.SMALLEST + 2}px;
      margin-right: ${metrics.LARGEST}px;
      background-color: ${colors.LIGHTER};
    `}
  `,
};

export default SearchBarResults;
