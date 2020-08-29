// import 'styled-components';
import * as styledComponents from 'styled-components/native';

import colors from '@styles/colors';
import fonts from '@styles/fonts';
import metrics from '@styles/metrics';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors.LIGHT_THEME;
    fonts: typeof fonts;
    metrics: typeof metrics;
    currentTheme: string;
  }
}

interface ThemeInterface {
  colors: typeof colors.LIGHT_THEME;
  fonts: typeof fonts;
  metrics: typeof metrics;
  currentTheme: string;
}

const {
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  ThemeInterface
>;

export default ThemeProvider;
