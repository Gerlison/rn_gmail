import {
  isIphoneX,
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import extraDimensions from 'react-native-extra-dimensions-android';
import { Platform, StatusBar, Dimensions as RNDimensions } from 'react-native';

const { height: RNHeight, width: RNWidth } = RNDimensions.get('window');

const height =
  Platform.OS === 'android' ? extraDimensions.getRealWindowHeight() : RNHeight;
const width =
  Platform.OS === 'android' ? extraDimensions.getRealWindowWidth() : RNWidth;

const standardVerticalLength = Math.max(width, height);
const isPhoneInLandscape = width > height;
const isPhoneInPortrait = width < height;

const offset = isPhoneInLandscape
  ? 0
  : Platform.OS === 'ios'
  ? getStatusBarHeight()
  : StatusBar.currentHeight!;

const Dimensions = Platform.select({
  android: {
    WINDOW_PORTRAIT_HEIGHT: standardVerticalLength - offset,
    WINDOW_HEIGHT: isPhoneInPortrait ? height - offset : height,
    WINDOW_WIDTH: isPhoneInLandscape ? width - offset : width,
    BOTTOM_OFFSET: 0,
    STATUS_BAR_HEIGHT: StatusBar.currentHeight!,
  },
  ios: {
    WINDOW_PORTRAIT_HEIGHT: isIphoneX()
      ? standardVerticalLength - offset
      : standardVerticalLength,
    WINDOW_HEIGHT: isIphoneX() && isPhoneInPortrait ? height - offset : height,
    WINDOW_WIDTH: isIphoneX() && isPhoneInLandscape ? width - offset : width,
    BOTTOM_OFFSET: getBottomSpace(),
    STATUS_BAR_HEIGHT: getStatusBarHeight(),
  },
})!;

export default Dimensions;
