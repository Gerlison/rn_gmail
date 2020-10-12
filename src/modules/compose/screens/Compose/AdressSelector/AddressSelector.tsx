import React, { memo, useCallback, useMemo, useRef } from 'react';
import {
  Dimensions,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInput as RNTextInput,
  Pressable,
} from 'react-native';
import styled, { css } from 'styled-components/native';

import AddressBadge from './AddressBadge';

import TextInput from '@core/TextInput';
import Text from '@core/Text';

import { COMPOSE_LABEL_SIZE } from '@modules/compose/helpers/constants';

import { User } from '@core/types';

const { width: windowWidth } = Dimensions.get('window');

type FieldsDataState = {
  id: string;
  isFocused: boolean;
  selectedAddresses: User[];
}[];

interface Props {
  id: string;
  isFocused: boolean;
  searchValue: string;
  selectedAddresses: User[];
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setFieldsData: React.Dispatch<React.SetStateAction<FieldsDataState>>;
}

const AddressSelector: React.FC<Props> = ({
  id,
  isFocused,
  searchValue,
  selectedAddresses,
  setFieldsData,
  setSearchValue,
}) => {
  const inputRef = useRef<RNTextInput>(null);

  const selectedAddressesToList = useMemo(
    () => (
      <>
        {(isFocused ? selectedAddresses : selectedAddresses.slice(0, 2)).map(
          (user, index) => (
            <AddressBadge key={user.id + index} user={user} />
          ),
        )}
        {!isFocused && selectedAddresses.length > 2 && (
          <Text size="LARGER" color="REGULAR">
            {' '}
            +{selectedAddresses.length - 2}
          </Text>
        )}
      </>
    ),
    [selectedAddresses, isFocused],
  );

  const handleToggleFocus = useCallback(() => {
    setSearchValue('');
    setFieldsData((prev) =>
      prev.map((field) => ({
        ...field,
        isFocused: field.id === id ? !field.isFocused : field.isFocused,
        selectedAddresses:
          field.id === id && field.isFocused && searchValue
            ? [
                ...field.selectedAddresses,
                { id: searchValue, address: searchValue, name: searchValue },
              ]
            : field.selectedAddresses,
      })),
    );
  }, [id, searchValue]);

  const handleKeyPress = useCallback(
    ({ nativeEvent }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
      if (nativeEvent.key === 'Backspace' && !searchValue)
        return setFieldsData((prev) =>
          prev.map((field) => ({
            ...field,
            selectedAddresses:
              field.id === id && field.isFocused
                ? field.selectedAddresses.slice(0, -1)
                : field.selectedAddresses,
          })),
        );

      if (nativeEvent.key === 'Enter' && searchValue)
        setFieldsData((prev) =>
          prev.map((field) => ({
            ...field,
            selectedAddresses:
              field.id === id && !field.isFocused
                ? [
                    ...field.selectedAddresses,
                    {
                      id: searchValue,
                      address: searchValue,
                      name: searchValue,
                    },
                  ]
                : field.selectedAddresses,
          })),
        );
    },
    [searchValue, id],
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
        onKeyPress={handleKeyPress}
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
