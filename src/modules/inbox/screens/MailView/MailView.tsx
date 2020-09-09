import React from 'react';
import styled, { css } from 'styled-components/native';

import Flex from '@core/Flex';
import Header from '@core/Header';

const MailView = () => (
  <>
    <S.SafeArea />
    <Flex flex={1}>
      <Header />
    </Flex>
  </>
);

const S = {
  SafeArea: styled.SafeAreaView`
    ${({ theme: { colors } }) => css`
      background-color: ${colors.BACKGROUND};
    `}
  `,
};

export default MailView;
