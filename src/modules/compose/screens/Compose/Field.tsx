import React, { memo, useCallback } from 'react';
import { LayoutChangeEvent } from 'react-native';
import styled, { css } from 'styled-components/native';

type SelectorPositionObject = {
  to: number;
  cc: number;
  bcc: number;
};

interface Props {
  id?: string;
  selectorsPositionRef?: React.MutableRefObject<SelectorPositionObject>;
  children: React.ReactElement[] | React.ReactNode;
}

const Field: React.FC<Props> = ({ id, children, selectorsPositionRef }) => {
  const handleSelectorPosition = useCallback(
    ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
      if (selectorsPositionRef && id) {
        selectorsPositionRef.current[id as keyof SelectorPositionObject] =
          layout.y + layout.height;
      }
    },
    [selectorsPositionRef, id],
  );

  return (
    <S.Container onLayout={handleSelectorPosition as any}>
      {children}
    </S.Container>
  );
};

const S = {
  Container: styled.View<{ isFocused?: boolean }>`
    flex-direction: row;
    border-bottom-width: 1px;

    ${({ theme: { metrics, colors } }) => css`
      padding: ${metrics.SMALL}px;
      border-color: ${colors.LIGHTER};
    `}
  `,
};

export default memo(Field);
