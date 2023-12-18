import React from "react";
import { newItem } from "../constant/ReminderListConstant";
import "../styles/ReminderList.css";

function ReminderList(props) {
  const imageSize = {
    width: "18rem",
  };
  const addNewItem = () => {
    props.addItem(newItem);
  };

  /**
   * this method is responsible to adding empty card, from which user can add the item
   * @returns a jsx.
   */
  const emptyCard = () => {
    return (
      <>
        <div className="card col-md-4 m-3 firework-card" style={imageSize}>
          <div
            className="card-body text-center padding-top-50"
            onClick={addNewItem}
          >
            <i className="bi bi-plus-circle fs-1 text-primary"></i>
            <p className="card-text">Add New Item</p>
          </div>
        </div>
      </>
    );
  };
  /**
   * responsibility - deleting the card
   * @param {*} index
   */
  const deleteCard = (index) => {
    props.deleteItemCB(index);
  };

  return (
    <div className="container-fluid">
      <div className="row padding-6">
        {props.list.map((item, index) => {
          return (
            <div
              key={index}
              className="card col-md-4 m-3 firework-card"
              style={imageSize}
            >
              <img src={item.image} className="rounded-circle" alt="#" />
              <button
                className="delete-button "
                title="Delete this card"
                type="button"
                onClick={() => deleteCard(index)}
              >
                <i className="bi bi-trash3"></i>
              </button>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
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
