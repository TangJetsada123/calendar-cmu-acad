import React from "react";
import {
  Container,
  NavBarSt,
  ButtonSave,
  BackButton
} from "./SearchBar.styled";

const SearchBar: React.FC = () => {
  return (
    <NavBarSt>
      <Container>
        <BackButton> Back</BackButton>
        <ButtonSave>saveChange</ButtonSave>
      </Container>
    </NavBarSt>
  );
};

export default SearchBar;
