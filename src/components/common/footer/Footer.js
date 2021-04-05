import React, { useEffect } from "react";
import { useRequestUsers } from "../../../hooks/useRequestUsers";

const Footer = () => {
  const { fetching, users } = useRequestUsers();

  useEffect(() => {
    !fetching && console.log(users);
  }, [fetching, users]);

  return (
    <header>
      <h1>footer</h1>
    </header>
  );
};

export default Footer;
