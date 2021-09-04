import { Middleware } from "@reduxjs/toolkit";
import { normalize } from "normalizr";

const startNetwork = (payload = "global") => ({
  type: "START_NETWORK",
  payload,
});

const endNetwork = (payload = "global") => ({
  type: "END_NETWORK",
  payload,
});

export const api: Middleware = (store) => (next) => (action) => {
  if (action.type !== "API") {
    return next(action);
  }

  const { url, success, schema, label } = action.payload;

  store.dispatch(startNetwork(label));

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (schema) {
        data = normalize(data, schema);
      }
      store.dispatch(success(data));
      store.dispatch(endNetwork(label));
    })
    .catch((error) => {
      console.error(error);
      store.dispatch(endNetwork(label));
    });
};
