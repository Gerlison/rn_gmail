import Animated from 'react-native-reanimated';

const { interpolate } = Animated;

type Extrapolate = 'extend' | 'clamp' | 'identity';

export const useInterpolation = (value: Animated.Adaptable<number>) => {
  return (
    inputRange: number[],
    outputRange: number[],
    config?: {
      extrapolate?: Extrapolate;
      extrapolateLeft?: Extrapolate;
      extrapolateRight?: Extrapolate;
    },
  ) => interpolate(value, { inputRange, outputRange, ...(config ?? {}) });
};
