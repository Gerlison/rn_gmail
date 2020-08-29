import { createSlice } from '@reduxjs/toolkit';
import { User } from '@core/types';

interface UsersState {
  users: User[] | null;
}

export default createSlice({
  name: 'users',
  initialState: {
    users: [
      {
        id: '1',
        name: 'Francisco',
        address: 'francisco@email.com',
      },
    ],
  } as UsersState,
  reducers: {},
});
