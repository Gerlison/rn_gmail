import { createSlice } from '@reduxjs/toolkit';
import { MailLabel } from '@core/types';

export default createSlice({
  name: 'labels',
  initialState: [
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
  ] as MailLabel[] | [],
  reducers: {},
});
