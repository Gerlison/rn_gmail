import React from 'react';
import styled, { css } from 'styled-components/native';

import Header from '@core/Header';
import Text from '@core/Text';

import { useTypedSelector } from '@store/index';
import Flex from '@core/Flex';

const Settings: React.FC = () => {
  const { users } = useTypedSelector((state) => state.users);

  return (
    <>
      <S.SafeArea />
      <Header title="Settings" />

      <S.Container>
        <Flex>
          <S.Item>
            <Text type="label">Logged in</Text>
          </S.Item>

          {users?.map(({ id, address }) => (
            <S.Item key={id}>
              <Text color="DARK">{address}</Text>
            </S.Item>
          ))}
        </Flex>

        <S.Footer>
          <Text size="SMALLER" color="REGULAR">
            Created by
          </Text>
          <Text color="DARK">Gerlison</Text>
        </S.Footer>
      </S.Container>
    </>
  );
};

const S = {
  Container: styled.ScrollView.attrs(({ theme: { metrics } }) => ({
    contentContainerStyle: {
      flexGrow: 1,
      justifyContent: 'space-between',
      paddingBottom: metrics.LARGE,
    },
  }))`
    ${({ theme: { colors } }) => css`
      background-color: ${colors.BACKGROUND};
    `}
  `,
  SafeArea: styled.SafeAreaView`
    ${({ theme: { colors } }) => css`
      background-color: ${colors.BACKGROUND};
    `}
  `,
  Item: styled.View`
    ${({ theme: { metrics } }) => css`
      padding: ${metrics.SMALLER}px ${metrics.MEDIUM}px;
    `}
  `,
  Footer: styled.View`
    align-items: center;

    ${({ theme: { metrics } }) => css`
      margin-top: ${metrics.LARGE}px;
    `}
  `,
};

export default Settings;
