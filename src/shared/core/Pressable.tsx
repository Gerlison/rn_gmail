import React, { memo, useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components/native';
import {
  Platform,
  Pressable as DefaultPressable,
  PressableProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

const Pressable: React.FC<PressableProps & TouchableOpacityProps> = ({
  children,
  ...props
}) => {
  const { colors } = useContext(ThemeContext);

  const DefaultTapHandler = useMemo<
    typeof DefaultPressable | typeof TouchableOpacity
  >(
    () =>
      Platform.select<any>({
        android: DefaultPressable,
        ios: TouchableOpacity,
      }),
    [],
  );

  return (
    <DefaultTapHandler android_ripple={{ color: colors.LIGHT }} {...props}>
      {children}
    </DefaultTapHandler>
  );
};

export default memo(Pressable);
