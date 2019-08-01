import { applyMiddleware, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import reducers from './reducers'

const persistConfig = {
  key: 'root',
  storage
}

const persitedReducer = persistReducer(persistConfig, reducers)


export default () => {
  let store = createStore(persitedReducer, applyMiddleware(thunk))
  let persistor = persistStore(store)

  return { store, persistor }
}
