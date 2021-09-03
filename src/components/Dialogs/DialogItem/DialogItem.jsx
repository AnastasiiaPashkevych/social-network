import stylesDialogs from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

function DialogItem(props) {
  return (
      <div className={stylesDialogs.dialog}>
        <img
            className={stylesDialogs.avatar}
            src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
            alt="avatar"/>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
      </div>
  );
}

export default DialogItem;