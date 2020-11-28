import React, { useCallback, useRef } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';
import { onScrollEvent } from 'react-native-redash';
import { Value } from 'react-native-reanimated';

import MailList from './MailList';
import SearchBar from './SearchBar';

import ComposeButton from '@core/ComposeButton';

import { MailLabel } from '@core/types';

interface Props {
  selectedLabel: MailLabel;
}

const MailBox = ({ selectedLabel }: Props) => {
  const { navigate } = useNavigation();

  const scrollY = useRef(new Value(0)).current;

  const navigateToCompose = useCallback(() => navigate('Compose'), []);

  return (
    <>
      <S.SafeArea />
      <S.Container>
        <SearchBar scrollY={scrollY} />
        <MailList
          selectedLabel={selectedLabel}
          onScroll={onScrollEvent({ y: scrollY })}
        />
        <ComposeButton onPress={navigateToCompose} scrollY={scrollY} />
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
