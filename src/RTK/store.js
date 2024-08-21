import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthApi, BlogApi } from "./Reducers/index"
import AuthReducer from "./Slices/AuthSlices";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["Auth"]
}
const persistedReducer = persistReducer(persistConfig, AuthReducer);
export const store = configureStore({
    reducer: {
        [AuthApi.reducerPath]: AuthApi.reducer,
        [BlogApi.reducerPath]: BlogApi.reducer,
        auth: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
          }).concat(AuthApi.middleware, BlogApi.middleware),
    
})
setupListeners(store.dispatch)
// export default store;
export const persistor = persistStore(store);
