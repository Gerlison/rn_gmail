import React, { useState, memo } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import styled, { css } from 'styled-components';
import Animated from 'react-native-reanimated';

import MailListItem from './MailListItem';

import Text from '@core/Text';

import { useTypedSelector } from '@store/index';

import { SEARCH_BAR_HEIGHT } from '@modules/inbox/helpers/constants';

import Dimensions from '@helpers/dimensions';

import { MailLabel, Mail } from '@core/types';

interface Props {
  selectedLabel: MailLabel;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const MailList: React.FC<Props> = ({ selectedLabel, onScroll }) => {
  const { mails } = useTypedSelector((state) => state.mails);

  const [selectedMails, setSelectedMails] = useState<{
    [key: string]: boolean;
  }>({});

  return (
    <S.FlatList
      bounces={false}
      onScroll={onScroll}
      scrollEventThrottle={8}
      data={mails?.filter(({ labelIds }) =>
        labelIds.includes(selectedLabel.id),
      )}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={<S.Text type="label">{selectedLabel.name}</S.Text>}
      renderItem={({ item }) => (
        <MailListItem
          mail={item}
          isSelected={selectedMails[item.id]}
          setSelectedMails={setSelectedMails}
        />
      )}
    />
  );
};

const S = {
  Text: styled(Text)`
    ${({ theme: { metrics } }) => css`
      margin-left: ${metrics.MEDIUM}px;
      margin-bottom: ${metrics.SMALLEST}px;
    `}
  `,
  FlatList: styled(
    Animated.createAnimatedComponent(FlatList) as new () => FlatList<Mail>,
  ).attrs(({ theme: { metrics } }) => ({
    contentContainerStyle: {
      paddingTop: metrics.LARGEST + SEARCH_BAR_HEIGHT,
      paddingBottom: Dimensions.BOTTOM_OFFSET,
    },
  }))``,
};

export default memo(MailList);
