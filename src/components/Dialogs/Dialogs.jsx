import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
  return (
      <div className={styles.dialog}>
        <img
            className={styles.avatar}
            src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
            alt="avatar"/>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
      </div>
  );
}

function Message(props) {
  return (
      <div className={styles.message}>{props.message}</div>
  );
}

function Dialogs() {

  let dialogsData = [
    {id: 1, name: 'Valentina'},
    {id: 2, name: 'Dimych'},
    {id: 3, name: 'Olena'},
    {id: 4, name: 'Andrew'},
    {id: 5, name: 'Sveta'},
  ];

  let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Fine'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
  ];

  let dialogsElements = dialogsData.map((dialog) =>
      <DialogItem name={dialog.name} id={dialog.id}/>
  );

  let messagesElements = messages.map((message) =>
      <Message message={message.message}/>
  );

  return (
      <div className={styles.dialogs}>
        <div className={styles.dialogs_items}>
          {dialogsElements}
        </div>
        <div className={styles.messages}>
          {messagesElements}
        </div>
      </div>
  );
}

export default Dialogs;