import React, {useState, useCallback} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import color from '../constants/color';
import {getListRepo, resetListRepo} from '../store/actions';

const SearchBar = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    if (username.trim()) {
      dispatch(getListRepo(username));
    } else {
      dispatch(resetListRepo());
    }
  }, [dispatch, username]);
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={username}
        onChangeText={value => setUsername(value)}
      />
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="ios-search" size={32} color={color.primaryColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    padding: 10,
    borderColor: color.primaryColor,
    borderWidth: 1,
  },
});
export default SearchBar;
