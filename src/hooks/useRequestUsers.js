import { useState, useEffect } from "react";

export const useRequestUsers = () => {
  const [users, setUsers] = useState(undefined);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    setFetching(true);
    async function getData() {
      const userData = await fetch("https://reqres.in/api/users");
      const data = await userData.json();
      setUsers(data);
      setFetching(false);
    }

    getData();
  }, []);

  return { fetching, users };
};
