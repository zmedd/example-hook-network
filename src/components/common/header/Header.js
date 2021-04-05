import React from "react";
import { Dropdown } from "../../dropdown/Dropdown";

export const Header = () => {
  const languages = ["ro", "en", "de", "cn"];
  const days = [1, 2, 3, 4, 5, 6];
  const months = ["Jan", "Feb", "Mar", "Apr"];
  const years = [2016, 2017, 2018, 2019, 2020, 2021];

  return (
    <header>
      <h1>header</h1>
      <div style={{ width: "800px", border: "1px solid red" }}>
        <Dropdown values={languages} />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "100px" }}>
          <Dropdown values={days} />
        </div>
        <div style={{ width: "100px" }}>
          <Dropdown values={months} />
        </div>
        <div style={{ width: "100px" }}>
          <Dropdown values={years} />
        </div>
      </div>
    </header>
  );
};
