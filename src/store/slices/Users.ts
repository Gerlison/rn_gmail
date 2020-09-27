import { createSlice } from '@reduxjs/toolkit';
import { User } from '@core/types';

interface UsersState {
  loggedUser: User | null;
  users: User[] | null;
}

export default createSlice({
  name: 'users',
  initialState: {
    loggedUser: {
      id: '1',
      name: 'Francisco',
      address: 'francisco@email.com',
    },
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
