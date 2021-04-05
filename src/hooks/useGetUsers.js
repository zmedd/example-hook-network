import { useState, useEffect } from "react";

export const useGetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => setUsers(json.data));
  }, []);

  return users;
};
