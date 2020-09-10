import * as styledComponents from 'styled-components/native';

import colors from '@styles/colors';
import metrics from '@styles/metrics';

interface ThemeInterface {
  colors: typeof colors.LIGHT_THEME;
  metrics: typeof metrics;
  currentTheme: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}

const {
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  ThemeInterface
>;

export default ThemeProvider;
