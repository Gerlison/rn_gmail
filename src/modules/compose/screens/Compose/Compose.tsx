import React, { useMemo, useState } from 'react';
import styled, { css } from 'styled-components/native';

import Flex from '@core/Flex';
import Header from '@core/Header';
import AddressSelector from './AdressSelector';
import Text from '@core/Text';
import TextInput from '@core/TextInput';

import { COMPOSE_LABEL_SIZE } from '@modules/compose/helpers/constants';

const Compose: React.FC = () => {
  const [focusedSelector, setFocusedSelector] = useState({
    to: false,
    cc: false,
    bcc: false,
  });

  const headerButtons = useMemo(
    () => [
      {
        icon: 'send-outline',
        onPress: () => {},
      },
    ],
    [],
  );

  return (
    <>
      <S.SafeArea />
      <Header title="Compose" buttons={headerButtons} />
      <Flex flex={1}>
        <S.Field isFocused={focusedSelector.to}>
          <S.Label>To</S.Label>
          <AddressSelector
            id="to"
            isFocused={focusedSelector.to}
            setFocusedSelector={setFocusedSelector}
          />
        </S.Field>

        <S.Field isFocused={focusedSelector.cc}>
          <S.Label>Cc</S.Label>
          <AddressSelector
            id="cc"
            isFocused={focusedSelector.cc}
            setFocusedSelector={setFocusedSelector}
          />
        </S.Field>

        <S.Field isFocused={focusedSelector.bcc}>
          <S.Label>Bcc</S.Label>
          <AddressSelector
            id="bcc"
            isFocused={focusedSelector.bcc}
            setFocusedSelector={setFocusedSelector}
          />
        </S.Field>

        <S.Field>
          <S.TextInput placeholder="Subject" />
        </S.Field>
        <S.BodyTextInput multiline placeholder="Compose email" />
      </Flex>
    </>
  );
};

const S = {
  SafeArea: styled.SafeAreaView`
    ${({ theme: { colors } }) => css`
      background-color: ${colors.BACKGROUND};
    `}
  `,
  Field: styled.View<{ isFocused?: boolean }>`
    flex-direction: row;
    border-bottom-width: 1px;

    ${({ theme: { metrics, colors }, isFocused }) => css`
      padding: ${metrics.MEDIUM}px;
      border-color: ${colors.LIGHTER};
      z-index: ${isFocused ? 2 : 0};
    `}
  `,
  Label: styled(Text).attrs({
    color: 'DARK',
  })`
    width: ${COMPOSE_LABEL_SIZE}px;
  `,
  TextInput: styled(TextInput)`
    width: 100%;
  `,
  BodyTextInput: styled(TextInput)`
    width: 100%;
    flex: 1;

    ${({ theme: { metrics } }) => css`
      padding: ${metrics.MEDIUM}px;
    `}
  `,
};

export default Compose;
