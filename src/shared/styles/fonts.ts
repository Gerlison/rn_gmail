import { PixelRatio } from 'react-native';

const iconMultiplier = 1.3;
const fontMultiplier = PixelRatio.get();

const sizing = {
  SMALLEST: 8 + fontMultiplier,
  SMALLER: 10 + fontMultiplier,
  SMALL: 12 + fontMultiplier,
  MEDIUM: 14 + fontMultiplier,
  LARGE: 16 + fontMultiplier,
  LARGER: 18 + fontMultiplier,
  LARGEST: 22 + fontMultiplier,
};

const icon = {
  SMALLEST: (8 + fontMultiplier) * iconMultiplier,
  SMALLER: (10 + fontMultiplier) * iconMultiplier,
  SMALL: (12 + fontMultiplier) * iconMultiplier,
  MEDIUM: (14 + fontMultiplier) * iconMultiplier,
  LARGE: (16 + fontMultiplier) * iconMultiplier,
  LARGER: (18 + fontMultiplier) * iconMultiplier,
  LARGEST: (22 + fontMultiplier) * iconMultiplier,
};

const styling = {
  LIGHT: 'Roboto-Light',
  REGULAR: 'Roboto-Regular',
  MEDIUM: 'Roboto-Medium',
  BOLD: 'Roboto-Bold',
};

export default { sizing, icon, styling };
