import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setUsers } from "../redux/actions/userActions";
import { ActionTypes } from "../redux/constants/action-types";

import { getUsers } from "../api/users";

const useUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        dispatch(setUsers(await getUsers()));
      } catch (err) {
        dispatch({
          type: ActionTypes.USERS_ERROR,
          payload: err,
        });
      }
    };
    dispatch && fetchUsers();
  }, [dispatch]);
};

export default useUsers;
