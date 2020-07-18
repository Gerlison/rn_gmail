import { LIGHT_THEME, DARK_THEME } from '@styles/colors';

/**
 * State
 */

export type Theme = typeof LIGHT_THEME | typeof DARK_THEME;
export interface ThemeState {
  theme: Theme;
  currentTheme: string;
}

/**
 * Action types
 */

enum actionTypes {
  TOGGLE_THEME = 'theme/TOGGLE_THEME',
}

export default actionTypes;

/**
 * Action namespaces
 */

export namespace ToggleTheme {
  export type start = () => {
    type: actionTypes.TOGGLE_THEME;
  };
}

// Actions
export interface ThemeActions {
  type: actionTypes;
}
