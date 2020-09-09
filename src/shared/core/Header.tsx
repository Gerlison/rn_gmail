import React, { memo } from 'react';
import { Pressable } from 'react-native';
import styled, { css } from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';

import Icon from '@core/Icon';
import Flex from '@core/Flex';
import Text from '@core/Text';

const Header: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <S.Container>
      <Pressable onPress={goBack}>
        <Icon name="arrow-left" size="LARGE" />
      </Pressable>

      <S.Text type="title">Title</S.Text>

      <Flex flexDirection="row" justify="flex-end">
        <S.Touchable onPress={goBack}>
          <Icon name="archive" size="LARGE" />
        </S.Touchable>
        <S.Touchable onPress={goBack}>
          <Icon name="archive" size="LARGE" />
        </S.Touchable>
        <S.Touchable onPress={goBack}>
          <Icon name="archive" size="LARGE" />
        </S.Touchable>
      </Flex>
    </S.Container>
  );
};

const S = {
  Container: styled.View`
    width: 100%;

    flex-direction: row;

    ${({ theme: { colors, metrics } }) => css`
      padding: ${metrics.MEDIUM}px;
      background-color: ${colors.BACKGROUND};
    `}
  `,
  Touchable: styled(Pressable)`
    ${({ theme: { metrics } }) => css`
      padding-left: ${metrics.MEDIUM}px;
    `}
  `,
  Text: styled(Text)`
    ${({ theme: { metrics } }) => css`
      margin-left: ${metrics.LARGE}px;
    `}
  `,
};

export default memo(Header);
