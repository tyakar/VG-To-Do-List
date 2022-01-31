import React, { useState, useEffect } from "react";
import AddItem from "./AddItem";
import data from "./data";
import TodoFooter from "./TodoFooter";
import { Button } from "primereact/button";
import FilterToDoList from "./FilterToDoList";
import { ToggleButton } from "primereact/togglebutton";
export default function ToDoList() {
  const [toDoList, setToDoList] = useState(data);
  const [filter, setFilter] = useState("all");

  useEffect(() => {}, []);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  // Delete a todo item
  const delTodo = (id) => {
    setToDoList(toDoList.filter((todo) => todo.id !== id));
  };

  const changeStatus = (key) => {
    // let aa = toDoList.filter((todo) => todo.id === key)
    // console.log(aa);

    setToDoList(
      toDoList.map((todo) =>
        todo.id === key
          ? { ...todo, status: todo.status === "open" ? "closed" : "open" }
          : todo
      )
    );
  };

  // Add a new todo item
  const addTodo = (title) => {
    let newTodo = {
      id: toDoList.length + 1,
      title, // new in ES6: same as title: title
      status: "open",
    };

    // [...] = spread operator (copy items)
    // Used because we can't (and shouldn't) change state values directly
    setToDoList([...toDoList, newTodo]);
  };

  return (
    <>
      <div>
        <AddItem addToDo={addTodo} />
        <FilterToDoList setFilter={setFilter} />
        {toDoList ? (
          toDoList.map((value, key) => {
            if (filter !== "all" && value.status !== filter) return;

            return (
              <div key={key}>
                <div
                  className={
                    "todoItemDivColor " +
                    (value.status === "open"
                      ? "todoItemNewDivColor"
                      : "todoItemDoneDivColor")
                  }
                  key={key}
                  onClick={(e) => {
                    changeStatus(value.id);
                  }}
                >
                  <span>
                    {" "}
                    <strong> {value.title} </strong>
                    {value.status === "open" ? "Açık" : " Tamamlanmış"}
                  </span>
                  <ToggleButton
                    style={{
                      backgroundColor:
                        value.status === "open" ? "#479f76" : "#e35d6a",
                      borderColor: value.status === "open" ? "#4dd4ac" : "#fff",
                      color: "#fff",
                    }}
                    checked={value.status === "open"}
                    onChange={(e) => changeStatus(value.id)}
                    onLabel="Tamamla"
                    offLabel="Tekrar Aç"
                    onIcon="pi pi-check"
                    offIcon="pi pi-refresh"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div> Listelenecek İş Bulunamadı </div>
        )}
      </div>
      <TodoFooter
        totalTasks={toDoList.length}
        doneTasks={toDoList.filter((todo) => todo.status === "closed").length}
        filter={filter}
      />
    </>
  );
}
