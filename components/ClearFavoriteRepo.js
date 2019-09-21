import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Button} from 'react-native';
import color from '../constants/color';
import {clearAllFavoriteRepo} from '../store/actions';

const ClearFavoriteRepo = () => {
  const dispatch = useDispatch();
  const handleClearAllFavoriteRepo = useCallback(() => {
    dispatch(clearAllFavoriteRepo());
  }, [dispatch]);
  return (
    <Button
      title="Clear all favorites"
      color={color.primaryColor}
      onPress={handleClearAllFavoriteRepo}
    />
  );
};

export default ClearFavoriteRepo;
