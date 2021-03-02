import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  height: 30vh;
`;

function Stats({ initStatData }) {
  return (
    <Container>
      <Doughnut data={initStatData} options={{ maintainAspectRatio: false }} />
    </Container>
  );
}

export default Stats;
