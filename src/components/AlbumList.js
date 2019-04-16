import React from 'react';
import axios from 'axios';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
          .then((response) => {
            this.setState({ albums: response.data });
          });
  }

  renderAlbumDetails() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    return (
        <View>
          {this.renderAlbumDetails()}
        </View>
      );
  }
}


export default AlbumList;
