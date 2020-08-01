import { Platform, PixelRatio } from 'react-native';

const iconMultiplier = 1.3;
const fontMultiplier = Platform.OS === 'ios' ? PixelRatio.get() : 0;

export const sizing = {
  SMALLEST: 8 + fontMultiplier,
  SMALLER: 10 + fontMultiplier,
  SMALL: 12 + fontMultiplier,
  MEDIUM: 14 + fontMultiplier,
  LARGE: 16 + fontMultiplier,
  LARGER: 18 + fontMultiplier,
  LARGEST: 22 + fontMultiplier,

  get icon() {
    return {
      SMALLEST: this.SMALLEST * iconMultiplier,
      SMALLER: this.SMALLER * iconMultiplier,
      SMALL: this.SMALL * iconMultiplier,
      MEDIUM: this.MEDIUM * iconMultiplier,
      LARGE: this.LARGE * iconMultiplier,
      LARGER: this.LARGER * iconMultiplier,
      LARGEST: this.LARGEST * iconMultiplier,
    };
  },
};

export const styling = {
  ROBOTO_LIGHT: 'Roboto-Light',
  ROBOTO_REGULAR: 'Roboto-Regular',
  ROBOTO_MEDIUM: 'Roboto-Medium',
  ROBOTO_BOLD: 'Roboto-Bold',
};
