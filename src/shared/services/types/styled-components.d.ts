import * as styledComponents from 'styled-components/native';

import colors from '@styles/colors';
import { Metrics } from '@styles/metrics';

interface ThemeInterface {
  colors: typeof colors.LIGHT_THEME;
  metrics: Metrics;
  currentTheme: string;
}

export type ThemedStyledComponentsModule = styledComponents.ReactNativeThemedStyledComponentsModule<
  ThemeInterface
>;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
