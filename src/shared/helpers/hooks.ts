import Animated from 'react-native-reanimated';

const { interpolate } = Animated;

import { Interpolation } from './types';

export const useInterpolation: Interpolation = (value) => {
  return (inputRange, outputRange, config?) =>
    interpolate(value, { inputRange, outputRange, ...(config ?? {}) });
};
