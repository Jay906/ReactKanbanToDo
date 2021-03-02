import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./Task";

const Container = styled.div`
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  min-height: 200px;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TasksList = styled.div`
  padding: 8px;
  min-height: 80%;
`;

export default class Column extends Component {
  render() {
    const { column, tasks, onDelete } = this.props;
    return (
      <Container>
        <Title>{column.title}</Title>
        <Droppable droppableId={column.id}>
          {(provided) => (
            <TasksList ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, index) => (
                <Task
                  key={task.id}
                  task={task}
                  index={index}
                  onDelete={onDelete}
                  columnId={column.id}
                />
              ))}
              {provided.placeholder}
            </TasksList>
          )}
        </Droppable>
      </Container>
    );
  }
}
