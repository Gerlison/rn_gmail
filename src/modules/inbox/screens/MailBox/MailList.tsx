import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import { RouteProp, useRoute } from '@react-navigation/core';

import MailListItem from './MailListItem';

import Text from '@core/Text';

import { spacing } from '@styles/metrics';

import { Mail } from '@modules/inbox/types';
import { DrawerParamList } from '@navigation/types';

type Route = RouteProp<DrawerParamList, 'Home'>;

const MAIL_LIST: Mail[] = [
  {
    id: '1',
    date: new Date(),
    labelIds: ['1'],
    payload: {
      from: {
        id: '1',
        name: 'Ubsoft Account Support',
        address: 'support@ubsoft.com',
      },
      to: {
        id: '2',
        name: 'Francisco Gerlison',
        address: 'franciscojerlison1@gmail.com',
      },
      subject: 'Alteração recente na usa conta de e-mail',
      body:
        'Estamos entrando em contato para alertar que houve uma alteração de senha na sua conta de e-mail recentemente',
    },
  },
  {
    id: '2',
    date: new Date(),
    labelIds: ['1'],
    payload: {
      from: {
        id: '1',
        name: 'Ubsoft Account Support',
        address: 'support@ubsoft.com',
      },
      to: {
        id: '2',
        name: 'Francisco Gerlison',
        address: 'franciscojerlison1@gmail.com',
      },
      subject: 'Alteração recente na usa conta de e-mail',
      body:
        'Estamos entrando em contato para alertar que houve uma alteração de senha na sua conta de e-mail recentemente',
    },
  },
];

const MailList = () => {
  const {
    params: { selectedLabel },
  } = useRoute<Route>();

  const [selectedMails, setSelectedMails] = useState({});

  return (
    <>
      <FlatList<Mail>
        data={MAIL_LIST}
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
    </>
  );
};

const S = {
  Text: styled(Text)`
    margin-left: ${spacing.MEDIUM}px;
    margin-bottom: ${spacing.SMALLER}px;
  `,
};

export default MailList;
