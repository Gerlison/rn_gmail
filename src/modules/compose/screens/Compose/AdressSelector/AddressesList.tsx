import React, { memo, useEffect, useMemo, useState } from 'react';
import { Dimensions, FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { useTransition } from 'react-native-redash';

import Text from '@core/Text';
import Flex from '@core/Flex';
import Pressable from '@core/Pressable';

import AuthorBadge from '@modules/inbox/components/AuthorBadge';

import { searchTextInArray } from '@helpers/functions';
import { useInterpolation } from '@helpers/hooks';

import { useTypedSelector } from '@store/index';

import { COMPOSE_LABEL_SIZE } from '@modules/compose/helpers/constants';

import { User } from '@core/types';

interface Props {
  searchFor: string;
  selectedAddresses: string[];
  onClickAddress: (arg0: User) => void;
}

const { useCode, eq, cond, call, onChange } = Animated;
const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const AddressesList: React.FC<Props> = ({
  searchFor,
  onClickAddress,
  selectedAddresses,
}) => {
  const animation = useTransition(!!searchFor);
  const interpolation = useInterpolation(animation);

  const { mails } = useTypedSelector(({ mails }) => mails);
  const { loggedUser } = useTypedSelector(({ users }) => users);

  const [result, setResult] = useState<User[]>([]);

  const authors = useMemo(
    () => [
      ...(mails || []).reduce((acc: User[], { from, to }) => {
        if (!selectedAddresses.includes(from.address)) acc.push(from);
        if (!selectedAddresses.includes(to.address)) acc.push(to);
        return acc;
      }, []),
    ],
    [mails, loggedUser, selectedAddresses],
  );

  const animatedContainerStyled = useMemo(
    () => ({
      opacity: interpolation([0, 1], [0, 1]),
      transform: [{ translateY: interpolation([0, 1], [-5, 0]) }],
    }),
    [],
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

  useCode(
    () => [
      onChange(
        animation,
        cond(
          eq(animation, 0),
          call([], () => setResult([])),
        ),
      ),
    ],
    [],
  );

  if (!result.length) return null;

  return (
    <S.Container style={animatedContainerStyled}>
      <S.FlatList
        data={result}
        keyExtractor={({ id }) => id}
        keyboardShouldPersistTaps="always"
        renderItem={({ item }) => (
          <S.Item onPress={() => onClickAddress(item)}>
            <S.Divisor />
            <Flex flexDirection="row" align="center" justify="space-between">
              <Flex>
                <S.Text numberOfLines={1}>{item.name}</S.Text>
                <Text size="SMALL" numberOfLines={1}>
                  {item.address}
                </Text>
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
  Container: styled(Animated.View)`
    position: absolute;

    ${({ theme: { metrics, colors } }) => css`
      width: ${windowWidth}px;
      height: ${windowHeight}px;
      background-color: ${colors.BACKGROUND};
      left: -${metrics.MEDIUM + COMPOSE_LABEL_SIZE}px;
      bottom: -${windowHeight + metrics.SMALL}px;
    `};
  `,
  Item: styled(Pressable)`
    ${({ theme: { metrics } }) => css`
      margin-bottom: ${metrics.MEDIUM}px;
      padding-left: ${metrics.MEDIUM + COMPOSE_LABEL_SIZE}px;
    `};
  `,
  Divisor: styled.View`
    height: 1px;

    ${({ theme: { metrics, colors } }) => css`
      margin-bottom: ${metrics.MEDIUM}px;
      background-color: ${colors.LIGHTER};
    `}
  `,
  Text: styled(Text)`
    ${({ theme: { metrics } }) => css`
      margin-bottom: ${metrics.SMALLEST}px;
    `}
  `,
  FlatList: styled(FlatList as new () => FlatList<User>)`
    width: 100%;
  `,
};

export default memo(AddressesList);
