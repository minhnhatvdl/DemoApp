import {combineReducers} from 'redux';
import {listRepoReducer} from './listRepoReducer';
import {favoriteRepoReducer} from './favoriteRepoReducer';

export const reducers = combineReducers({
  listRepo: listRepoReducer,
  favoriteRepo: favoriteRepoReducer,
});
