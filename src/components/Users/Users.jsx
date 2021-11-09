import React from "react";
import styles from './Users.module.css';
import * as axios from "axios";
import userPhoto from './../../assets/images/user.png'

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items)
        });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
        <div className={styles.users}>
          {pages.map(page => {
            return <span className={this.props.currentPage === page && styles.selectedPage}
                         onClick={(e) => {
                           this.onPageChanged(page);
                         }}>{page}</span>
          })}
          {
            this.props.users.map(u => <div className={styles.user} key={u.id}>
              <div className={styles.photoButton}>
                <div>
                  <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" className={styles.userPhoto}/>
                </div>
                <div>
                  {u.followed
                      ? <button className={`${styles.button} ${styles.buttonUnfollow}`} onClick={() => {
                        this.props.unfollow(u.id)
                      }}>Unfollow</button>
                      : <button className={styles.button} onClick={() => {
                        this.props.follow(u.id)
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
}

export default Users;