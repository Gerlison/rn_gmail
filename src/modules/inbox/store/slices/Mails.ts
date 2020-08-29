import { createSlice } from '@reduxjs/toolkit';
import { Mail } from '@core/types';

interface MailsState {
  mails: Mail[] | null;
}

export default createSlice({
  name: 'mails',
  initialState: {
    mails: [
      {
        id: '1',
        date: new Date('2020/08/26'),
        labelIds: ['1'],
        from: {
          id: '2',
          name: 'Mikael',
          address: 'mikael@email.com',
        },
        to: {
          id: '1',
          name: 'Francisco',
          address: 'francisco@email.com',
        },
        subject: 'Este é um mock',
        body: 'Olá, você recebeu um email',
      },
      {
        id: '2',
        date: new Date('2020/08/26'),
        labelIds: ['1', '4'],
        from: {
          id: '2',
          name: 'Google',
          address: 'google@email.com',
        },
        to: {
          id: '1',
          name: 'Francisco',
          address: 'francisco@email.com',
        },
        subject: 'Your Google Account Recovery Required',
        body: 'Your Google Account Recovery Required',
      },
      {
        id: '3',
        date: new Date('2020/08/26'),
        labelIds: ['1', '4'],
        from: {
          id: '2',
          name: 'Google',
          address: 'google@email.com',
        },
        to: {
          id: '1',
          name: 'Francisco',
          address: 'francisco@email.com',
        },
        subject: 'Your Google Account Recovery Required',
        body: 'Your Google Account Recovery Required',
      },
      {
        id: '4',
        date: new Date('2020/08/26'),
        labelIds: ['1', '4'],
        from: {
          id: '2',
          name: 'Google',
          address: 'google@email.com',
        },
        to: {
          id: '1',
          name: 'Francisco',
          address: 'francisco@email.com',
        },
        subject: 'Your Google Account Recovery Required',
        body: 'Your Google Account Recovery Required',
      },
      {
        id: '5',
        date: new Date('2020/08/26'),
        labelIds: ['1', '4'],
        from: {
          id: '2',
          name: 'Google',
          address: 'google@email.com',
        },
        to: {
          id: '1',
          name: 'Francisco',
          address: 'francisco@email.com',
        },
        subject: 'Your Google Account Recovery Required',
        body: 'Your Google Account Recovery Required',
      },
    ],
  } as MailsState,
  reducers: {},
});
