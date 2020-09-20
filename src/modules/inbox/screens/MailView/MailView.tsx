import React, { useCallback, useMemo, useState } from 'react';
import {
  Platform,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import styled, { css } from 'styled-components/native';

import Author from './Author';
import BottomActions from './BottomActions';

import Flex from '@core/Flex';
import Header from '@core/Header';
import Text from '@core/Text';
import Icon from '@core/Icon';
import Pressable from '@core/Pressable';

import LabelBadge from '@modules/inbox/components/LabelBadge';

const MailView = () => {
  const [scrollState, setScrollState] = useState(0);

  const headerButtons = useMemo(
    () => [
      {
        icon: 'trash-can-outline',
        onPress: () => {},
      },
      {
        icon: 'email-open-outline',
        onPress: () => {},
      },
    ],
    [],
  );

  const onScroll = useCallback(
    ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (nativeEvent.contentOffset.y > 0 && scrollState === 0) {
        setScrollState(1);
      } else if (nativeEvent.contentOffset.y === 0 && scrollState > 0) {
        setScrollState(0);
      }
    },
    [scrollState],
  );

  return (
    <>
      <S.SafeArea />
      <Flex flex={1}>
        <Header buttons={headerButtons} scrollState={scrollState} />
        <S.Container onScroll={onScroll} scrollEventThrottle={8}>
          <Flex>
            <S.Title>
              <S.Subject size="LARGEST">
                Assunto urgentíssimo! <LabelBadge>Inbox</LabelBadge>
              </S.Subject>

              <Pressable android_ripple={{}}>
                <Icon name="star-outline" size="LARGE" color="REGULAR" />
              </Pressable>
            </S.Title>

            <Author
              from="Robson Silva"
              to="me"
              date={new Date('09/17/2020 5:21')}
            />

            <Text>Ta ficando massa</Text>
          </Flex>

          <BottomActions />
        </S.Container>
      </Flex>
    </>
  );
};

const S = {
  SafeArea: styled.SafeAreaView`
    ${({ theme: { colors } }) => css`
      background-color: ${colors.BACKGROUND};
    `}
  `,
  Container: styled.ScrollView.attrs(({ theme: { metrics } }) => ({
    contentContainerStyle: {
      flexGrow: 1,
      justifyContent: 'space-between',
      paddingTop: metrics.SMALLER,
      paddingHorizontal: metrics.MEDIUM,
      paddingBottom: Platform.select({
        ios: metrics.LARGEST,
        android: metrics.MEDIUM,
      }),
    },
  }))`
    width: 100%;

    ${({ theme: { colors } }) => css`
      background-color: ${colors.BACKGROUND};
    `}
  `,

  Title: styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    ${({ theme: { metrics } }) => css`
      margin-left: ${metrics.SMALLEST}px;
    `}
  `,
  Subject: styled(Text)`
    flex: 1;
  `,
};

export default MailView;
