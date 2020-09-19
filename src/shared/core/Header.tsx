import React, { memo } from 'react';
import { Pressable } from 'react-native';
import styled, { css } from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';
import Animated from 'react-native-reanimated';
import { useTransition } from 'react-native-redash';

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
  scrollState?: number;
}

const Header: React.FC<Props> = ({ buttons, title, scrollState }) => {
  const { goBack } = useNavigation();
  const elevation = useTransition(scrollState ?? 0, { duration: 200 });

  return (
    <S.Container
      style={{
        elevation: elevation,
        shadowOpacity: elevation,
      }}
    >
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
  Container: styled(Animated.View)`
    width: 100%;
    flex-direction: row;
    box-shadow: 0px 1px 1px #0002;
    z-index: 2;

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
