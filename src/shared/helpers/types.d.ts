import { Extrapolate } from 'react-native-reanimated';

export type Interpolate = (
  inputRange: number[],
  outputRange: number[],
  config?: {
    extrapolate?: Extrapolate;
    extrapolateLeft?: Extrapolate;
    extrapolateRight?: Extrapolate;
  },
) => Animated.Node<number>;

export type Interpolation = (value: Animated.Adaptable<number>) => Interpolate;
