import React from "react";
import Form from "../components/Form";
import Column from "../components/Column";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import Stats from "../components/Stats";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

class Home extends React.Component {
  render() {
    const { state, onDragEnd, onDelete, initStatData } = this.props;
    return (
      <>
        <Form onSubmit={this.props.onSubmit} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Container className="container">
            {state.columnOrder.map((columnId) => {
              const column = state.columns[columnId];
              const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
              return (
                <Column
                  key={column.id}
                  column={column}
                  columnId={columnId}
                  tasks={tasks}
                  onDelete={onDelete}
                />
              );
            })}
          </Container>
        </DragDropContext>
        <Stats initStatData={initStatData} />
      </>
    );
  }
}

export default Home;
