import React from 'react';
import styled from 'styled-components/native';

const MailView = () => {
  return (
    <S.Container>
      <></>
    </S.Container>
  );
};

const S = {
  Container: styled.View`
    flex: 1;
    background-color: ${({ theme: { colors } }) => colors.BACKGROUND};
  `,
};

export default MailView;
