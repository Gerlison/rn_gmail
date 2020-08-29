import React, { useContext, memo } from 'react';
import { Pressable } from 'react-native';
import styled, { ThemeContext, css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '@core/Text';

import { MailLabel } from '@core/types';

interface Props {
  label: MailLabel;
  focused: boolean;
  onPress: () => any;
}

const DrawerOption = ({
  label: { cosmetic, name },
  focused,
  onPress,
}: Props) => {
  const { fonts, colors } = useContext(ThemeContext);

  return (
    <S.Container
      onPress={onPress}
      focused={focused}
      background={cosmetic.backgroundColor}
    >
      <S.Icon
        color={focused ? cosmetic.textColor : colors.DARK}
        size={fonts.icon.LARGE}
        name={cosmetic.icon}
      />
      <Text
        style={{ color: focused ? cosmetic.textColor : colors.DARK }}
        family="MEDIUM"
      >
        {name}
      </Text>
    </S.Container>
  );
};

const S = {
  Container: styled(Pressable)<{ background: string; focused: boolean }>`
    ${({ theme: { metrics }, background, focused }) => css`
      flex-direction: row;
      align-items: center;
      margin-right: ${metrics.SMALLER}px;
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
      background-color: ${focused ? background : 'transparent'};
    `}
  `,
  Icon: styled(Icon)`
    ${({ theme: { metrics } }) => css`
      margin-vertical: ${metrics.SMALL}px;
      margin-horizontal: ${metrics.LARGER}px;
    `}
  `,
};

export default memo(DrawerOption);
