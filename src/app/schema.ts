import { schema } from "normalizr";

export const user = new schema.Entity("users");
export const label = new schema.Entity("labels");
export const milestone = new schema.Entity("milestones", { creator: user });

export const issue = new schema.Entity("issues", {
  user,
  milestone,
  labels: label,
  assignee: user,
  assignees: [user],
});
