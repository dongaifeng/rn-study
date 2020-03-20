import { createSelector } from 'reselect';

// reselect 可以看做vuex中的getter

// 这两个函数可看做是state 的选择器，createSelector的第二个参数是函数 可以看做是对选择器的加工

// const getVisibilityFilter = (state) => state.visibilityFilter
// const getTodos = (state) => state.todos

//下面的函数是经过包装的
// export const getVisibleTodos = createSelector(
//   [ getVisibilityFilter, getTodos ],

//   (visibilityFilter, todos) => {  这两个参数就是第一个参数里面各函数的返回值
   
//   }
// )


export const selectDataState = (reduxState: any) => reduxState.dataState

export const selectName = createSelector(
  selectDataState,
 ( dataState: any) => dataState.user.username
) 


export const selectUser = createSelector(
  selectDataState,
 ( dataState: any) => dataState.user
) 

export const selectToken = createSelector(
  selectDataState,
  dataState => dataState.token,
);

