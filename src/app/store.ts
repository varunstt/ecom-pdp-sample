import { createStore, applyMiddleware, compose, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// import storageSession from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { logger } from 'redux-logger';
// import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk, logger];
const persistConfig = {
    key: 'root',
    storage: storage,
    /* Storage options
        storage - for localstorage
        storageSession - for session storage
    */
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let store: Store;
if (process.env.NODE_ENV === 'development') {
    // compose(composeWithDevTools(applyMiddleware(...middleware)))
    store = createStore(
        persistedReducer,
        compose(applyMiddleware(...middleware))
    );
} else {
    store = createStore(
        persistedReducer,
        compose(applyMiddleware(...middleware))
    );
}
const persistor = persistStore(store);
export { store, persistor };
