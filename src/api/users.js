import axios from "axios";

const getUsers = async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
};

const updateUserData = async (userData) => {
  const response = await axios.patch(
    "http://localhost:3000/users/" + userData.id,
    userData
  );
  return response.data;
};

export { getUsers, updateUserData };
