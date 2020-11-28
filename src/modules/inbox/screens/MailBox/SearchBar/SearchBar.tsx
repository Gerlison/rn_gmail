import React, { useState, useRef, memo } from 'react';
import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core';
import Animated, { Easing } from 'react-native-reanimated';
import { useTimingTransition, interpolateColor } from 'react-native-redash';

import SearchBarResults from './SearchBarResults';
import SearchBarProfile from './SearchBarProfile';

import Pressable from '@core/Pressable';

import fonts from '@styles/fonts';

import { SEARCH_BAR_HEIGHT } from '@modules/inbox/helpers/constants';
import { useInterpolation } from '@helpers/hooks';
import Dimensions from '@helpers/dimensions';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '@navigation/types';

type Navigation = DrawerNavigationProp<DrawerParamList, 'Home'>;

interface Props {
  scrollY: Animated.Value<number>;
}

const SearchBar: React.FC<Props> = ({ scrollY }) => {
  const inputRef = useRef<{ getNode: () => TextInput }>(null);
  const navigation = useNavigation<Navigation>();

  const [focused, setFocused] = useState(0);

  const animation = useTimingTransition(focused, {
    duration: 200,
    easing: Easing.linear,
  });
  const interpolation = useInterpolation(animation);
  const scrollInterpolation = useInterpolation(scrollY);

  const onPressLeftButton = () => {
    if (focused) {
      setFocused(0);
      return inputRef?.current?.getNode().blur();
    }
    return navigation.openDrawer();
  };

  const renderIcon = (icon: string) => {
    let props = {};
    if (icon === 'menu')
      props = {
        opacity: interpolation([0.4, 0.6], [1, 0]),
      };
    else
      props = {
        position: 'absolute',
        opacity: interpolation([0.4, 0.6], [0, 1]),
      };

    return (
      <S.Icon
        name={icon}
        style={{
          transform: [
            {
              rotateZ: interpolation([0, 1], [0, Math.PI]),
            },
          ],
          ...props,
        }}
      />
    );
  };

  return (
    <>
      <S.Backdrop
        style={{
          backgroundColor: (interpolateColor(animation, {
            inputRange: [0, 1],
            outputRange: ['#0000', '#0008'],
          }) as unknown) as Animated.Node<string>,
          zIndex: interpolation([0, 0.1], [-1, 1], { extrapolate: 'clamp' }),
        }}
      />
      <S.Container
        style={{
          height: interpolation(
            [0, 1],
            [SEARCH_BAR_HEIGHT, Dimensions.WINDOW_HEIGHT],
          ),
          borderRadius: interpolation([0, 1], [8, 0]),
          shadowOpacity: interpolation([0, 0.999, 1], [1, 1, 0]),
          left: interpolation([0, 1], [16, 0]),
          right: interpolation([0, 1], [16, 0]),
          top: focused
            ? interpolation([0, 1], [10, 0])
            : scrollInterpolation(
                [0, 2 * SEARCH_BAR_HEIGHT],
                [10, 2 * -SEARCH_BAR_HEIGHT],
              ),
        }}
      >
        <S.Content
          style={{
            height: interpolation(
              [0, 1],
              [SEARCH_BAR_HEIGHT, SEARCH_BAR_HEIGHT + 6],
            ),
          }}
        >
          <S.Row>
            <Pressable
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              android_ripple={{ borderless: true, radius: 20 }}
              onPress={onPressLeftButton}
            >
              {renderIcon('menu')}
              {renderIcon('arrow-right')}
            </Pressable>
            <S.TextInput
              ref={inputRef}
              onFocus={() => setFocused(1)}
              placeholder="Search on mail"
              style={{
                left: interpolation([0, 1], [0, 16]),
              }}
            />
          </S.Row>
          <SearchBarProfile />
        </S.Content>
        <SearchBarResults focused={!!focused} animation={animation} />
      </S.Container>
    </>
  );
};

const S = {
  Container: styled(Animated.View)`
    height: ${SEARCH_BAR_HEIGHT}px;

    background-color: ${({ theme: { colors } }) => colors.BACKGROUND};
    box-shadow: 0px 0px 2px #0003;
    elevation: 2;
    position: absolute;

    z-index: 2;
  `,
  Content: styled(Animated.View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ${({ theme: { metrics } }) => css`
      margin-right: ${metrics.SMALL}px;
    `};
  `,
  Row: styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;

    ${({ theme: { metrics } }) => css`
      height: ${SEARCH_BAR_HEIGHT}px;
      margin: 0px ${metrics.SMALL}px;
    `}
  `,
  Icon: styled(Animated.createAnimatedComponent(Icon))`
    ${({ theme: { colors } }) => css`
      color: ${colors.DARK};
      font-size: ${fonts.icon.LARGE}px;
    `};
  `,
  Backdrop: styled(Animated.View)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `,
  TextInput: styled(Animated.createAnimatedComponent(TextInput)).attrs(
    ({ theme: { colors } }) => ({
      placeholderTextColor: colors.DARK,
    }),
  )`
    flex: 1; 
    
    ${({ theme: { metrics, colors } }) => css`
      margin: 0px ${metrics.SMALLER}px;
      font-size: ${fonts.sizing.LARGE}px;
      color: ${colors.DARK};
      font-family: ${fonts.styling.REGULAR};
    `}
  `,
};

export default memo(SearchBar);
