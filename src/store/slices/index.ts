import Theme from './Theme';
import Users from './Users';
import Labels from './Labels';

export default {
  theme: Theme.reducer,
  users: Users.reducer,
  labels: Labels.reducer,
};
