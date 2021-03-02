import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  color: #f4f4f4;
  text-align: center;
  line-height: 140%;

  button {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2rem;
    border: none;
    outline: none;
    background: transparent;
    color: #f4f4f4;
  }
`;

function FirstVisit({ onClick }) {
  return (
    <Container>
      <div className="container">
        It is a simple to do list with KanBan to improve your efficiency. You
        can add new tasks and then drag them into corresponding column whether
        it is on process or already done. <br /> Kanban is a workflow management
        method for defining, managing and improving services that deliver
        knowledge work. It aims to help you visualize your work, maximize
        efficiency, and improve continuously. From Japanese, kanban is
        translated as billboard or signboard.
        <button type="button" onClick={onClick}>
          X
        </button>
      </div>
    </Container>
  );
}

export default FirstVisit;
