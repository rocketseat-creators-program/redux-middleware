import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "./app/hooks";
import { selectAllIssues } from "./features/issues/issuesSlice";
import { selectAllUsers } from "./features/users/usersSlice";
import { fetchGithubIssues, fetchGithubUsers } from "./features/service";
import { UsersList } from "./components/UsersList";
import { IssuesList } from "./components/IssuesList";

function App() {
  const [username, setuserName] = useState("");
  const [repository, setrepository] = useState("");
  const users = useAppSelector(selectAllUsers);
  const issues = useAppSelector(selectAllIssues);

  const dispatch = useAppDispatch();

  const handlerSearchUser = (name: string) => {
    dispatch(fetchGithubUsers(name));
  };

  const handlerSearchIssues = (name: string, repo: string) => {
    dispatch(fetchGithubIssues(name, repo));
  };

  return (
    <div className="App">
      <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
        <header className="flex items-center justify-between">
          <h2 className="text-lg leading-6 font-medium text-black">Issues</h2>
          <button className="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
            <svg
              className="group-hover:text-light-blue-600 text-light-blue-500 mr-2"
              width={12}
              height={20}
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
              />
            </svg>
            New
          </button>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("????");
            repository === ""
              ? handlerSearchUser(username)
              : handlerSearchIssues(username, repository);
          }}
          className="relative"
        >
          <div className="flex">
            <input
              className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
              type="text"
              aria-label="username"
              placeholder="username"
              value={username}
              onChange={(e) => setuserName(e.target.value)}
            />

            <input
              className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
              type="text"
              aria-label="repository"
              placeholder="repository"
              value={repository}
              onChange={(e) => setrepository(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="col-start-2 row-start-1 row-end-3">
          <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
            {users.map((user: any) => (
              <UsersList avatar={user.avatar_url} />
            ))}
          </dd>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          {issues.map((issue: any) => (
            <IssuesList title={issue.title} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
