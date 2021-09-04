import React from "react";

export function UsersList({ avatar = "" }) {
  return (
    <img
      src={avatar}
      alt=""
      width="88"
      height="88"
      className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white"
      loading="lazy"
    />
  );
}
