import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {

  componentWillMount() {
    axios.get('http://reduxblog.herokuapp.com/api/posts?key=123')
          .then((response) => {
            console.log(response);
          });
  }

  render() {
    return (
        <View style={{ alignItems: 'center' }}>
          <Text>Album list </Text>
        </View>
      );
  }
}

export default AlbumList;
