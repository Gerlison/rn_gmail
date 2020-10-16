import React, { memo } from 'react';
import styled, { css } from 'styled-components/native';

import Flex from '@core/Flex';
import Text from '@core/Text';

import { ADDRESS_BADGE_SIZE } from '@modules/compose/helpers/constants';

import { User } from '@core/types';

interface Props {
  user: User;
}

const AddressBadge: React.FC<Props> = ({ user }) => {
  return (
    <S.Container>
      <S.Badge>
        <Text color="WHITE">{user.address[0].toUpperCase()}</Text>
      </S.Badge>
      <Flex>
        <S.Text color="DARKER" numberOfLines={1}>
          {' '}
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

    ${({ theme: { metrics } }) => css`
      margin-bottom: ${metrics.SMALLEST}px;
      margin-right: ${metrics.SMALLEST}px;
    `}
  `,
  Badge: styled.View`
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: lightcoral;
    z-index: 1;

    width: ${ADDRESS_BADGE_SIZE + 1}px;
    height: ${ADDRESS_BADGE_SIZE + 1}px;
  `,
  RoundContainer: styled.View`
    width: 100%;
    border-width: 1px;
    border-radius: 15px;
    position: absolute;

    ${({ theme: { colors } }) => css`
      border-color: ${colors.LIGHT};
      height: ${ADDRESS_BADGE_SIZE}px;
    `}
  `,
  Text: styled(Text)`
    ${({ theme: { metrics } }) => css`
      margin-right: ${metrics.SMALLER}px;
    `}
  `,
};

export default memo(AddressBadge);
