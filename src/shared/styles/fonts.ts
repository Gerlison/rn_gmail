const ICON_MULTIPLIER = 1.3;

// const getRealFontSize = (fontSize: number, standardScreenHeight = 680) => {
//   const heightPercent = (fontSize * WINDOW_HEIGHT) / standardScreenHeight;
//   return Math.round(heightPercent);
// };

const getRealFontSize = (fontSize: number) => {
  return fontSize;
};

const getRealIconSize = (iconSize: number) =>
  getRealFontSize(iconSize) * ICON_MULTIPLIER;

const sizing = {
  SMALLEST: getRealFontSize(10),
  SMALLER: getRealFontSize(12),
  SMALL: getRealFontSize(14),
  MEDIUM: getRealFontSize(16),
  LARGE: getRealFontSize(18),
  LARGER: getRealFontSize(22),
  LARGEST: getRealFontSize(24),
};

const icon = {
  SMALLEST: getRealIconSize(10),
  SMALLER: getRealIconSize(12),
  SMALL: getRealIconSize(14),
  MEDIUM: getRealIconSize(16),
  LARGE: getRealIconSize(18),
  LARGER: getRealIconSize(19),
  LARGEST: getRealIconSize(24),
};

const styling = {
  LIGHT: 'Roboto-Light',
  REGULAR: 'Roboto-Regular',
  MEDIUM: 'Roboto-Medium',
  BOLD: 'Roboto-Bold',
};

export type Sizing = typeof sizing;
export type Icon = typeof icon;
export type Styling = typeof styling;

export default { sizing, icon, styling };
