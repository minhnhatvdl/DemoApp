import {combineReducers} from 'redux';
import {listRepoReducer} from './listRepoReducer';
import {favoriteRepoReducer} from './favoriteRepoReducer';
import {loadingReducer} from './loadingReducer';

export const reducers = combineReducers({
  listRepo: listRepoReducer,
  favoriteRepo: favoriteRepoReducer,
  loading: loadingReducer,
});
