import styles from './Dialogs.module.css';

function Dialogs() {
  return (
      <div className={styles.dialogs}>
        <div className={styles.dialogs_items}>
          <div className={styles.dialog + ' ' + styles.active}>
            <img
                className={styles.avatar}
                src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
                alt="avatar"/>
            <span>Dimych</span>
          </div>
          <div className={styles.dialog}>
            <img
                className={styles.avatar}
                src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
                alt="avatar"/>
            <span>Andrew</span>
          </div>
          <div className={styles.dialog}>
            <img
                className={styles.avatar}
                src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
                alt="avatar"/>
            <span>Valery</span>
          </div>
          <div className={styles.dialog}>
            <img
                className={styles.avatar}
                src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
                alt="avatar"/>
            <span>Victor</span>
          </div>
        </div>
        <div className={styles.messages}>
          <div className={styles.message}>Hi</div>
          <div className={styles.message}>How are you?</div>
          <div className={styles.message}>Fine</div>
        </div>
      </div>
  );
}

export default Dialogs;