import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';

import { RouteProp, useRoute, useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectUser } from '../../reduxState/selectors';


import { ScreensParamList } from '../../types/types';
// import { Report } from 'types/types';

import { get } from '../../utils/request';
import qs from 'qs';

import FeedItem from './FeedItem';

const limit = 10;

// 类型声明
type FeedListScreenRouteProp = RouteProp<ScreensParamList, 'FeedListScreen'>;
interface Props {}
function FeedListScreen({}: Props) {

  // 使用reselect 获取state中的user
  const user = useSelector(selectUser);
  const [listData, setListData] = useState([ {
    "id": 0,
    "images": [ 0 ],
    "desc": "string",
    "userId": 0,
    "feedLikes": [ {  "userId": "string" } ]
  }]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState<string | null>(null);

  const isEndReached = React.useRef(false);
  const isFetching = React.useRef(false);

  const isFocused = useIsFocused();  // 获取组件的焦点状态
  const route = useRoute(); // 获取路由对象

  const showMyself = route.params?.showMyself ?? false; // ?? 相当于 &&

  useEffect(() => {
    if(isFocused) {
      getListData(true);
    }
  }, [isFocused]); // 第二个参数 当数组中元素改变才执行effect

  async function getListData(isRefresh ?: boolean) {
    if (isFetching.current) {
      return;
    }
    if (!isRefresh && isEndReached.current) {
      return;
    }

    // isFetching.current = true;
    // setLoading(isRefresh ? 'refresh' : 'more');

    // const data = await get(`/feed${qs.stringify({
    //   offset: isRefresh ? 0 : offset,
    //   limit,
    //   userId: 9,
    // })}`)

    // console.log(data, '<====data')

    // setLoading(null);

    // setListData(data.rows);


  }


  // refreshing  在等待加载新数据时将此属性设为 true，列表就会显示出一个正在加载的符号。
  // onRefresh 添加 下拉刷新 控件
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listData}
        refreshing={ loading === 'refresh' }
        onRefresh={() => getListData(true)}
        renderItem={({ item }) => <FeedItem item={item} />}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
});
export default FeedListScreen;
