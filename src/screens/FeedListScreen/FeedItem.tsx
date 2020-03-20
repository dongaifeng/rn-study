import React from 'react';
import { Feed, ReduxState, User } from '../../types/types';
import dayjs from 'dayjs';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import ZoomImage from 'components/ZoomImage';
// import { getImageUrl, getUserAvatar } from 'utils/constants';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
// import { selectDataState } from '../../reduxState/selectors';
import { post } from '../../utils/request';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface OwnProps {
  item: Feed;
}
export interface MappedStateProps {
  user: User;
}
export interface MappedDispatchProps {}
export type Props = MappedStateProps & MappedDispatchProps & OwnProps;

function FeedItem(props) {
  // const { images, createdAt, desc, user: author } = props.item;
  // const user = props.user;
  // const fromNow = dayjs(createdAt).fromNow();

  // const [feedLikes, setFeedLikes] = React.useState(item.feedLikes?.map(({ userId }) => userId) || []);
  // const likedByMe = feedLikes.includes(user.id);
 

  return (
    <View style={styles.container}>
      <Image style={styles.authorAvatar} source={require('../../../assets/launch_screen.jpg')} />
        <View>
          <Text style={styles.authorName}>dongaifneg</Text>
          <Text style={styles.desc}>我是一个帅哥 啊啊啊啊</Text>
          <View style={styles.imagesContainer}>
            {
              [1,2,3].map(index => (<Image key={index} style={styles.image} source={require('../../../assets/launch_screen.jpg')} />))
            }
          </View>

          <View style={styles.metaTextContainer}>
            <Text style={styles.metaText}>2000年1月1天</Text>
            <TouchableOpacity style={styles.likeButton} onPress={() => {alert()}}>
              <Icon
                style={[styles.likeIcon, styles.activeLikeIcon]}
                name={'heart'}
              />
              <Text style={styles.metaText}>4</Text>
            </TouchableOpacity>
          </View>

        </View>
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    margin: 15,
  },
  author: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  authorAvatar: {
    width: 45,
    height: 45,
    marginRight: 16,
  },
  authorName: {
    fontSize: 16,
    marginBottom: 10,
    color: '#0645AD',
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  desc: {
    fontSize: 16,
    marginBottom: 8,
  },
  metaTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metaText: {
    fontSize: 13,
    color: 'grey',
    marginRight: 10,
  },
  link: {
    color: '#0645AD',
  },
  likeButton: {
    flexDirection: 'row',
  },
  likeIcon: {
    fontSize: 15,
    color: 'grey',
    marginRight: 10,
  },
  activeLikeIcon: {
    color: 'red',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(FeedItem);
