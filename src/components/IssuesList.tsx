import React from "react";

export const IssuesList = ({ title = "" }) => {
  return (
    <li>
      <a
        href="@@"
        className="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200"
      >
        <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt className="sr-only">Issue </dt>
            <dd className="font-medium text-black">{title}</dd>
          </div>
        </dl>
      </a>
    </li>
  );
};
