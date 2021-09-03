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
  return (
      <div className={styles.dialogs}>
        <div className={styles.dialogs_items}>
          <DialogItem name='Valentina' id='1'/>
          <DialogItem name='Dimych' id='2'/>
          <DialogItem name='Olena' id='3'/>
          <DialogItem name='Andrew' id='4'/>
          <DialogItem name='Sveta' id='5'/>
          <DialogItem name='Dmitry' id='6'/>
        </div>
        <div className={styles.messages}>
          <Message message='Hi'/>
          <Message message='How are you?'/>
          <Message message='Fine'/>
        </div>
      </div>
  );
}

export default Dialogs;