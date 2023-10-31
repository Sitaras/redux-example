import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
import CircularProgress from "@mui/material/CircularProgress";
//
import { updateUserStatus } from "../redux/actions/userActions";

import styles from "./Table.module.scss";

const UserComponent = () => {
  const { users: usersList, loading } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  const handleChangeStatus = (user) => async (event) => {
    const newUser = { ...user };
    newUser.active = !newUser.active;

    dispatch(updateUserStatus(newUser));
  };

  const renderList = usersList?.map((user) => {
    const {
      active,
      name: { firstName, lastName } = {},
      username,
      email,
      phone,
      id,
    } = user;
    return (
      <tr key={id}>
        <td>
          {
            <Switch
              checked={active}
              onChange={handleChangeStatus(user)}
              color="success"
            />
          }
        </td>
        <td>{`${firstName} ${lastName}`}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{username}</td>
      </tr>
    );
  });

  return (
    <>
      {!loading ? (
        <div className={styles.scrollContainer}>
          <table className={styles.hoverTable}>
            <thead>
              <tr>
                <th>Status</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>username</th>
              </tr>
            </thead>
            <tbody>{renderList}</tbody>
          </table>
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default UserComponent;
