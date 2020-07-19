import React from 'react';
import { Pressable, Platform } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '@core/Text';

import { spacing } from '@styles/metrics';
import { sizing } from '@styles/fonts';

import { Styled } from '@core/types';

const MailListItem = () => {
  return (
    <Pressable>
      {({ pressed }) => (
        <S.Container pressed={pressed}>
          <S.Badge>
            <S.VerticalCenteredText
              size="LARGEST"
              weight="ROBOTO_REGULAR"
              color="WHITE"
            >
              U
            </S.VerticalCenteredText>
          </S.Badge>

          <S.View>
            <S.TitleRow>
              <Icon name="label-variant" size={sizing.icon.LARGE} />
              <S.Text style={{ flex: 1 }} type="title">
                This is the mail author
              </S.Text>
              <Text size="SMALL">12 Jul</Text>
            </S.TitleRow>

            <S.DescriptionRow>
              <S.View>
                <S.Text weight="ROBOTO_REGULAR">
                  This is my mail huge, big, enormous mail title
                </S.Text>
                <S.Text weight="ROBOTO_REGULAR">
                  This is my mail huge, big, enormous mail description
                </S.Text>
              </S.View>
              <Icon name="star" size={sizing.icon.LARGE} />
            </S.DescriptionRow>
          </S.View>
        </S.Container>
      )}
    </Pressable>
  );
};

const S = {
  Container: styled.View<Styled<{ pressed: boolean }>>`
    width: 100%;
    flex-direction: row;
    margin-left: ${spacing.SMALLEST / 2}px;
    margin-bottom: ${spacing.SMALLEST / 2}px;
    padding: ${spacing.MEDIUM}px;
    border-radius: 10px;
    opacity: ${({ pressed }) => (pressed ? 0.5 : 1)};
    background-color: ${({ theme }) => theme.WHITE};
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
  Badge: styled.View`
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    margin-right: ${spacing.MEDIUM}px;
    border-radius: 20px;
    background-color: lightcoral;
  `,
  View: styled.View`
    flex: 1;
  `,
  VerticalCenteredText: styled(Text)`
    bottom: ${Platform.OS === 'ios' ? -1.5 : 0};
  `,
};

export default MailListItem;
