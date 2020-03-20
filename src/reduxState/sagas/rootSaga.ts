import { fork } from 'redux-saga/effects';
import * as helloSaga from './hello'

const combinedSagas = [
  // 合并所有的saga
  helloSaga
];

// fork 创建一个新的进程或者线程
function* rootSaga() {
  for (const sagas of combinedSagas) {
    for (const saga of Object.values(sagas)) {
      yield fork(saga);
    }
  }
}
// 遍历 合并的saga数组
// 每个元素是一个对象 包含多个saga
// 然后 fork 每个saga

// call：函数调用
// select：获取Store中的数据
// put：向Store发送action
// take：监听未来的action
// takeEvery 是每次发起 监听的action的时候都会执行
// takeLatest 只监听最后那个action 调用时
// fork：函数是用来调用其他函数的，但是fork函数是非阻塞函数 也就是说，程序执行完 yield fork(fn， args) 这一行代码后，会立即接着执行下一行代码语句。

export default rootSaga;