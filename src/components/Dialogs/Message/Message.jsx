import stylesDialogs from "./../Dialogs.module.css"

function Message(props) {
  return (
      <div className={stylesDialogs.message}>{props.message}</div>
  );
}

export default Message;