import React, { useCallback, memo } from 'react';
import styled, { css } from 'styled-components/native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import moment from 'moment';

import Text from '@core/Text';
import Icon from '@core/Icon';
import Pressable from '@core/Pressable';
import Flex from '@core/Flex';

import { Mail } from '@core/types';
import AuthorBadge from '@modules/inbox/components/AuthorBadge';

import { InboxParamList } from '@modules/inbox';

interface Props {
  mail: Mail;
  isSelected: boolean;
  setSelectedMails: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
}

const MailListItem = ({ mail, isSelected, setSelectedMails }: Props) => {
  const { navigate } = useNavigation<
    NavigationProp<InboxParamList, 'MailBox'>
  >();

  const toggleMailSelection = useCallback(() => {
    setSelectedMails((prev) => ({
      ...prev,
      [mail.id]: !prev[mail.id],
    }));
  }, []);

  return (
    <S.Container isSelected={isSelected}>
      <S.Touchable
        onPress={() => navigate('MailView', { mail })}
        onLongPress={toggleMailSelection}
      >
        <AuthorBadge
          onPress={toggleMailSelection}
          isSelected={isSelected}
          char={mail.from.name.charAt(0)}
        />

        <Flex flex={1} background="TRANSPARENT">
          <S.Row>
            {mail.labelIds.includes('2') && (
              <Icon name="label-variant" size="LARGE" color="QUATERNARY" />
            )}
            <S.Text style={{ flex: 1 }} type="title">
              {mail.from.name}
            </S.Text>
            <Text color="DARK" size="MEDIUM">
              {moment(mail.date).format('DD MMM')}
            </Text>
          </S.Row>

          <S.Row>
            <Flex flex={1} background="TRANSPARENT">
              <S.Text>{mail.subject}</S.Text>
              <S.Text>{mail.body}</S.Text>
            </Flex>
            <Icon
              onPress={() => {}}
              name={`star${mail.labelIds.includes('1') ? '' : '-outline'}`}
              size="LARGE"
              color={mail.labelIds.includes('1') ? 'QUATERNARY' : 'REGULAR'}
            />
          </S.Row>
        </Flex>
      </S.Touchable>
    </S.Container>
  );
};

const S = {
  Container: styled.View<{ isSelected: boolean }>`
    width: 100%;
    border-radius: 10px;
    overflow: hidden;

    ${({ theme: { colors, metrics }, isSelected }) => css`
      margin-left: ${metrics.SMALLEST}px;
      margin-bottom: ${metrics.SMALLEST}px;
      background-color: ${isSelected
        ? `${colors.PRIMARY}20`
        : colors.BACKGROUND};
    `}
  `,
  Touchable: styled(Pressable)`
    flex-direction: row;

    ${({ theme: { metrics } }) => css`
      padding: ${metrics.SMALL}px;
    `}
  `,
  Row: styled.View`
    flex-direction: row;
    align-items: flex-end;
  `,
  Text: styled(Text).attrs({
    numberOfLines: 1,
    color: 'DARK',
  })`
    margin-right: ${({ theme: { metrics } }) => metrics.SMALLER}px;
  `,
};

export default memo(MailListItem);
