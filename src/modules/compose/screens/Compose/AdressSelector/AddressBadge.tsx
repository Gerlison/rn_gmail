import React, { memo } from 'react';
import styled, { css } from 'styled-components/native';

import Flex from '@core/Flex';
import Text from '@core/Text';

import { User } from '@core/types';

interface Props {
  user: User;
}

const AddressBadge: React.FC<Props> = ({ user }) => {
  return (
    <S.Container>
      <S.Image />
      <Flex>
        <S.Text color="DARKER" numberOfLines={1}>
          {user.address}
        </S.Text>
      </Flex>
      <S.RoundContainer />
    </S.Container>
  );
};

const S = {
  Container: styled.View`
    flex-direction: row;
    align-items: center;
    margin: 7px 0px;
  `,
  Image: styled.View`
    width: 35px;
    height: 35px;
    border-radius: 20px;
    z-index: 1;

    ${({ theme: { colors } }) => css`
      background-color: ${colors.REGULAR};
    `}
  `,
  RoundContainer: styled.View`
    width: 100%;
    height: 34px;
    border-width: 1px;
    border-radius: 15px;
    position: absolute;

    ${({ theme: { colors } }) => css`
      border-color: ${colors.LIGHT};
    `}
  `,
  Text: styled(Text)`
    ${({ theme: { metrics } }) => css`
      margin-right: ${metrics.SMALLER}px;
    `}
  `,
};

export default memo(AddressBadge);
