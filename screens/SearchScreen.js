import React from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import ListRepo from '../components/ListRepo';

const SearchScreen = () => {
  return (
    <View style={styles.screen}>
      <SearchBar />
      <ListRepo />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    paddingTop: 50,
  },
});

export default SearchScreen;
