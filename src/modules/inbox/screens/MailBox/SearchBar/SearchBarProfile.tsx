import React, { memo } from 'react';
import styled, { css } from 'styled-components/native';

import Text from '@core/Text';

import { useTypedSelector } from '@store/index';

const PROFILE_SIZE = 30;

const SearchBarProfile: React.FC = () => {
  const { loggedUser } = useTypedSelector((state) => state.users);

  return (
    <S.Container>
      <S.Profile>
        <Text color="WHITE">{loggedUser?.name[0].toUpperCase()}</Text>
      </S.Profile>
    </S.Container>
  );
};

const S = {
  Container: styled.View`
    width: ${PROFILE_SIZE}px;
    height: 100%;

    justify-content: center;
    align-items: center;

    overflow: hidden;
  `,
  Profile: styled.View`
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    position: absolute;

    ${({ theme: { colors } }) =>
      css`
        width: ${PROFILE_SIZE}px;
        height: ${PROFILE_SIZE}px;
        background-color: ${colors.TERTIARY};
      `};
  `,
};

export default memo(SearchBarProfile);
