import React from 'react';
import styled from 'styled-components/native';

import MailList from './MailList';
import SearchBar from './SearchBar';

import { MailLabel } from '@core/types';

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
  SafeArea: styled.SafeAreaView`
    background-color: ${({ theme: { colors } }) => colors.BACKGROUND};
  `,
  Container: styled.View`
    flex: 1;
    background-color: ${({ theme: { colors } }) => colors.BACKGROUND};
  `,
};

export default MailBox;
