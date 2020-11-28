import { createSlice } from '@reduxjs/toolkit';
import colors from '@styles/colors';

const { LIGHT_THEME, DARK_THEME } = colors;

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: LIGHT_THEME,
    currentTheme: 'light',
  },
  reducers: {
    toggleTheme: (state) => ({
      currentTheme: state.currentTheme === 'light' ? 'dark' : 'light',
      theme: state.currentTheme === 'light' ? DARK_THEME : LIGHT_THEME,
    }),
  },
});

export default themeSlice.reducer;
