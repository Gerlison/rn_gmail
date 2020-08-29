import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';

import MailListItem from './MailListItem';

import Text from '@core/Text';

import { spacing } from '@styles/metrics';

import { useTypedSelector } from '@store/index';
import { MailLabel, Mail } from '@core/types';

interface Props {
  selectedLabel: MailLabel;
}

const MailList = ({ selectedLabel }: Props) => {
  const { mails } = useTypedSelector((state) => state.mails);

  const [selectedMails, setSelectedMails] = useState<{
    [key: string]: boolean;
  }>({});

  return (
    <FlatList<Mail>
      data={mails?.filter(({ labelIds }) =>
        labelIds.includes(selectedLabel.id),
      )}
      keyExtractor={({ id }) => id}
      contentContainerStyle={{ paddingTop: 50 + spacing.LARGER }}
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
    margin-left: ${spacing.MEDIUM}px;
    margin-bottom: ${spacing.SMALLER}px;
  `,
};

export default MailList;
