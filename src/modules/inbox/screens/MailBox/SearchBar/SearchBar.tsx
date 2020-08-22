import React, { useState, useRef, useCallback, memo } from 'react';
import { Pressable, TextInput, Dimensions, Platform } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core';
import Animated, { Easing } from 'react-native-reanimated';
import { useTimingTransition, interpolateColor } from 'react-native-redash';
import ExtraDimensions from 'react-native-extra-dimensions-android';

import SearchBarResults from './SearchBarResults';

import { spacing } from '@styles/metrics';
import { sizing, styling } from '@styles/fonts';

import { useInterpolation } from '@helpers/hooks';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '@navigation/types';
import { Styled } from '@core/types';
import SearchBarProfile from './SearchBarProfile';

type Navigation = DrawerNavigationProp<DrawerParamList, 'Home'>;

const SEARCH_BAR_HEIGHT = 50;
const height =
  Platform.OS === 'android'
    ? ExtraDimensions.getRealWindowHeight()
    : Dimensions.get('window').height;

const SearchBar = () => {
  const inputRef = useRef<{ getNode: () => TextInput }>(null);
  const navigation = useNavigation<Navigation>();

  const [focused, setFocused] = useState(0);

  const animation = useTimingTransition(focused, {
    duration: 200,
    easing: Easing.linear,
  });
  const interpolation = useInterpolation(animation);

  const onPressLeftButton = () => {
    if (focused) {
      setFocused(0);
      return inputRef?.current?.getNode().blur();
    }
    return navigation.openDrawer();
  };

  const renderIcon = useCallback((icon) => {
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
        size={sizing.icon.LARGER}
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
  }, []);

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
          height: interpolation([0, 1], [SEARCH_BAR_HEIGHT, height]),
          borderRadius: interpolation([0, 1], [8, 0]),
          shadowOpacity: interpolation([0, 0.999, 1], [1, 1, 0]),
          left: interpolation([0, 1], [spacing.MEDIUM, 0]),
          right: interpolation([0, 1], [spacing.MEDIUM, 0]),
          top: interpolation([0, 1], [spacing.SMALLER, 0]),
        }}
      >
        <S.Content>
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
                left: interpolation([0, 1], [0, spacing.MEDIUM]),
                marginTop: interpolation([0, 1], [0, spacing.SMALLEST]),
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
  Container: styled(Animated.View)<Styled>`
    height: ${SEARCH_BAR_HEIGHT}px;

    background-color: ${({ theme }) => theme.BACKGROUND};
    box-shadow: 0px 0px 2px #0003;
    elevation: 2;
    position: absolute;

    z-index: 2;
  `,
  Content: styled.View`
    height: ${SEARCH_BAR_HEIGHT}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-right: ${spacing.SMALL}px;
  `,
  TextInput: styled(Animated.createAnimatedComponent(TextInput)).attrs(
    ({ theme }: Styled) => ({
      placeholderTextColor: theme.DARK,
    }),
  )<Styled>`
    flex: 1;

    margin-left: ${spacing.SMALLER}px;

    font-size: ${sizing.LARGE}px;
    color: ${({ theme }) => theme.DARK};
    font-family: ${styling.ROBOTO_REGULAR};
  `,
  Row: styled.View`
    height: ${SEARCH_BAR_HEIGHT}px;

    flex: 1;
    flex-direction: row;
    align-items: center;

    margin-horizontal: ${spacing.SMALL}px;
  `,
  Icon: styled(Animated.createAnimatedComponent(Icon))`
    color: ${({ theme }) => theme.DARK};
  `,
  Backdrop: styled(Animated.View)<Styled>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `,
};

export default memo(SearchBar);
