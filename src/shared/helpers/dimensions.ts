import { isIphoneX } from 'react-native-iphone-x-helper';
import extraDimensions from 'react-native-extra-dimensions-android';
import { Platform, StatusBar, Dimensions } from 'react-native';

const { height: RNHeight, width: RNWidth } = Dimensions.get('window');
const height =
  Platform.OS === 'android' ? extraDimensions.getRealWindowHeight() : RNHeight;
const width =
  Platform.OS === 'android' ? extraDimensions.getRealWindowWidth() : RNWidth;

const standardLength = width > height ? width : height;

const offset =
  width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight!;

export const WINDOW_PORTRAIT_HEIGHT =
  isIphoneX() || Platform.OS === 'android'
    ? standardLength - offset
    : standardLength;

export const WINDOW_HEIGHT =
  (isIphoneX() || Platform.OS === 'android') && height > width
    ? height - offset
    : height;

export const WINDOW_WIDTH =
  (isIphoneX() || Platform.OS === 'android') && height < width
    ? width - offset
    : width;
