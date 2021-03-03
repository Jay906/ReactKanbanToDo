import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import initialState from "./components/initialState";
import Navbar from "./components/Navbar";
import Compatibility from "./pages/Compatibility";
import FirstVisit from "./components/FirstVisit";

function App() {
  const [state, setState] = useState(initialState);
  const [firstVisit, setFirstVisit] = useState(true);
  const onFirstVisit = () => {
    setFirstVisit(false);
    localStorage.setItem("firstVisit", JSON.stringify(false));
  };

  useEffect(() => {
    const visited = localStorage.getItem("firstVisit");
    if (visited === null) {
      return setFirstVisit(true);
    }
    setFirstVisit(false);
    localStorage.setItem("firstVisit", JSON.stringify(false));
  }, []);

  const initStatData = {
    labels: ["Undone", "On Progress", "Done"],
    datasets: [
      {
        data: [
          state.columns.undone.taskIds.length,
          state.columns.onProgress.taskIds.length,
          state.columns.done.taskIds.length,
        ],
        backgroundColor: [
          "rgba(209, 20, 6, 0.7)",
          "rgba(2, 120, 204, 0.7)",
          "rgba(7, 94, 84, 0.7)",
        ],
        borderWidth: 1,
        borderColor: [
          "rgba(209, 20, 6, 0.7)",
          "rgba(2, 120, 204, 0.7)",
          "rgba(7, 94, 84, 0.7)",
        ],
        hoverBackgroundColor: [
          "rgb(209, 20, 6)",
          "rgb(2, 120, 204)",
          "rgb(7, 94, 84)",
        ],
      },
    ],
  };
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    if (destination.droppableId !== source.droppableId) {
      const initCol = state.columns[source.droppableId];
      const endCol = state.columns[destination.droppableId];

      const initTaskIds = [...initCol.taskIds];
      const endTaskIds = [...endCol.taskIds];
      initTaskIds.splice(source.index, 1);
      endTaskIds.splice(destination.index, 0, draggableId);

      const newInitCol = { ...initCol, taskIds: initTaskIds };
      const newEndCol = { ...endCol, taskIds: endTaskIds };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newInitCol.id]: newInitCol,
          [newEndCol.id]: newEndCol,
        },
      };
      localStorage.setItem("initState", JSON.stringify(newState));
      return setState(newState);
    }

    const col = state.columns[source.droppableId];
    const newTaskIds = [...col.taskIds];
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = { ...col, taskIds: newTaskIds };
    const newState = {
      ...state,
      columns: { ...state.columns, [newColumn.id]: newColumn },
    };
    localStorage.setItem("initState", JSON.stringify(newState));
    setState(newState);
  };

  const onSubmit = (newTask) => {
    const newState = { ...state };
    newState.tasks[newTask.id] = newTask;
    newState.columns.undone.taskIds.push(newTask.id);
    setState(newState);
    localStorage.setItem("initState", JSON.stringify(newState));
  };

  const onDelete = (columnId, id) => {
    const newState = { ...state };
    const column = newState.columns[columnId];
    column.taskIds.splice(column.taskIds.indexOf(id), 1);
    delete newState.tasks[id];
    console.log(column, newState.tasks);
    setState(newState);
    localStorage.setItem("initState", JSON.stringify(newState));
  };
  const clientWidth = document.body.clientWidth;
  if (clientWidth <= 900) {
    return <Compatibility />;
  }
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {firstVisit && <FirstVisit onClick={onFirstVisit} />}
          <Home
            state={state}
            onDragEnd={onDragEnd}
            onSubmit={onSubmit}
            onDelete={onDelete}
            initStatData={initStatData}
          />
        </Route>
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
