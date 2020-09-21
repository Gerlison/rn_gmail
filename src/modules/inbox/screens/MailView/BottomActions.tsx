import React, { memo } from 'react';
import styled, { css } from 'styled-components/native';

import Flex from '@core/Flex';
import Text from '@core/Text';
import Icon from '@core/Icon';
import Pressable from '@core/Pressable';

const BottomActions: React.FC = () => {
  return (
    <Flex width="100%" flexDirection="row">
      <S.ButtonContainer>
        <S.Button onPress={() => {}}>
          <Icon color="DARK" name="reply" />
          <S.Text color="DARK">Reply</S.Text>
        </S.Button>
      </S.ButtonContainer>

      <S.ButtonContainer hasMargin>
        <S.Button onPress={() => {}}>
          <Icon color="DARK" name="reply-all" />
          <S.Text color="DARK">Reply all</S.Text>
        </S.Button>
      </S.ButtonContainer>

      <S.ButtonContainer>
        <S.Button onPress={() => {}}>
          <Icon color="DARK" name="share" />
          <S.Text color="DARK">Forward</S.Text>
        </S.Button>
      </S.ButtonContainer>
    </Flex>
  );
};

const S = {
  ButtonContainer: styled.View<{ hasMargin?: boolean }>`
    flex: 1;
    border-width: 1px;
    border-radius: 4px;

    ${({ theme: { colors, metrics }, hasMargin }) => css`
      margin: 0px ${hasMargin ? metrics.SMALLER : 0}px;
      border-color: ${colors.LIGHT};
      background-color: ${colors.BACKGROUND};
    `}
  `,
  Button: styled(Pressable)`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${({ theme: { metrics } }) => css`
      padding: ${metrics.SMALL}px 0px;
    `}
  `,
  Text: styled(Text)`
    ${({ theme: { metrics } }) => css`
      margin-left: ${metrics.SMALLER}px;
    `}
  `,
};

export default memo(BottomActions);
