import React, { memo, useMemo } from 'react';
import styled, { css } from 'styled-components/native';

import Flex from '@core/Flex';
import Header from '@core/Header';
import AddressSelector from './AdressSelector';
import Text from '@core/Text';

import { COMPOSE_LABEL_SIZE } from '@modules/compose/helpers/constants';

const Compose: React.FC = () => {
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
        <S.Field>
          <S.Label>To</S.Label>
          <AddressSelector />
        </S.Field>
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
  Field: styled.View`
    flex-direction: row;
    border-bottom-width: 1px;

    ${({ theme: { metrics, colors } }) => css`
      padding: ${metrics.MEDIUM}px;
      border-color: ${colors.LIGHTER};
    `}
  `,
  Label: styled(Text).attrs({
    color: 'DARK',
  })`
    width: ${COMPOSE_LABEL_SIZE}px;
  `,
};

export default memo(Compose);
