import styles from './ProfileInfo.module.css';

function ProfileInfo() {
  return (
      <div>
        <div>
          <img
              className={styles.hero}
              src="https://wallpaperboat.com/wp-content/uploads/2020/10/26/58142/futuristic-14.jpg"
              alt="background"/>
        </div>
        <div className={styles.description}>
          <img
              className={styles.avatar}
              src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"
              alt="avatar"/>
        </div>
      </div>
  );
}

export default ProfileInfo;