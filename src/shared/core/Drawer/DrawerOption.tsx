import React, { useContext, memo } from 'react';
import { Pressable } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '@core/Text';

import { spacing } from '@styles/metrics';

import { sizing } from '@styles/fonts';

import { MailLabel } from '@modules/inbox/types';

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
  const theme = useContext(ThemeContext);

  return (
    <S.Container
      onPress={onPress}
      focused={focused}
      background={cosmetic.backgroundColor}
    >
      <S.Icon
        color={focused ? cosmetic.textColor : theme.DARK}
        size={sizing.icon.LARGE}
        name={cosmetic.icon}
      />
      <Text
        style={{ color: focused ? cosmetic.textColor : theme.DARK }}
        weight="ROBOTO_MEDIUM"
      >
        {name}
      </Text>
    </S.Container>
  );
};

const S = {
  Container: styled(Pressable)<{ background: string; focused: boolean }>`
    flex-direction: row;
    align-items: center;
    margin-right: ${spacing.SMALLER}px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    background-color: ${({ background, focused }) =>
      focused ? background : 'transparent'};
  `,
  Icon: styled(Icon)`
    margin-vertical: ${spacing.SMALL}px;
    margin-horizontal: ${spacing.LARGER}px;
  `,
};

export default memo(DrawerOption);
