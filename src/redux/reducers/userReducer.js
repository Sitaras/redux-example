import { ActionTypes } from "../constants/action-types";

const initialState = {
  users: [],
  loading: true,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case ActionTypes.UPDATE_USER:
      const updatedUsers = state.users.map((user) =>
        user.id === payload.id ? payload : user
      );

      return {
        ...state,
        users: updatedUsers,
        loading: false,
      };
    case ActionTypes.USERS_ERROR:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
