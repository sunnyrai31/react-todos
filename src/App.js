import logo from "./logo.svg";
import { ReminderListConstant as ReminderListAlias } from "./constant/ReminderListConstant"; // Renamed import
import "./App.css";
import Header from "./components/Header";
import ReminderList from "./components/ReminderList";
import { useState } from "react";

function App() {
  //state management
  const [reminderList, setReminderList] = useState(ReminderListAlias);
  const [brandName, setBrandName] = useState("Lets Remind");
  const [intialReminderList, updateIntialReminderList] =
    useState(ReminderListAlias);

  /**
   * this mehtod is responsibel to add the new item, from the UI
   * @param {*} data
   */
  const handlerReminderListAddItem = (data) => {
    setBrandName("Reminding...");
    const newData = [...reminderList, data];
    setReminderList(newData);
    const newIntialRenderListData = [...intialReminderList, data];
    updateIntialReminderList(newIntialRenderListData);
  };

  /**
   *
   * @param {number} index
   * //Todo - Need to revisit this
   * this method is will give the index of the item will user want to delete it.
   */
  const handlerReminderListDeleteItem = (index) => {
    const updatedReminderList = reminderList.filter((_, i) => i !== index);
    setReminderList(updatedReminderList);
    const updatedReminderIntialListList = intialReminderList.filter(
      (_, i) => i !== index
    );
    updateIntialReminderList(updatedReminderIntialListList);
  };
  /**
   * this is a callback function handler
   * purpose of this method is - find out the search item from the list and show in the UI as result.
   * @param {*} searchItem
   *
   */
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
  /**
   * this method is yet to be implemented
   * this implementation should clear the search box on clear button click
   */
  const clearSearchCBHandler = () => {};

  return (
    <div className="App">
      <Header
        brandName={brandName}
        searchItemCB={searchItemCBHandler}
        clearSearch={clearSearchCBHandler}
      >
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
