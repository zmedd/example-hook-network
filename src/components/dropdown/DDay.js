import React, { useState } from "react";
import {
  Container,
  SelectedValue,
  DropdownWrap,
  DropdownItem,
} from "./Dropdown.style";

export const DDay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(1);

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
          <DropdownItem onClick={() => handleValueChange(1)}>1</DropdownItem>
          <DropdownItem onClick={() => handleValueChange(2)}>2</DropdownItem>
          <DropdownItem onClick={() => handleValueChange(3)}>3</DropdownItem>
          <DropdownItem onClick={() => handleValueChange(4)}>4</DropdownItem>
          <DropdownItem onClick={() => handleValueChange(5)}>5</DropdownItem>
          <DropdownItem onClick={() => handleValueChange(6)}>6</DropdownItem>
        </DropdownWrap>
      )}
    </Container>
  );
};
