export const requestMiddleware: any =
  (extraArgument: any) => (store: any) => (next: any) => (action: any) => {
    const nextAction =
      typeof action === "function"
        ? action(store.dispatch, store.getState, extraArgument)
        : next(action);

    return nextAction;
  };
