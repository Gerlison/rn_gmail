import React, { memo, useRef } from 'react';
import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';

import Pressable from './Pressable';
import Icon from './Icon';
import Text from './Text';
import Flex from './Flex';

import Dimensions from '@helpers/dimensions';
import { useInterpolation } from '@helpers/hooks';
import { runTiming } from '@helpers/functions';

interface Props {
  onPress: () => void;
  scrollY: Animated.Value<number>;
}

const {
  useCode,
  cond,
  Value,
  sub,
  abs,
  set,
  Clock,
  greaterOrEq,
  greaterThan,
} = Animated;

const ComposeButton: React.FC<Props> = ({ onPress, scrollY }) => {
  const clock = useRef(new Clock()).current;
  const scrollOffset = useRef(new Value(0)).current;
  const animation = useRef(new Value(0)).current;
  const aux = useRef(new Value(0)).current;
  const animationInterpolate = useInterpolation(animation);

  useCode(
    () => [
      cond(greaterOrEq(abs(sub(scrollY, scrollOffset)), 10), [
        cond(
          greaterThan(sub(scrollY, scrollOffset), 0),
          set(aux, 1),
          set(aux, 0),
        ),
        set(scrollOffset, scrollY),
      ]),
      set(animation, runTiming(clock, animation, aux)),
    ],
    [],
  );

  return (
    <S.Container style={{ width: animationInterpolate([0, 1], [53.5, 143.5]) }}>
      <S.Touchable onPress={onPress}>
        <S.Icon name="pencil-outline" color="DANGER" />
        <Flex background="TRANSPARENT" flexDirection="row">
          <S.Text color="DANGER" weight="500">
            Compose
          </S.Text>
        </Flex>
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
      bottom: ${metrics.MEDIUM + Dimensions.BOTTOM_OFFSET}px;
      overflow: ${Platform.OS === 'android' ? 'hidden' : 'visible'};
    `}
  `,
  Icon: styled(Icon)`
    ${({ theme: { metrics } }) => css`
      padding: ${metrics.MEDIUM}px;
    `}
  `,
  Touchable: styled(Pressable)`
    height: 56px;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
  `,
  Text: styled(Text)`
    width: 90px;
    ${({ theme: { metrics } }) => css`
      margin-right: ${metrics.LARGER}px;
    `}
  `,
};

export default memo(ComposeButton);
