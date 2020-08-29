import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components/native';
import {
  DrawerContentScrollView,
  DrawerNavigationProp,
} from '@react-navigation/drawer';

import DrawerOption from './DrawerOption';

import Text from '@core/Text';

import { useTypedSelector } from '@store/index';

import { MailLabel } from '@core/types';
import { DrawerParamList } from '@navigation/types';

interface Props {
  navigation: DrawerNavigationProp<DrawerParamList, 'Home'>;
}

const Drawer = ({ navigation }: Props) => {
  const { labels } = useTypedSelector((state) => state.labels);

  const [selectedOption, setSelectedOption] = useState(labels?.[0].id);

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
      {labels?.map((label) => (
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
  SafeArea: styled.SafeAreaView`
    background-color: ${({ theme: { colors } }) => colors.WHITE};
  `,
  Title: styled.View`
    ${({ theme: { metrics, colors } }) => css`
      width: 100%;
      color: #e04444;
      padding: ${metrics.MEDIUM}px;
      margin-bottom: ${metrics.MEDIUM}px;
      border-bottom-width: 0.5px;
      border-color: ${colors.LIGHT};
    `}
  `,
};

export default Drawer;
