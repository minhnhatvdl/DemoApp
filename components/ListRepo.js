import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import Repo from './Repo';

const ListRepo = () => {
  const listRepo = useSelector(state => state.listRepo);
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={listRepo}
      renderItem={({item}) => <Repo {...item} />}
    />
  );
};

export default ListRepo;
