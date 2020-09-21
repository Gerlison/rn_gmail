import React, { memo, useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import DefaultIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Pressable from '@core/Pressable';

import fonts from '@styles/fonts';

import { Theme } from '@core/types';

interface IconProps {
  color?: keyof Theme;
  name: string;
  size?: keyof typeof fonts.sizing | number;
  onPress?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  size,
  color,
  onPress,
  ...props
}) => {
  const { colors } = useContext(ThemeContext);

  if (onPress)
    return (
      <Pressable
        hitSlop={{ left: 10, top: 10, right: 10, bottom: 10 }}
        android_ripple={{ borderless: true, radius: 20, color: colors.LIGHT }}
        onPress={onPress}
        {...props}
      >
        <DefaultIcon
          name={name}
          size={typeof size === 'number' ? size : fonts.icon[size || 'MEDIUM']}
          color={colors[color || 'DARK']}
        />
      </Pressable>
    );

  return (
    <DefaultIcon
      name={name}
      size={typeof size === 'number' ? size : fonts.icon[size || 'MEDIUM']}
      color={colors[color || 'DARK']}
    />
  );
};

export default memo(Icon);
