import React, { memo } from 'react';
import { Pressable } from 'react-native';
import styled, { css } from 'styled-components/native';

import Flex from '@core/Flex';
import Text from '@core/Text';
import Icon from '@core/Icon';

const BottomActions: React.FC = () => {
  return (
    <Flex width="100%" flexDirection="row">
      <S.Button>
        <Icon color="DARK" name="reply" />
        <S.Text color="DARK">Reply</S.Text>
      </S.Button>

      <S.Button hasMargin>
        <Icon color="DARK" name="reply-all" />
        <S.Text color="DARK">Reply all</S.Text>
      </S.Button>

      <S.Button>
        <Icon color="DARK" name="share" />
        <S.Text color="DARK">Forward</S.Text>
      </S.Button>
    </Flex>
  );
};

const S = {
  Button: styled(Pressable)<{ hasMargin?: boolean }>`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-radius: 4px;

    ${({ theme: { colors, metrics }, hasMargin }) => css`
      padding: ${metrics.SMALL}px 0px;
      margin: 0px ${hasMargin ? metrics.SMALLER : 0}px;
      border-color: ${colors.LIGHT};
      background-color: ${colors.BACKGROUND};
    `}
  `,
  Text: styled(Text)`
    ${({ theme: { metrics } }) => css`
      margin-left: ${metrics.SMALLER}px;
    `}
  `,
};

export default memo(BottomActions);
