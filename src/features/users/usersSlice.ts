import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter();

export const slice = createSlice({
  name: "users",
  reducers: {},
  initialState: usersAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase("ADD_ENTITIES", (state, action: any) => {
        usersAdapter.upsertMany(state, action.payload.entities.users);
      })
      .addCase("ADD_USER", (state, action: any) => {
        usersAdapter.addOne(state, action.payload);
      });
  },
});

const reducer = slice.reducer;
export default reducer;

export const {
  selectIds: selectUserIds,
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectTotal: selectTotalUsers,
  selectEntities: selectUserEntities,
} = usersAdapter.getSelectors((state: any) => state.users);
