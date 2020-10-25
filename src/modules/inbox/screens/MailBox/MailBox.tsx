import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';

import MailList from './MailList';
import SearchBar from './SearchBar';

import ComposeButton from '@core/ComposeButton';

import { MailLabel } from '@core/types';

interface Props {
  selectedLabel: MailLabel;
}

const MailBox = ({ selectedLabel }: Props) => {
  const { navigate } = useNavigation();

  const navigateToCompose = useCallback(() => navigate('Compose'), []);

  return (
    <>
      <S.SafeArea />
      <S.Container>
        <SearchBar />
        <MailList selectedLabel={selectedLabel} />
        <ComposeButton onPress={navigateToCompose} />
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
