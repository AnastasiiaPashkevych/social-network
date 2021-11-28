import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
      <div className={styles.users}>
        {pages.map(page => {
          return <span className={props.currentPage === page && styles.selectedPage}
                       onClick={(e) => {
                         props.onPageChanged(page);
                       }}>{page}</span>
        })}
        {
          props.users.map(u => <div className={styles.user} key={u.id}>
            <div className={styles.photoButton}>
              <div>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={styles.userPhoto}/>
              </div>
              <div>
                {u.followed
                    ? <button className={`${styles.button} ${styles.buttonUnfollow}`} onClick={() => {
                      props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button className={styles.button} onClick={() => {
                      props.follow(u.id)
                    }}>Follow</button>}
              </div>
            </div>

            <div className={styles.userInfo}>
              <div>
                <div>{u.name}</div>
                <div className={styles.userStatus}>{u.status}</div>
              </div>
              <div>
                <div>{"u.location.country"}</div>
                <div className={styles.userCity}>{"u.location.city"}</div>
              </div>
            </div>
          </div>)
        }
      </div>
  )
}

export default Users;