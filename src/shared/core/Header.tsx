import React, { memo } from 'react';
import { Pressable } from 'react-native';
import styled, { css } from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';

import Icon from '@core/Icon';
import Flex from '@core/Flex';
import Text from '@core/Text';

interface Props {
  title?: string;
  buttons?: {
    icon: string;
    onPress: () => void;
    disabled?: boolean;
  }[];
}

const Header: React.FC<Props> = ({ buttons, title }) => {
  const { goBack } = useNavigation();

  return (
    <S.Container>
      <Pressable onPress={goBack}>
        <Icon name="arrow-left" size="LARGE" />
      </Pressable>

      <S.Text type="title">{title}</S.Text>

      <Flex flex={1} flexDirection="row" justify="flex-end">
        {buttons?.map((button, index) => (
          <S.Touchable
            key={index}
            onPress={button.onPress}
            disabled={button.disabled}
          >
            <Icon name={button.icon} size="LARGE" />
          </S.Touchable>
        ))}
      </Flex>
    </S.Container>
  );
};

const S = {
  Container: styled.View`
    width: 100%;
    flex-direction: row;
    box-shadow: 0px 1px 0px #0002;

    ${({ theme: { colors, metrics } }) => css`
      padding: ${metrics.MEDIUM}px;
      background-color: ${colors.BACKGROUND};
    `}
  `,
  Touchable: styled(Pressable)`
    ${({ theme: { metrics } }) => css`
      margin-left: ${metrics.LARGER}px;
    `}
  `,
  Text: styled(Text)`
    ${({ theme: { metrics } }) => css`
      margin-left: ${metrics.LARGE}px;
    `}
  `,
};

export default memo(Header);
