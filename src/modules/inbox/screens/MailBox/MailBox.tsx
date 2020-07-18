import React from 'react';
import styled from 'styled-components/native';

import MailList from './MailList';
import SearchBar from './SearchBar';

import { Styled } from '@core/types';

const MailBox = () => {
  return (
    <S.Container>
      <S.SafeArea />
      <SearchBar />
      <MailList />
    </S.Container>
  );
};

const S = {
  SafeArea: styled.SafeAreaView<Styled>`
    background-color: ${({ theme }) => theme.WHITE};
  `,
  Container: styled.View<Styled>`
    flex: 1;
    background-color: ${({ theme }) => theme.WHITE};
  `,
};

export default MailBox;
