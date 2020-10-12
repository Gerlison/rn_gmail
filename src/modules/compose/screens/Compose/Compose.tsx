import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

import Field from './Field';
import AddressesList from './AddressesList';

import Header from '@core/Header';
import AddressSelector from './AdressSelector';
import Text from '@core/Text';
import TextInput from '@core/TextInput';

import { COMPOSE_LABEL_SIZE } from '@modules/compose/helpers/constants';

import { User } from '@core/types';

const Compose: React.FC = () => {
  const selectorsPositionRef = useRef({ to: 0, cc: 0, bcc: 0 });

  const [searchValue, setSearchValue] = useState('');
  const [fieldsData, setFieldsData] = useState([
    {
      id: 'from',
      isFocused: false,
      selectedAddresses: [] as User[],
    },
    {
      id: 'to',
      isFocused: false,
      selectedAddresses: [] as User[],
    },
    {
      id: 'cc',
      isFocused: false,
      selectedAddresses: [] as User[],
    },
    {
      id: 'bcc',
      isFocused: false,
      selectedAddresses: [] as User[],
    },
  ]);

  const headerButtons = useMemo(
    () => [
      {
        icon: 'send-outline',
        onPress: () => {},
      },
    ],
    [],
  );

  const addressSelectorPostition = useMemo(
    () =>
      selectorsPositionRef.current[
        (fieldsData.find(({ isFocused }) => isFocused)?.id ||
          'to') as keyof typeof selectorsPositionRef.current
      ],
    [fieldsData, searchValue],
  );

  const handleAddAddress = useCallback((user: User) => {
    setSearchValue('');
    setFieldsData((prev) =>
      prev.map((field) => ({
        ...field,
        selectedAddresses: field.isFocused
          ? [...field.selectedAddresses, user]
          : field.selectedAddresses,
      })),
    );
  }, []);

  return (
    <>
      <S.SafeArea />
      <Header title="Compose" buttons={headerButtons} />

      <S.KAView>
        {fieldsData.map((field) => (
          <Field
            key={field.id}
            id={field.id}
            selectorsPositionRef={selectorsPositionRef}
          >
            <S.Label>{field.id[0].toUpperCase() + field.id.slice(1)}</S.Label>
            <AddressSelector
              id={field.id}
              isFocused={field.isFocused}
              selectedAddresses={field.selectedAddresses}
              searchValue={field.isFocused ? searchValue : ''}
              setSearchValue={setSearchValue}
              setFieldsData={setFieldsData}
            />
          </Field>
        ))}

        <Field>
          <S.TextInput placeholder="Subject" />
        </Field>
        <S.BodyTextInput multiline placeholder="Compose email" />

        <AddressesList
          selectorsPosition={addressSelectorPostition}
          searchFor={searchValue}
          onClickAddress={handleAddAddress}
        />
      </S.KAView>
    </>
  );
};

const S = {
  SafeArea: styled.SafeAreaView`
    ${({ theme: { colors } }) => css`
      background-color: ${colors.BACKGROUND};
    `}
  `,
  Label: styled(Text).attrs({
    color: 'DARK',
  })`
    width: ${COMPOSE_LABEL_SIZE}px;
    ${({ theme: { metrics } }) => css`
      margin: 6px 0px;
    `}
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
  KAView: styled.KeyboardAvoidingView.attrs({
    behavior: Platform.OS === 'ios' ? 'padding' : undefined,
  })`
    flex: 1;

    ${({ theme: { colors } }) => css`
      background-color: ${colors.BACKGROUND};
    `}
  `,
};

export default Compose;
