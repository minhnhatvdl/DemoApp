import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import ListFavoriteRepo from '../components/ListFavoriteRepo';
import {getFavoriteRepo} from '../store/actions';

const FavoriteScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavoriteRepo());
  }, [dispatch]);
  return (
    <View style={styles.screen}>
      <ListFavoriteRepo />
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

export default FavoriteScreen;
