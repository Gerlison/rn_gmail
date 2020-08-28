import { createSlice } from '@reduxjs/toolkit';
import { User } from '@core/types';

export default createSlice({
  name: 'users',
  initialState: [
    {
      id: '1',
      name: 'Francisco',
      address: 'francisco@email.com',
    },
  ] as User[] | [],
  reducers: {},
});
