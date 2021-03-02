import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

const Container = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  align-items: center;

  .task-content {
    flex-grow: 2;
  }
`;

const Button = styled.button`
  margin-left: 5px;
  display: inline-block;
  padding: 8px;
  color: red;
  border: none;
  background: transparent;
  outline: none;
`;

export default class Task extends Component {
  render() {
    const { task, index, onDelete, columnId } = this.props;
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="task-content">{task.content}</div>
            <div>
              <Button onClick={() => onDelete(columnId, task.id)}>
                <FaTrash />
              </Button>
            </div>
          </Container>
        )}
      </Draggable>
    );
  }
}
