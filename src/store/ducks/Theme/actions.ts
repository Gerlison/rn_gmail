import actionTypes, { ToggleTheme } from './types';

export const toggleTheme: ToggleTheme.start = () => {
  return {
    type: actionTypes.TOGGLE_THEME,
  };
};
