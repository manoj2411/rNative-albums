import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: album.thumbnail_image }}
        />
      </View>
      <View style={styles.headerContentStyle}>
        <Text style={styles.headerText}>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image
        style={styles.imageStyle}
        source={{ uri: album.image }}
      />
    </CardSection>
    <CardSection>
      <Button pressHandler={() => Linking.openURL(album.url)}>
        Buy Now
      </Button>
    </CardSection>
  </Card>
);

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyConten: 'center',
    alignIterms: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
export default AlbumDetail;
