import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import SearchBar from '../components/SearchBar';
import ListRepo from '../components/ListRepo';
import Loading from '../components/Loading';

const SearchScreen = () => {
  const loading = useSelector(state => state.loading);
  return (
    <View style={styles.screen}>
      <SearchBar />
      <ListRepo />
      {loading && <Loading />}
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
