import React, { memo, useMemo } from 'react';
import styled, { css } from 'styled-components/native';

import Flex from '@core/Flex';
import Text from '@core/Text';
import Icon from '@core/Icon';
import Pressable from '@core/Pressable';

import AuthorBadge from '@modules/inbox/components/AuthorBadge';

import moment from 'moment';

interface Props {
  from: string;
  to: string;
  date: Date;
}

const Author: React.FC<Props> = ({ from, to, date }) => {
  const timeCount = useMemo(() => {
    const dateDiff = moment(date)
      .startOf('day')
      .diff(moment().startOf('day'), 'days');

    if (dateDiff === 0) {
      return moment(date).format('h:mm A');
    }

    return moment(date).format('DD MMM');
  }, []);

  return (
    <S.Container>
      <AuthorBadge char={from.charAt(0)} />
      <Flex width="100%">
        <S.AuthorName>
          <Flex>
            <Text type="title" numberOfLines={1}>
              {from}
            </Text>
          </Flex>

          <Text color="DARK" size="SMALL">
            {' '}
            {timeCount}
          </Text>
        </S.AuthorName>

        <S.Touchable onPress={() => {}}>
          <Flex background="TRANSPARENT">
            <Text color="DARK" numberOfLines={1}>
              to {to}
            </Text>
          </Flex>
          <Icon name="chevron-down" size="SMALL" />
        </S.Touchable>
      </Flex>
    </S.Container>
  );
};

const S = {
  Container: styled.View`
    flex-direction: row;
    ${({ theme: { metrics } }) => css`
      margin: ${metrics.LARGEST}px 0px;
    `}
  `,
  AuthorName: styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
  `,
  Touchable: styled(Pressable)`
    flex-direction: row;
    align-items: center;
  `,
};

export default memo(Author);
