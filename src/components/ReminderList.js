import React from "react";
import { newItem } from "../constant/ReminderListConstant";
function ReminderList(props) {
  const imageSize = {
    width: "18rem",
  };
  const addNewItem = () => {
    props.addItem(newItem);
  };
  const emptyCard = () => {
    return (
      <>
        <div
          className="card col-md-4 m-3"
          style={imageSize}
          onClick={addNewItem}
        >
          <div className="card-body">
            <h5 class="card-title">Add new</h5>
            <i class="bi bi-clipboard2-plus bi-lg"></i>

            {/* <p className="card-text">{item.email}</p> */}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row p-5">
        {props.list.map((item, index) => {
          return (
            <div key={index} className="card col-md-4 m-3" style={imageSize}>
              <img
                src={item.image}
                className="card-img-top rounded img-fluid"
                alt="#"
              />
              <div className="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p className="card-text">{item.email}</p>
              </div>
            </div>
          );
        })}
        {emptyCard()}
      </div>
    </div>
  );
}
export default ReminderList;
