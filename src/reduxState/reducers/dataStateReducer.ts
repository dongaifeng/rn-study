import produce from 'immer';

// immer插件 是对初始state的代理 他会复制一个state 叫做draft（草稿）
// 你可以直接修改draft  然后他会根据draft 生成 nextState(修改后的state)
// 例子
// let nextState = produce(currentState, draft => {
//   draft.p.x.push(1);
// })

// 引入类型
import { Action, User, Location } from '../../types/types';

export interface DataState {
  user?: User;
  location?: Location;
  token: string;
}


export const initialState: Readonly<DataState> = {
  "token": '',
  // user: {
  //   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZXhwIjoxNTg0ODY2MTgwODIzLCJpYXQiOjE1ODQyNjEzODB9.G_EYf06_RfJ6kGJiCVzL-_wR7-Y67cW1Xa7lghJbHiY",
  //   "id": 9,
  //   "username": "aaa",
  //   "email": "aaa@qq.com",
  //   "updatedAt": "2020-03-15T08:36:21.022Z",
  //   "createdAt": "2020-03-15T08:36:20.779Z"
  // }
};

export default (originalState = initialState, action: Action) =>
  produce(originalState, state => {
    switch (action.type) {
      case 'change':
        state.user.username = '董爱锋'
      case 'setName':
        state.user.username = action.payload
      case 'setUser':
        state.user = action.payload;
        state.token = state.user?.token
    }
  });

  // 例子：
  // const reducer = (state, action) => produce(state, draft => {
  //   switch (action.type) {
  //     case 'ADD_AGE':
  //       draft.members[0].age++;
  //   }
  // })

  // const reducer = produce((draft, action) => {
  //   switch (action.type) {
  //     case 'ADD_AGE':
  //       draft.members[0].age++;
  //   }
  // })

