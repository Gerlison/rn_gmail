import React from 'react';
import styled from 'styled-components/native';

import { Styled } from '@core/types';

const MailView = () => {
  return (
    <S.Container>
      <></>
    </S.Container>
  );
};

const S = {
  Container: styled.View<Styled>`
    flex: 1;
    background-color: ${({ theme }) => theme.BACKGROUND};
  `,
};

export default MailView;
