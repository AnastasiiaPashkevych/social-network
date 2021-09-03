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

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Fine'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
  ];

  return (
      <div className={styles.dialogs}>
        <div className={styles.dialogs_items}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
          <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
          <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
          <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        </div>
        <div className={styles.messages}>
          <Message message={messagesData[0].message}/>
          <Message message={messagesData[1].message}/>
          <Message message={messagesData[2].message}/>
          <Message message={messagesData[3].message}/>
        </div>
      </div>
  );
}

export default Dialogs;