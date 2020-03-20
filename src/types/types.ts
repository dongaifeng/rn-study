import {Action} from 'reduxState/actions';

export {Action};

// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZXhwIjoxNTgyNTUzNzM1MzgzLCJpYXQiOjE1ODE5NDg5MzV9.f6_IeYhiat9EdpKpwqagHwx8k183M5mA6r6jg3eD-sQ",
//   "id": 2,
//   "username": "string",
//   "email": "user@example.com",

// TODO remove password
//   "pwd": "51381ae6f43951836d64a1c734c26bc723d56bf74b855651bb3a4dad3760e4ef",
//   "updatedAt": "2020-02-17T14:15:35.432Z",
//   "createdAt": "2020-02-17T14:15:35.336Z"
// }
export interface DataTimeStamp {
  updatedAt: string;
  createdAt: string;
}

interface WithTimeStamp {
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface User extends WithTimeStamp {
  id: number;
  avatar?: number;
  username: string;
  email: string;
  token: string;
}

export interface Location {
  lat: number;
  lon: number;
}

//  | 表示或  & 表示且
export type ScreensParamList = MainStackParamList &
TabParamList & AuthStackParamList;

export interface ReduxState {
  uiState: UIState;
  dataState: DataState;
  settingsState: SettingsState;
}

interface WithTimeStamp {
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface Feed extends WithTimeStamp {
  id: string;
  images?: number[];
  desc?: string;
  feedLikes?: FeedLike[];
  user: User;
}