import { Mail } from '@modules/inbox/types';

export const MAIL_LIST_RESPONSE: Mail[] = [
  {
    id: '1',
    date: new Date(),
    labelIds: ['1'],
    payload: {
      from: {
        id: '1',
        name: 'Ubsoft Account Support',
        address: 'support@ubsoft.com',
      },
      to: {
        id: '2',
        name: 'Francisco Gerlison',
        address: 'franciscojerlison1@gmail.com',
      },
      subject: 'Alteração recente na usa conta de e-mail',
      body:
        'Estamos entrando em contato para alertar que houve uma alteração de senha na sua conta de e-mail recentemente',
    },
  },
  {
    id: '2',
    date: new Date(),
    labelIds: ['1'],
    payload: {
      from: {
        id: '1',
        name: 'Ubsoft Account Support',
        address: 'support@ubsoft.com',
      },
      to: {
        id: '2',
        name: 'Francisco Gerlison',
        address: 'franciscojerlison1@gmail.com',
      },
      subject: 'Alteração recente na usa conta de e-mail',
      body:
        'Estamos entrando em contato para alertar que houve uma alteração de senha na sua conta de e-mail recentemente',
    },
  },
];
