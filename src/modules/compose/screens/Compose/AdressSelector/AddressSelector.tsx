import React, { memo, useCallback, useMemo, useState } from 'react';
import {
  Dimensions,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import styled, { css } from 'styled-components/native';

import AddressBadge from './AddressBadge';
import AddressesList from './AddressesList';

import TextInput from '@core/TextInput';

import { COMPOSE_LABEL_SIZE } from '@modules/compose/helpers/constants';

import { User } from '@core/types';

const { width: windowWidth } = Dimensions.get('window');

const AddressSelector: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [addresses, setAddresses] = useState<User[]>([]);

  const selectedAddresses = useMemo(
    () => addresses.map(({ address }) => address),
    [addresses],
  );

  const handleChangeText = useCallback((text) => {
    setSearchValue(text);
  }, []);

  const handleAddAddress = useCallback((user: User) => {
    setSearchValue('');
    setAddresses((prev) => [...prev, user]);
  }, []);

  const handleRemoveAddress = useCallback(
    ({ nativeEvent }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
      if (nativeEvent.key === 'Backspace' && !searchValue)
        setAddresses((prev) => {
          const prevClone = [...prev];
          prevClone.pop();
          return prevClone;
        });
    },
    [searchValue],
  );

  return (
    <S.Container>
      {addresses.map((user) => (
        <AddressBadge key={user.id} user={user} />
      ))}
      <S.TextInput
        value={searchValue}
        onChangeText={handleChangeText}
        onKeyPress={handleRemoveAddress}
      />
      <AddressesList
        searchFor={searchValue}
        onClickAddress={handleAddAddress}
        selectedAddresses={selectedAddresses}
      />
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
  TextInput: styled(TextInput)`
    width: 100%;
  `,
};

export default memo(AddressSelector);
