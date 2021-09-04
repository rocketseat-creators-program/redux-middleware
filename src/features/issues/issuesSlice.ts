import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const issuesAdapter = createEntityAdapter();

export const slice = createSlice({
  name: "issues",
  initialState: issuesAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("ADD_ENTITIES", (state, action: any) => {
      issuesAdapter.upsertMany(state, action.payload.entities.issues);
    });
  },
});

const reducer = slice.reducer;
export default reducer;

export const {
  selectIds: selectIssueIds,
  selectAll: selectAllIssues,
  selectById: selectIssueById,
  selectTotal: selectTotalIssues,
  selectEntities: selectIssueEntities,
} = issuesAdapter.getSelectors((state: any) => state.issues);
