import logo from "./logo.svg";
import { ReminderListConstant as ReminderListAlias } from "./constant/ReminderListConstant"; // Renamed import
import "./App.css";
import Header from "./components/Header";

import ReminderList from "./components/ReminderList";
import { useState } from "react";

function App() {
  const [reminderList, setReminderList] = useState(ReminderListAlias);
  const [brandName, setBrandName] = useState("React-toDo");
  const [intialReminderList, updateIntialReminderList] =
    useState(ReminderListAlias);

  const handlerReminderListAddItem = (data) => {
    setBrandName("React-toDo-Learning");
    const newData = [...reminderList, data];
    setReminderList(newData);
    const newIntialRenderListData = [...intialReminderList, data];
    updateIntialReminderList(newIntialRenderListData);
  };
  const searchItemCBHandler = (searchItem) => {
    if (!searchItem) {
      setReminderList(intialReminderList);
    } else {
      const filteredData = intialReminderList.filter((item) => {
        return (
          item.name
            .toLowerCase()
            .split(" ")
            .includes(searchItem.toLowerCase()) ||
          searchItem.toLowerCase() === item.name.toLowerCase() ||
          searchItem.toLowerCase() === item.email.toLowerCase()
        );
      });
      setReminderList(filteredData);
    }
  };

  return (
    <div className="App">
      <Header brandName={brandName} searchItemCB={searchItemCBHandler}></Header>
      <ReminderList
        list={reminderList}
        addItem={handlerReminderListAddItem}
      ></ReminderList>
    </div>
  );
}

export default App;
