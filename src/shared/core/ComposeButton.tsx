import React, { memo, useState } from 'react';
import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';

import Pressable from './Pressable';
import Icon from './Icon';
import Text from './Text';
import Flex from './Flex';

import { IPHONE_BOTTOM_OFFSET } from '@helpers/dimensions';

interface Props {
  onPress: () => void;
  scrollY: Animated.Value<number>;
}

const { useCode, onChange, call } = Animated;

const ComposeButton: React.FC<Props> = ({ onPress, scrollY }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useCode(
    () => [
      onChange(
        scrollY,
        call([scrollY], ([value]) => {
          if (value > 0 && !isCollapsed) {
            setIsCollapsed(true);
          } else if (value < 0 && isCollapsed) {
            setIsCollapsed(false);
          }
        }),
      ),
    ],
    [isCollapsed],
  );

  return (
    <S.Container>
      <S.Touchable onPress={onPress}>
        <S.Icon name="pencil-outline" color="DANGER" />
        <Flex>
          <Text color="DANGER" weight="500">
            Compose
          </Text>
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
    width: 56px;
    height: 56px;
    flex-direction: row;
    align-items: center;
    overflow: hidden;

    ${({ theme: { metrics } }) => css`
      padding: ${metrics.MEDIUM}px;
      padding-right: ${metrics.LARGER}px;
    `}
  `,
};

export default memo(ComposeButton);
