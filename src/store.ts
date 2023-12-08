import {
  combineReducers,
  configureStore,
  Middleware,
  PayloadAction,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";

import authLocalReducer from "./Domain/authLocal/authLocal.reducer";
import authSessionReducer from "./Domain/authSession/authSession.reducer";

const authKey = "root";

const authLocalPersistConfig = {
  key: authKey,
  storage,
};
const authSessionPersistConfig = {
  key: authKey,
  storage: storageSession,
};

const reducers = combineReducers({
  authLocal: persistReducer(authLocalPersistConfig, authLocalReducer),
  authSession: persistReducer(authSessionPersistConfig, authSessionReducer),
});

const logger: Middleware = (api) => (next) => (action) => {
  const beforeState = api.getState();
  const response = next(action);
  const afterState = api.getState();
  // cek
  const withZero = (value: number) => (value < 10 ? `0${value}` : `${value}`);
  const dt = new Date();
  const t = `${withZero(dt.getHours())}:${withZero(dt.getMinutes())}:${withZero(
    dt.getSeconds()
  )}.${dt.getMilliseconds()}`;

  // eslint-disable-next-line no-console
  console.group("action", (action as PayloadAction).type, "@", t);

  // eslint-disable-next-line no-console
  console.log(" action", action);
  // eslint-disable-next-line no-console
  console.log(" prev state", "\n", beforeState);
  // eslint-disable-next-line no-console
  console.log(" next state", "\n", afterState);
  // eslint-disable-next-line no-console
  console.groupEnd();

  return response;
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
