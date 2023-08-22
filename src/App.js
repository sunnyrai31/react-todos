import logo from "./logo.svg";
import { ReminderListConstant as ReminderListAlias } from "./constant/ReminderListConstant"; // Renamed import
import "./App.css";
import Header from "./components/Header";
import ReminderList from "./components/ReminderList";
import { useState } from "react";

function App() {
  const [reminderList, setReminderList] = useState(ReminderListAlias);
  const [brandName, setBrandName] = useState("Lets Remind");
  const [intialReminderList, updateIntialReminderList] =
    useState(ReminderListAlias);

  const handlerReminderListAddItem = (data) => {
    setBrandName("Reminding...");
    const newData = [...reminderList, data];
    setReminderList(newData);
    const newIntialRenderListData = [...intialReminderList, data];
    updateIntialReminderList(newIntialRenderListData);
  };

  //Todo - Need to revisit this
  const handlerReminderListDeleteItem = (index) => {
    const updatedReminderList = reminderList.filter((_, i) => i !== index);
    setReminderList(updatedReminderList);
    const updatedReminderIntialListList = intialReminderList.filter(
      (_, i) => i !== index
    );
    updateIntialReminderList(updatedReminderIntialListList);
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
      <Header brandName={brandName} searchItemCB={searchItemCBHandler}>
        <img src={logo} alt="" width="auto"></img>
      </Header>
      <ReminderList
        list={reminderList}
        addItem={handlerReminderListAddItem}
        deleteItemCB={handlerReminderListDeleteItem}
      ></ReminderList>
    </div>
  );
}

export default App;
