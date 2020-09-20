import React, { memo } from 'react';
import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

import Icon from '@core/Icon';
import Text from '@core/Text';
import Pressable from '@core/Pressable';

interface Props {
  isSelected?: boolean;
  char: string;
  onPress?: () => void;
}

const AuthorBadge: React.FC<Props> = ({ isSelected, char, onPress }) => {
  return (
    <S.Container disabled={!onPress} onPress={onPress} isSelected={isSelected}>
      {isSelected ? (
        <Icon name="check" size="LARGE" color="WHITE" />
      ) : (
        <Text size="LARGEST" color="WHITE">
          {char}
        </Text>
      )}
    </S.Container>
  );
};

const S = {
  Container: styled(Pressable)<{ isSelected?: boolean }>`
    ${({ theme: { colors, metrics }, isSelected }) => css`
      width: 40px;
      height: 40px;
      align-items: center;
      justify-content: center;
      margin-right: ${metrics.MEDIUM}px;
      border-radius: 20px;
      background-color: ${isSelected ? colors.PRIMARY : 'lightcoral'};
    `}
  `,
};

export default memo(AuthorBadge);
