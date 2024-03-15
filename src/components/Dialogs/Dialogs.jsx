import React from "react";
import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, id }) => {
  return (
    <NavLink to={"/dialogs/" + id}>
      <div className={styles.dialog}>{name}</div>
    </NavLink>
  );
};

const Message = ({ message }) => {
  return <div className={styles.message}>{message}</div>;
};

const Dialogs = ({ dialogData, messageData }) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogData.map((person) => (
          <DialogItem {...person} />
        ))}
      </div>

      <div className={styles.messages}>
        {messageData.map((message) => (
          <Message {...message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
