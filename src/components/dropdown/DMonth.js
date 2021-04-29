import React, { useState } from "react";
import {
  Container,
  SelectedValue,
  DropdownWrap,
  DropdownItem,
} from "./Dropdown.style";

export const DMonth = ({ valuesArray }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(valuesArray[0]);

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
          <DropdownItem onClick={() => handleValueChange("Jan")}>
            Jan
          </DropdownItem>
          <DropdownItem onClick={() => handleValueChange("Feb")}>
            Feb
          </DropdownItem>
          <DropdownItem onClick={() => handleValueChange("Mar")}>
            Mar
          </DropdownItem>
          <DropdownItem onClick={() => handleValueChange("Apr")}>
            Ap
          </DropdownItem>
        </DropdownWrap>
      )}
    </Container>
  );
};
