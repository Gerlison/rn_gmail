import React, { memo, useContext } from 'react';
import { ThemeContext } from 'styled-components/native';
import VIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import fonts from '@styles/fonts';

import { IconProps } from '@core/types';

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <VIcon
      name={name}
      size={typeof size === 'number' ? size : fonts.icon[size || 'MEDIUM']}
      color={colors[color || 'DARK']}
    />
  );
};

export default memo(Icon);
