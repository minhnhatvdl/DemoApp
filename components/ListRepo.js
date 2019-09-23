import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import Repo from './Repo';
import color from '../constants/color';

const ListRepo = () => {
  const listRepo = useSelector(state => state.listRepo);
  const loading = useSelector(state => state.loading);
  const username = useSelector(state => state.username);
  return (
    <View>
      {!loading && !!username && (
        <Text style={styles.result}>
          {listRepo.length}{' '}
          {listRepo.length > 0 ? 'repositories' : 'repository'} found
        </Text>
      )}
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={listRepo}
        renderItem={({item}) => <Repo {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    textAlign: 'center',
    marginBottom: 5,
    color: color.primaryColor,
  },
});
export default ListRepo;
