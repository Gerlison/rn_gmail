import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import DrawerOption from './DrawerOption';

import Text from '@core/Text';

import { MailLabel } from '@modules/inbox/types';
import { Styled } from '@core/types';
import { spacing } from '@styles/metrics';

type Props = DrawerContentComponentProps<DrawerContentOptions>;

const LABELS: MailLabel[] = [
  {
    id: '1',
    name: 'Primary',
    mailTotal: 0,
    mailUnread: 0,
    cosmetic: {
      icon: 'inbox',
      textColor: '#E04444',
      backgroundColor: '#E0444420',
    },
  },
  {
    id: '2',
    name: 'Social',
    mailTotal: 0,
    mailUnread: 0,
    cosmetic: {
      icon: 'account-multiple-outline',
      textColor: '#4473E0',
      backgroundColor: '#4473E020',
    },
  },
  {
    id: '3',
    name: 'Promotions',
    mailTotal: 0,
    mailUnread: 0,
    cosmetic: {
      icon: 'tag-multiple-outline',
      textColor: '#23A923',
      backgroundColor: '#23A92320',
    },
  },
  {
    id: '4',
    name: 'Updates',
    mailTotal: 0,
    mailUnread: 0,
    cosmetic: {
      icon: 'alert-circle-outline',
      textColor: '#FF8C00',
      backgroundColor: '#FF8C0020',
    },
  },
  {
    id: '5',
    name: 'Forums',
    mailTotal: 0,
    mailUnread: 0,
    cosmetic: {
      icon: 'message-text-outline',
      textColor: '#A74BD7',
      backgroundColor: '#A74BD720',
    },
  },
];

const Drawer = ({ navigation }: Props) => {
  const [selectedOption, setSelectedOption] = useState(LABELS[0].id);

  const onPressOption = useCallback(
    (label: MailLabel) => () => {
      setSelectedOption(label.id);
      navigation.setParams({
        selectedLabel: label,
      });
      navigation.closeDrawer();
    },
    [],
  );

  return (
    <DrawerContentScrollView>
      <S.Title>
        <Text style={{ color: '#E04444' }} size="LARGER">
          Gmail
        </Text>
      </S.Title>
      {LABELS.map((label) => (
        <DrawerOption
          key={label.id}
          label={label}
          focused={selectedOption === label.id}
          onPress={onPressOption(label)}
        />
      ))}
    </DrawerContentScrollView>
  );
};

const S = {
  SafeArea: styled.SafeAreaView<Styled>`
    background-color: ${({ theme }) => theme.WHITE};
  `,
  Title: styled.View<Styled>`
    width: 100%;
    color: #e04444;
    padding: ${spacing.MEDIUM}px;
    margin-bottom: ${spacing.MEDIUM}px;
    border-bottom-width: 0.5px;
    border-color: ${({ theme }) => theme.LIGHT};
  `,
};

export default Drawer;
