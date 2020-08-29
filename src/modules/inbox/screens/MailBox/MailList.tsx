import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled, { css } from 'styled-components';

import MailListItem from './MailListItem';

import Text from '@core/Text';

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
      contentContainerStyle={{ paddingTop: 77 }}
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
};

export default MailList;
