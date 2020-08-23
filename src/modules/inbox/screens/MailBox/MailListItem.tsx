import React, { useContext, useCallback, memo } from 'react';
import { Pressable, Platform } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '@core/Text';

import { spacing } from '@styles/metrics';
import { sizing } from '@styles/fonts';

import { Styled } from '@core/types';
import { Mail } from '@modules/inbox/types';

interface Props {
  mail: Mail;
  isSelected: boolean;
  setSelectedMails: React.Dispatch<React.SetStateAction<{}>>;
}

const MailListItem = ({
  mail: { id, labelIds, payload, date },
  isSelected,
  setSelectedMails,
}: Props) => {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  const toggleMailSelection = useCallback(() => {
    setSelectedMails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  return (
    <Pressable
      onPress={() => navigation.navigate('MailView')}
      onLongPress={toggleMailSelection}
    >
      <S.Container isSelected={isSelected}>
        <Pressable onPress={toggleMailSelection}>
          <S.Badge isSelected={isSelected}>
            {isSelected ? (
              <Icon name="check" size={sizing.icon.LARGE} color={theme.WHITE} />
            ) : (
              <S.VerticalCenteredText size="LARGEST" color="WHITE">
                {payload.from.name.charAt(0)}
              </S.VerticalCenteredText>
            )}
          </S.Badge>
        </Pressable>

        <S.View>
          <S.TitleRow>
            {labelIds.includes('2') && (
              <Icon
                name="label-variant"
                size={sizing.icon.LARGE}
                color={theme.QUATERNARY}
              />
            )}
            <S.Text style={{ flex: 1 }} type="title">
              {payload.from.name}
            </S.Text>
            <Text size="SMALL">{date.toLocaleDateString()}</Text>
          </S.TitleRow>

          <S.DescriptionRow>
            <S.View>
              <S.Text>{payload.subject}</S.Text>
              <S.Text>{payload.body}</S.Text>
            </S.View>
            <Icon
              name={`star${labelIds.includes('1') ? '' : '-outline'}`}
              size={sizing.icon.LARGE}
              color={labelIds.includes('1') ? theme.QUATERNARY : theme.REGULAR}
            />
          </S.DescriptionRow>
        </S.View>
      </S.Container>
    </Pressable>
  );
};

const S = {
  Container: styled.View<Styled<{ isSelected: boolean }>>`
    width: 100%;
    flex-direction: row;
    margin-left: ${spacing.SMALLEST}px;
    margin-bottom: ${spacing.SMALLEST}px;
    padding: ${spacing.MEDIUM}px;
    padding-left: ${spacing.SMALL}px;
    border-radius: 10px;
    background-color: ${({ theme, isSelected }) =>
      isSelected ? `${theme.PRIMARY}20` : theme.BACKGROUND};
  `,
  TitleRow: styled.View`
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: ${spacing.SMALLEST}px;
  `,
  DescriptionRow: styled.View`
    flex-direction: row;
    align-items: flex-end;
  `,
  Text: styled(Text).attrs({
    numberOfLines: 1,
    color: 'DARK',
  })`
    margin-right: ${spacing.SMALLER}px;
  `,
  Badge: styled.View<Styled<{ isSelected: boolean }>>`
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    margin-right: ${spacing.MEDIUM}px;
    border-radius: 20px;
    background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.PRIMARY : 'lightcoral'};
  `,
  View: styled.View`
    flex: 1;
  `,
  VerticalCenteredText: styled(Text)`
    bottom: ${Platform.OS === 'ios' ? -1.5 : 0}px;
  `,
};

export default memo(MailListItem);
