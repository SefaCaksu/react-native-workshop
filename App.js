

import React, { Fragment } from 'react';
import { Text, FlatList, SafeAreaView, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import Header from './component/header';

import DataSource from './data';

const App = () => {
  const numColumns = 3;
  const tileWidth = Dimensions.get('window').width / numColumns;
  const imageBaseUrl = "https://images.unsplash.com/photo-";
  const imageParameters = "?auto=format&fit=crop&w=375&q=80";
  const dataSource = DataSource;

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => { alert(item.category) }}>
        <ImageBackground
          source={{ uri: imageBaseUrl + item.imageId + imageParameters }}
          style={{
            width: tileWidth,
            height: tileWidth,
            justifyContent: 'center'
          }}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  return (
    <Fragment>
        <StatusBar backgroundColor='rgba(0, 0, 0, 0.80)'/>
      <SafeAreaView>
        <Header></Header>
        <FlatList
          data={dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.category}
          numColumns={numColumns}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15
  }
});

export default App;
