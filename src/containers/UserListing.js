import React from "react";
import UserComponent from "./UserComponent";
import useUsers from "../hooks/useUsers";

const UserListing = () => {
  useUsers();

  return <UserComponent />;
};

export default UserListing;
