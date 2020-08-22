import React from 'react';
import styled from 'styled-components/native';

import MailList from './MailList';
import SearchBar from './SearchBar';

import { Styled } from '@core/types';
import { MailLabel } from '@modules/inbox/types';

interface Props {
  selectedLabel: MailLabel;
}

const MailBox = ({ selectedLabel }: Props) => {
  return (
    <>
      <S.SafeArea />
      <S.Container>
        <SearchBar />
        <MailList selectedLabel={selectedLabel} />
      </S.Container>
    </>
  );
};

const S = {
  SafeArea: styled.SafeAreaView<Styled>`
    background-color: ${({ theme }) => theme.BACKGROUND};
  `,
  Container: styled.View<Styled>`
    flex: 1;
    background-color: ${({ theme }) => theme.BACKGROUND};
  `,
};

export default MailBox;
