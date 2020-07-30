import React, { useState, useRef, useCallback } from 'react';
import { Pressable, useWindowDimensions, TextInput } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/core';
import Animated, { Easing } from 'react-native-reanimated';
import { useTimingTransition, interpolateColor } from 'react-native-redash';

import { spacing } from '@styles/metrics';
import { sizing, styling } from '@styles/fonts';

import { useInterpolation } from '@helpers/hooks';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '@navigation/types';
import { Styled } from '@core/types';

type Navigation = DrawerNavigationProp<DrawerParamList, 'Home'>;

const SearchBar = () => {
  const inputRef = useRef<{ getNode: () => TextInput }>(null);
  const navigation = useNavigation<Navigation>();
  const { height } = useWindowDimensions();

  const [focused, setFocused] = useState(0);

  const animation = useTimingTransition(focused, {
    duration: 250,
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
          height: interpolation([0, 1], [50, height]),
          borderRadius: interpolation([0, 1], [8, 0]),
          shadowOpacity: interpolation([0, 0.999, 1], [1, 1, 0]),
          left: interpolation([0, 1], [spacing.MEDIUM, 0]),
          right: interpolation([0, 1], [spacing.MEDIUM, 0]),
          top: interpolation([0, 1], [spacing.MEDIUM, 0]),
        }}
      >
        <S.Row>
          <Pressable onPress={onPressLeftButton}>
            {renderIcon('menu')}
            {renderIcon('arrow-right')}
          </Pressable>
          <S.TextInput
            ref={inputRef}
            onFocus={() => setFocused(1)}
            placeholder="Search on mail"
            style={{
              left: interpolation([0, 1], [0, spacing.MEDIUM]),
            }}
          />
        </S.Row>
      </S.Container>
    </>
  );
};

const S = {
  Container: styled(Animated.View)<Styled>`
    height: 50px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    padding: ${spacing.SMALL}px;

    background-color: ${({ theme }) => theme.BACKGROUND};
    box-shadow: 0px 0px 2px #0003;
    position: absolute;

    z-index: 2;
  `,
  TextInput: styled(Animated.createAnimatedComponent(TextInput)).attrs(
    ({ theme }: Styled) => ({
      placeholderTextColor: theme.DARK,
    }),
  )<Styled>`
    flex: 1;
    font-size: ${sizing.LARGE}px;
    color: ${({ theme }) => theme.DARK};
    font-family: ${styling.ROBOTO_REGULAR};
  `,
  Row: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  Icon: styled(Animated.createAnimatedComponent(Icon))`
    margin-right: ${spacing.SMALL}px;
    font-size: ${sizing.icon.LARGE}px;
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

export default SearchBar;
