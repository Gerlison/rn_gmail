const ICON_MULTIPLIER = 1.3;

const getRealIconSize = (iconSize: number) => iconSize * ICON_MULTIPLIER;

const sizing = {
  SMALLEST: 10,
  SMALLER: 12,
  SMALL: 14,
  MEDIUM: 16,
  LARGE: 18,
  LARGER: 22,
  LARGEST: 24,
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
