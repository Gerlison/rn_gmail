import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';
import {
  DrawerContentScrollView,
  DrawerNavigationProp,
} from '@react-navigation/drawer';

import DrawerOption from './DrawerOption';

import Text from '@core/Text';

import { useTypedSelector } from '@store/index';

import { Styled, MailLabel } from '@core/types';
import { spacing } from '@styles/metrics';
import { DrawerParamList } from '@navigation/types';

interface Props {
  navigation: DrawerNavigationProp<DrawerParamList, 'Home'>;
}

const Drawer = ({ navigation }: Props) => {
  const labels = useTypedSelector((state) => state.labels);

  const [selectedOption, setSelectedOption] = useState(labels[0].id);

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
      {labels.map((label) => (
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
