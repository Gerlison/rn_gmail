import React, { memo } from 'react';
import styled, { css } from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';
import Animated from 'react-native-reanimated';
import { useTransition } from 'react-native-redash';

import Icon from '@core/Icon';
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
      <S.Group>
        <Icon onPress={goBack} name="arrow-left" size="LARGE" />
        <S.Text type="title">{title}</S.Text>
      </S.Group>

      <S.Group>
        {buttons?.map((button, index) => (
          <S.Icon
            key={index}
            onPress={button.disabled ? undefined : button.onPress}
            name={button.icon}
            size="LARGE"
          />
        ))}
      </S.Group>
    </S.Container>
  );
};

const S = {
  Container: styled(Animated.View)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 1px #0002;
    z-index: 2;

    ${({ theme: { colors } }) => css`
      background-color: ${colors.BACKGROUND};
    `}
  `,
  Icon: styled(Icon)`
    ${({ theme: { metrics } }) => css`
      margin-left: ${metrics.LARGER}px;
    `}
  `,
  Text: styled(Text)`
    ${({ theme: { metrics } }) => css`
      margin-left: ${metrics.LARGE}px;
    `}
  `,
  Group: styled.View`
    flex-direction: row;

    ${({ theme: { metrics } }) => css`
      padding: ${metrics.MEDIUM}px;
    `}
  `,
};

export default memo(Header);
