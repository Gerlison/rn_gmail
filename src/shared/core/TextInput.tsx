import React, { memo } from 'react';
import { TextInputProps } from 'react-native';
import styled, { css } from 'styled-components/native';

import fonts, { Sizing, Styling } from '@styles/fonts';
import { Theme } from '@core/types';

interface Props extends TextInputProps {
  fontSize?: keyof Sizing;
  fontColor?: keyof Theme;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '200'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800';
  fontFamily?: keyof Styling;
}

const TextInput: React.FC<Props> = (props) => <S.TextInput {...props} />;

const S = {
  TextInput: styled.TextInput.attrs(({ theme: { colors } }) => ({
    placeholderTextColor: colors.REGULAR,
  }))<Props>`
    ${({
      theme: { colors },
      fontSize,
      fontWeight,
      fontColor,
      fontFamily,
    }) => css`
      color: ${colors[fontColor || 'DARKEST']};

      font-size: ${typeof fontSize === 'number'
        ? fontSize
        : fonts.sizing[fontSize || 'MEDIUM']}px;

      font-family: ${fonts.styling[fontFamily || 'REGULAR']};
      font-weight: ${fontWeight || 400};
    `}
  ` as React.FC<Props>,
};

export default memo(TextInput);
