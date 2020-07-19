import React from 'react';
import styled from 'styled-components/native';

import MailListItem from './MailListItem';

const MailList = () => {
  return Array.from({ length: 10 }).map(() => <MailListItem />);
};

export default MailList;
