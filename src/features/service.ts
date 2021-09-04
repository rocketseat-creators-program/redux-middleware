import { issue } from "../app/schema";

export const fetchGithubUsers = (username: string) => ({
  type: "API",
  meta: { throttle: 2000 },
  payload: {
    label: "users",
    url: `https://api.github.com/users/${username}`,
    success: (payload: any) => ({
      type: "ADD_USER",
      payload,
    }),
  },
});

export const fetchGithubIssues = (username: string, repo: string) => ({
  type: "API",
  meta: { throttle: 2000 },
  payload: {
    schema: [issue],
    label: "issues",
    url: `https://api.github.com/repos/${username}/${repo}/issues`,
    success: (payload: any) => ({
      type: "ADD_ENTITIES",
      payload,
    }),
  },
});
