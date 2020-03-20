import AsyncStorage from '@react-native-community/async-storage'
import { applyMiddleware, combineReducers, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';
// saga 是在redux中做异步处理的 1 createSagaMiddleware会创建一个中间件 2 然后使用 3 再run 传入写好的saga函数

// 本地化数据的插件
import { persistReducer, persistStore } from 'redux-persist'; 
// 引入reducers
import dataStateReducer from './reducers/dataStateReducer'

// 自己写的saga函数 会监听 拦截 action 然后做一些事情 然后再放action过去
import rootSaga from './sagas/rootSaga'
// 1生成saga中间件
const sagaMiddleware = createSagaMiddleware();


// 合并reducers
export const reducer = combineReducers({
  // uiState: reducers.uiStateReducer,
  // settingsState: reducers.settingsStateReducer,
  dataState: persistReducer(
    {
      key: 'dataState',
      storage: AsyncStorage,
    },
    dataStateReducer,
  ),
  
});

// redux-persist会将redux的store中的数据缓存到浏览器的
// 需要persistReducer包装一下reducer 参数1 是配置
// persistStore 包装store
// PersistGate组件放在Provider的里面 传入persistStore 生成的 persistor

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['dataState'],
  },
  reducer,
);



export const ReduxStore = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),   // 使用saga中间件
);
export const persistor = persistStore(ReduxStore);
// 3运行saga
sagaMiddleware.run(rootSaga);

