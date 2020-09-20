import React, { useState } from 'react';
import styled from 'styled-components/native';
import Animated, { Extrapolate } from 'react-native-reanimated';
import { usePanGestureHandler } from 'react-native-redash';
import { PanGestureHandler } from 'react-native-gesture-handler';

import Text from '@core/Text';
import Pressable from '@core/Pressable';

import { useInterpolation } from '@helpers/hooks';

const PROFILE_SIZE = 30;

const SearchBarProfile = () => {
  const {
    gestureHandler,
    translation: { y: translationY },
    velocity,
  } = usePanGestureHandler();
  const translationInterpolation = useInterpolation(translationY);

  const [selectedProfile, setSelectedProfile] = useState(2);

  return (
    <Pressable android_ripple={{ borderless: true, radius: 20 }}>
      <PanGestureHandler {...gestureHandler}>
        <S.Container>
          {Array.from({ length: 3 }).map((_, index) => (
            <S.Profile
              key={index}
              style={
                index === selectedProfile
                  ? { transform: [{ translateY: translationY }] }
                  : {
                      opacity: translationInterpolation(
                        [-PROFILE_SIZE * 2, 0, PROFILE_SIZE * 2],
                        [1, 0, 1],
                      ),
                      transform: [
                        {
                          scale: translationInterpolation(
                            [-PROFILE_SIZE * 2, 0, PROFILE_SIZE * 2],
                            [1, 0.4, 1],
                            {
                              extrapolate: Extrapolate.CLAMP,
                            },
                          ),
                        },
                      ],
                    }
              }
            >
              <Text color="WHITE">{index}</Text>
            </S.Profile>
          ))}
        </S.Container>
      </PanGestureHandler>
    </Pressable>
  );
};

const S = {
  Container: styled(Animated.View)`
    width: ${PROFILE_SIZE}px;
    height: 100%;

    justify-content: center;
    align-items: center;

    overflow: hidden;
  `,
  Profile: styled(Animated.View)`
    width: ${PROFILE_SIZE}px;
    height: ${PROFILE_SIZE}px;

    justify-content: center;
    align-items: center;

    border-radius: 20px;
    background-color: ${({ theme: { colors } }) => colors.TERTIARY};

    position: absolute;
  `,
};

export default SearchBarProfile;
