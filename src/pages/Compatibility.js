import React from "react";
import styled from "styled-components";
import bg from "../background.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bg}) center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 4px 4px 40px #000, inset -4px -4px 40px #000;
  color: #f4f4f4;
  text-align: center;
`;

function Compatibility() {
  return (
    <Container>
      <div className="container">
        Current application is only available in large screens due to complex
        user interface
      </div>
    </Container>
  );
}

export default Compatibility;
