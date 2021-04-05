import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  z-index: 1;
`;

export const SelectedValue = styled.div`
  font-size: 16px;
  line-height: 24px;
  padding: 7px 15px;
`;

export const DropdownWrap = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border: 1px solid #b0b0b0;
  border-radius: 5px;
  background-color: #ffffff;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  padding: 7px 15px;
  font-size: 16px;
  line-height: 24px;
  &:hover {
    background-color: #fafafa;
  }
`;
