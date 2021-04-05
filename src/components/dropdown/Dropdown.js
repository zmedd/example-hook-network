import React, { useState } from "react";
import {
  Container,
  SelectedValue,
  DropdownWrap,
  DropdownItem,
} from "./Dropdown.style";

export const Dropdown = ({ values }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(values[0]);

  const handleValueChange = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <Container>
      <SelectedValue onClick={() => setIsOpen(!isOpen)}>
        {selectedValue}
      </SelectedValue>
      {isOpen && (
        <DropdownWrap>
          {values.map((value) => (
            <DropdownItem onClick={() => handleValueChange(value)} key={value}>
              {value}
            </DropdownItem>
          ))}
        </DropdownWrap>
      )}
    </Container>
  );
};
