import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";

const Header = () => {
  const FadeInLeft = styled.div`
    animation: 1s ${keyframes`${fadeInLeft}`};
  `;

  return (
    <div className="navbar navbar-dark navbar-expand-lg bg-primary page__header">
      <FadeInLeft>
        <p className="navbar-brand title">Phonebook</p>
      </FadeInLeft>
    </div>
  );
};
export default Header;
