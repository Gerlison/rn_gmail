import React, { memo } from 'react';
import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';

import Pressable from './Pressable';
import Icon from './Icon';
import Text from './Text';

import { IPHONE_BOTTOM_OFFSET } from '@helpers/dimensions';

interface Props {
  onPress: () => void;
}

const ComposeButton: React.FC<Props> = ({ onPress }) => {
  return (
    <S.Container>
      <S.Touchable onPress={onPress}>
        <S.Icon name="pencil-outline" color="DANGER" />
        <Text color="DANGER" weight="500">
          Compose
        </Text>
      </S.Touchable>
    </S.Container>
  );
};

const S = {
  Container: styled(Animated.View)`
    position: absolute;
    border-radius: 100px;
    elevation: 3;
    box-shadow: 0 4px 4px #0002;

    ${({ theme: { metrics, colors } }) => css`
      background-color: ${colors.BACKGROUND};
      right: ${metrics.MEDIUM}px;
      bottom: ${metrics.MEDIUM + IPHONE_BOTTOM_OFFSET}px;
      overflow: ${Platform.OS === 'android' ? 'hidden' : 'visible'};
    `}
  `,
  Icon: styled(Icon)`
    ${({ theme: { metrics } }) => css`
      padding-right: ${metrics.MEDIUM}px;
    `}
  `,
  Touchable: styled(Pressable)`
    flex-direction: row;
    align-items: center;

    ${({ theme: { metrics } }) => css`
      padding: ${metrics.MEDIUM}px;
      padding-right: ${metrics.LARGER}px;
    `}
  `,
};

export default memo(ComposeButton);
