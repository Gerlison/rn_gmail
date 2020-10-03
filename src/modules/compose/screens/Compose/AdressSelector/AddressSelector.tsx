import React, { memo, useCallback, useMemo, useState, useRef } from 'react';
import {
  Dimensions,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInput as RNTextInput,
  Pressable,
} from 'react-native';
import styled, { css } from 'styled-components/native';

import AddressBadge from './AddressBadge';
import AddressesList from './AddressesList';

import TextInput from '@core/TextInput';

import { COMPOSE_LABEL_SIZE } from '@modules/compose/helpers/constants';

import { User } from '@core/types';
import Text from '@core/Text';

const { width: windowWidth } = Dimensions.get('window');

type FocusState = {
  to: boolean;
  cc: boolean;
  bcc: boolean;
};

interface Props {
  id: keyof FocusState;
  isFocused: boolean;
  setFocusedSelector: React.Dispatch<React.SetStateAction<FocusState>>;
}

const AddressSelector: React.FC<Props> = ({
  id,
  isFocused,
  setFocusedSelector,
}) => {
  const inputRef = useRef<RNTextInput>(null);
  const [searchValue, setSearchValue] = useState('');
  const [addresses, setAddresses] = useState<User[]>([]);

  const selectedAddresses = useMemo(
    () => addresses.map(({ address }) => address),
    [addresses],
  );

  const selectedAddressesToList = useMemo(
    () => (
      <>
        {(isFocused ? addresses : addresses.slice(0, 2)).map((user) => (
          <AddressBadge key={user.id} user={user} />
        ))}
        {!isFocused && addresses.length > 2 && (
          <Text size="LARGER" color="REGULAR">
            {' '}
            +{addresses.length - 2}
          </Text>
        )}
      </>
    ),
    [addresses, isFocused],
  );

  const handleToggleFocus = useCallback(() => {
    setSearchValue('');
    setFocusedSelector((prev) => ({ ...prev, [id]: !prev[id] }));
  }, [id]);

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

  const handleFocusOnInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <S.Container onPress={handleFocusOnInput}>
      {selectedAddressesToList}

      <TextInput
        ref={inputRef}
        onFocus={handleToggleFocus}
        onBlur={handleToggleFocus}
        value={searchValue}
        onChangeText={setSearchValue}
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
  Container: styled(Pressable)`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    ${({ theme: { metrics } }) => css`
      max-width: ${windowWidth - metrics.MEDIUM * 2 - COMPOSE_LABEL_SIZE}px;
    `}
  `,
};

export default memo(AddressSelector);
