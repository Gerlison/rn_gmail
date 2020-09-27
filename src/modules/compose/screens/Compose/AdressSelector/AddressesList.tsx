import React, { memo, useEffect, useMemo, useState } from 'react';
import { Dimensions, FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';

import Text from '@core/Text';
import Flex from '@core/Flex';
import Pressable from '@core/Pressable';

import AuthorBadge from '@modules/inbox/components/AuthorBadge';

import { searchTextInArray } from '@helpers/functions';

import { useTypedSelector } from '@store/index';

import { COMPOSE_LABEL_SIZE } from '@modules/compose/helpers/constants';

import { User } from '@core/types';

interface Props {
  searchFor: string;
}

const { width: windowWidth } = Dimensions.get('window');

const AddressesList: React.FC<Props> = ({ searchFor }) => {
  const { mails } = useTypedSelector(({ mails }) => mails);
  const { loggedUser } = useTypedSelector(({ users }) => users);

  const [result, setResult] = useState<User[]>([]);

  const authors = useMemo(
    () => [
      ...(mails || []).reduce((acc: User[], { from, to }) => {
        acc.push(from);
        acc.push(to);
        return acc;
      }, []),
    ],
    [mails, loggedUser],
  );

  useEffect(() => {
    if (!searchFor) return;

    const searchedAddresses = searchTextInArray(
      [...new Set(authors.map(({ address }) => address))],
      searchFor,
    );

    const searchedAuthors = searchedAddresses.map(
      (item) => authors.find(({ address }) => address === item) as User,
    );

    setResult(searchedAuthors || []);
  }, [searchFor, authors]);

  if (!searchFor) return null;

  return (
    <S.Container>
      <FlatList<User>
        data={result}
        keyExtractor={({ address }) => address}
        renderItem={({ item }) => (
          <S.Item>
            <S.Divisor />
            <Flex flexDirection="row" align="center" justify="space-between">
              <Flex>
                <S.Text>{item.name}</S.Text>
                <Text size="SMALL">{item.address}</Text>
              </Flex>
              <AuthorBadge char={item.name[0]} />
            </Flex>
          </S.Item>
        )}
      />
    </S.Container>
  );
};

const S = {
  Container: styled.View`
    width: ${windowWidth}px;
    min-height: 100px;

    ${({ theme: { metrics } }) => css`
      left: -${metrics.MEDIUM + COMPOSE_LABEL_SIZE}px;
    `};
  `,
  Item: styled(Pressable)`
    ${({ theme: { metrics } }) => css`
      padding-left: ${metrics.MEDIUM + COMPOSE_LABEL_SIZE}px;
    `};
  `,
  Divisor: styled.View`
    height: 1px;

    ${({ theme: { metrics, colors } }) => css`
      margin: ${metrics.MEDIUM}px 0px;
      background-color: ${colors.LIGHTER};
    `}
  `,
  Text: styled(Text)`
    ${({ theme: { metrics } }) => css`
      margin-bottom: ${metrics.SMALLEST}px;
    `}
  `,
};

export default memo(AddressesList);
