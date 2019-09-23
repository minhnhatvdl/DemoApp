import {combineReducers} from 'redux';
import {listRepoReducer} from './listRepoReducer';
import {favoriteRepoReducer} from './favoriteRepoReducer';
import {loadingReducer} from './loadingReducer';
import {usernameReducer} from './usernameReducer';

export const reducers = combineReducers({
  listRepo: listRepoReducer,
  favoriteRepo: favoriteRepoReducer,
  loading: loadingReducer,
  username: usernameReducer,
});
