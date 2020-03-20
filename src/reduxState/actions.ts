import {
  ActionValue,
  createAction,
  createActions,
  NoArgAction,
  NumberAction,
} from 'redux-type-actions';
import { Location, User } from '../types/types';

const actions = createActions({
  // UI
  showCameraOptions: NoArgAction,
  change: NoArgAction,
  setName:  createAction(),

  setAge: NumberAction,

  // Data
  setUser: createAction<User>(),
  setLocation: createAction<Location>(),
  logout: NoArgAction,
});

export type Action = ActionValue<typeof actions>;

export default actions;
