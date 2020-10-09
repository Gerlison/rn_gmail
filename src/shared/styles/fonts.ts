import { WINDOW_HEIGHT } from '@helpers/dimensions';

const ICON_MULTIPLIER = 1.3;

const getRealFontSize = (fontSize: number, standardScreenHeight = 680) => {
  const heightPercent = (fontSize * WINDOW_HEIGHT) / standardScreenHeight;
  return Math.round(heightPercent);
};

const getRealIconSize = (iconSize: number) =>
  getRealFontSize(iconSize) * ICON_MULTIPLIER;

const sizing = {
  SMALLEST: getRealFontSize(8),
  SMALLER: getRealFontSize(10),
  SMALL: getRealFontSize(12),
  MEDIUM: getRealFontSize(14),
  LARGE: getRealFontSize(16),
  LARGER: getRealFontSize(18),
  LARGEST: getRealFontSize(22),
};

const icon = {
  SMALLEST: getRealIconSize(8),
  SMALLER: getRealIconSize(10),
  SMALL: getRealIconSize(12),
  MEDIUM: getRealIconSize(14),
  LARGE: getRealIconSize(16),
  LARGER: getRealIconSize(18),
  LARGEST: getRealIconSize(22),
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
