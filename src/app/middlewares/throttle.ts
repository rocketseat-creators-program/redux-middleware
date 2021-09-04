import { Middleware } from "@reduxjs/toolkit";
type Map = { [key: string]: boolean };

const throttled: Map = {};

export const throttle: Middleware =
  ({ getState, dispatch }) =>
  (next) =>
  (action: any) => {
    const time = action.meta && action.meta.throttle;

    if (!time) return next(action);

    if (throttled[action.type]) {
      return;
    }

    throttled[action.type] = true;

    setTimeout(() => {
      throttled[action.type] = false;
    }, time);

    next(action);
  };
