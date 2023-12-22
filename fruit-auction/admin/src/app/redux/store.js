// import { createStore } from "redux";
// import userRed from "./rootReducer";


// // create a store here
// const store = createStore(userRed);


// export default store;


import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { rootRed } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootRed);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };


