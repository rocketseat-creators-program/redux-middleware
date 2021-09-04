import { Middleware } from "@reduxjs/toolkit";
import { initialize, event as trackEvent } from "react-ga";

initialize("UA-000000-01", {
  debug: true,
  titleCase: false,
});

export const analytics: Middleware = (store) => (next) => (action: any) => {
  if (!action.meta || !action.meta.analytics) {
    return next(action);
  }

  const { category } = action.meta.analytics;

  trackEvent({
    category,
    action: action.type,
  });

  store.dispatch({
    type: "GA-EVENT",
    payload: { category, action: action.type },
  });

  return next(action);
};
