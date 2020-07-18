import { LIGHT_THEME, DARK_THEME } from '@styles/colors';
import actionTypes, { ThemeActions, ThemeState } from './types';

const INITIAL_STATE: ThemeState = {
  theme: LIGHT_THEME,
  currentTheme: 'light',
};

export default (state = INITIAL_STATE, action: ThemeActions) => {
  const { type } = action;

  switch (type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        currentTheme: state.currentTheme === 'light' ? 'dark' : 'light',
        theme: state.currentTheme === 'light' ? DARK_THEME : LIGHT_THEME,
      };

    default:
      return state;
  }
};
