localStorage.getItem("initState") ||
  localStorage.setItem(
    "initState",
    JSON.stringify({
      tasks: {},
      columns: {
        undone: {
          id: "undone",
          title: "To Do",
          taskIds: [],
        },
        onProgress: {
          id: "onProgress",
          title: "In progress",
          taskIds: [],
        },
        done: {
          id: "done",
          title: "Done",
          taskIds: [],
        },
      },
      columnOrder: ["undone", "onProgress", "done"],
    })
  );

const initialState = JSON.parse(localStorage.getItem("initState"));
console.log(initialState);
export default initialState;
