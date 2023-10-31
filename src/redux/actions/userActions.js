import { ActionTypes } from "../constants/action-types";
import { updateUserData, getUsers } from "../../api/users";

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export const updateUser = (updatedUser) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: updatedUser,
  };
};

export const updateUserStatus = (updatedUser) => {
  return async (dispatch) => {
    try {
      const _updatedUser = await updateUserData(updatedUser);
      dispatch(updateUser(_updatedUser));
      dispatch(setUsers(await getUsers()));
    } catch (err) {
      dispatch({
        type: ActionTypes.USERS_ERROR,
        payload: err,
      });
    }
  };
};
