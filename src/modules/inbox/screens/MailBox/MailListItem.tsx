import React, { useContext, useCallback, memo } from 'react';
import { Pressable, Platform } from 'react-native';
import styled, { ThemeContext, css } from 'styled-components/native';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '@core/Text';

import fonts from '@styles/fonts';

import { Mail } from '@core/types';

interface Props {
  mail: Mail;
  isSelected: boolean;
  setSelectedMails: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
}

const MailListItem = ({ mail, isSelected, setSelectedMails }: Props) => {
  const { colors } = useContext(ThemeContext);
  const navigation = useNavigation();

  const toggleMailSelection = useCallback(() => {
    setSelectedMails((prev) => ({
      ...prev,
      [mail.id]: !prev[mail.id],
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
              <Icon name="check" size={fonts.icon.LARGE} color={colors.WHITE} />
            ) : (
              <S.VerticalCenteredText size="LARGEST" color="WHITE">
                {mail.from.name.charAt(0)}
              </S.VerticalCenteredText>
            )}
          </S.Badge>
        </Pressable>

        <S.View>
          <S.Row>
            {mail.labelIds.includes('2') && (
              <Icon
                name="label-variant"
                size={fonts.icon.LARGE}
                color={colors.QUATERNARY}
              />
            )}
            <S.Text style={{ flex: 1 }} type="title">
              {mail.from.name}
            </S.Text>
            <Text color="DARK" size="SMALL">
              {mail.date.toLocaleDateString()}
            </Text>
          </S.Row>

          <S.Row>
            <S.View>
              <S.Text>{mail.subject}</S.Text>
              <S.Text>{mail.body}</S.Text>
            </S.View>
            <Icon
              name={`star${mail.labelIds.includes('1') ? '' : '-outline'}`}
              size={fonts.icon.LARGE}
              color={
                mail.labelIds.includes('1') ? colors.QUATERNARY : colors.REGULAR
              }
            />
          </S.Row>
        </S.View>
      </S.Container>
    </Pressable>
  );
};

const S = {
  Container: styled.View<{ isSelected: boolean }>`
    ${({ theme: { colors, metrics }, isSelected }) => css`
      width: 100%;
      flex-direction: row;
      margin-left: ${metrics.SMALLEST}px;
      margin-bottom: ${metrics.SMALLEST}px;
      padding: ${metrics.SMALL}px;
      border-radius: 10px;
      background-color: ${isSelected
        ? `${colors.PRIMARY}20`
        : colors.BACKGROUND};
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
  Badge: styled.View<{ isSelected: boolean }>`
    ${({ theme: { colors, metrics }, isSelected }) => css`
      width: 40px;
      height: 40px;
      align-items: center;
      justify-content: center;
      margin-right: ${metrics.MEDIUM}px;
      border-radius: 20px;
      background-color: ${isSelected ? colors.PRIMARY : 'lightcoral'};
    `}
  `,
  View: styled.View`
    flex: 1;
  `,
  VerticalCenteredText: styled(Text)`
    bottom: ${Platform.OS === 'ios' ? -1.5 : 1}px;
  `,
};

export default memo(MailListItem);
