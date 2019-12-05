import { persistReducer, persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
//
import Auth from '../reducers/authReducer';
import loadingReducer from '../reducers/loadingReducer';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  Auth,
  loading: loadingReducer
});

const PersistReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [ReduxThunk, createLogger()];

export const store = createStore(
  PersistReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
