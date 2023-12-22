import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootAuthRed } from "./authRootReducer";


const persistConfig = {
  key: "root1",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootAuthRed);

const authStore = createStore(persistedReducer);
const persistor = persistStore(authStore);

export { authStore, persistor };