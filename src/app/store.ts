import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import issueReducer from "../features/issues/issuesSlice";
import userReducer from "../features/users/usersSlice";

import { analytics, api, logger, throttle } from "./middlewares";

const customMiddlewares = [logger, throttle, analytics, api];

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    issues: issueReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["API"],
      },
    }),
    ...customMiddlewares,
  ],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
