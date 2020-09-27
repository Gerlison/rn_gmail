import React, { memo, useCallback, useState } from 'react';
import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

import AddressBadge from './AddressBadge';
import AddressesList from './AddressesList';

import TextInput from '@core/TextInput';

import { COMPOSE_LABEL_SIZE } from '@modules/compose/helpers/constants';

const { width: windowWidth } = Dimensions.get('window');

const AddressSelector: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeText = useCallback((text) => {
    setSearchValue(text);
  }, []);

  return (
    <S.Container>
      {[1, 2].map(() => (
        <AddressBadge />
      ))}
      <TextInput onChangeText={onChangeText} style={{ minWidth: 32 }} />
      <AddressesList searchFor={searchValue} />
    </S.Container>
  );
};

const S = {
  Container: styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    ${({ theme: { metrics } }) => css`
      max-width: ${windowWidth - metrics.MEDIUM * 2 - COMPOSE_LABEL_SIZE}px;
    `}
  `,
};

export default memo(AddressSelector);
