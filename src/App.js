import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { ReminderListConstant } from "./constant/ReminderListConstant";
import ReminderList from "./components/ReminderList";
import { useState } from "react";

function App() {
  // const [ReminderListConstant, setReminderListConstant] =
  //   useState(ReminderListConstant);
  const [brandName, setBrandName] = useState("React-toDo");

  const handlerReminderListAddItem = (data) => {
    // just checking how state work's here
    setBrandName("React-toDo-Learning");
    console.log("event came here", data);
    //todo- need to know how we can update the ReminderListConstant with newData
    console.log("new data", ReminderListConstant);
  };
  return (
    <div className="App">
      <Header brandName={brandName}></Header>
      <ReminderList
        list={ReminderListConstant}
        addItem={handlerReminderListAddItem}
      ></ReminderList>
    </div>
  );
}

export default App;
