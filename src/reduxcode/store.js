import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {authentificationReduce} from './global/reducerRedux';
import { profilReduce } from './profil/reducerRedux';

const rootReducer = combineReducers({
    authentification: authentificationReduce,
    profil: profilReduce
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
