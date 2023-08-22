import logo from "./logo.svg";
import { ReminderListConstant as ReminderListAlias } from "./constant/ReminderListConstant"; // Renamed import
import "./App.css";
import Header from "./components/Header";

import ReminderList from "./components/ReminderList";
import { useState } from "react";

function App() {
  const [reminderList, setReminderList] = useState(ReminderListAlias); // Updated state variable name
  const [brandName, setBrandName] = useState("React-toDo");

  const handlerReminderListAddItem = (data) => {
    setBrandName("React-toDo-Learning");
    const newData = [...reminderList, data];
    setReminderList(newData);
  };

  return (
    <div className="App">
      <Header brandName={brandName}></Header>
      <ReminderList
        list={reminderList}
        addItem={handlerReminderListAddItem}
      ></ReminderList>
    </div>
  );
}

export default App;
