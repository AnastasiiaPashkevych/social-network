import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import styles from './Dialogs.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

function Dialogs(props) {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) =>
      <DialogItem name={dialog.name} id={dialog.id}/>
  );
  let messagesElements = state.messages.map((message) =>
      <Message message={message.message}/>
  );
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
      <div className={styles.dialogs}>
        <div className={styles.dialogs_items}>
          {dialogsElements}
        </div>
        <div className={styles.messages}>
          <div className={styles.messages_items}>{messagesElements}</div>
          <div className={styles.sendMessage}>
            <div className={styles.textareaWrapper}>
              <textarea className={styles.textarea}
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder={'Enter your message'}>
            </textarea>
            </div>
            <div>
              <button className={'button'}
                      onClick={onSendMessageClick}>Send
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dialogs;