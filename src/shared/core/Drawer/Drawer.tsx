import React, { useCallback, useState, memo } from 'react';
import styled, { css } from 'styled-components/native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import DrawerOption from './DrawerOption';

import Text from '@core/Text';

import { useTypedSelector } from '@store/index';

import { MailLabel } from '@core/types';

type Props = DrawerContentComponentProps;

const Drawer: React.FC<Props> = ({ state, navigation, descriptors }) => {
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

  const getRouteLabel = useCallback(
    (route) => ({
      id: route.key,
      name: route.name,
      cosmetic: {
        backgroundColor: 'transparent',
        icon: descriptors[route.key].options.title!,
        textColor: '',
      },
      mailTotal: 0,
      mailUnread: 0,
    }),
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
      {state.routes.slice(1).map((route) => (
        <DrawerOption
          key={route.key}
          label={getRouteLabel(route)}
          focused={false}
          onPress={() => navigation.navigate(route.name, route.params)}
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

export default memo(Drawer);
