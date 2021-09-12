import styles from './Users.module.css';

function Users(props) {

  if (props.users.length === 0) {
    props.setUsers([
          {
            id: 1,
            photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            followed: true,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
          },
          {
            id: 2,
            photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            followed: true,
            fullName: 'Alex',
            status: 'I am a singer',
            location: {city: 'Moskow', country: 'Russia'}
          },
          {
            id: 3,
            photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            followed: false,
            fullName: 'Alena',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
          },
          {
            id: 4,
            photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            followed: true,
            fullName: 'Katya',
            status: 'I am a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
          },
          {
            id: 5,
            photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            followed: true,
            fullName: 'Anna',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
          },
          {
            id: 6,
            photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            followed: false,
            fullName: 'Artsiom',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
          },
          {
            id: 7,
            photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            followed: true,
            fullName: 'Oleg',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
          },
          {
            id: 8,
            photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            followed: false,
            fullName: 'Elena',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
          },
          {
            id: 9,
            photoUrl: 'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
            followed: true,
            fullName: 'Olga',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
          },
        ],
    )
  }

  return (
      <div className={styles.users}>
        {
          props.users.map(u => <div className={styles.user} key={u.id}>
            <div className={styles.photoButton}>
              <div>
                <img src={u.photoUrl} alt="" className={styles.userPhoto}/>
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
                <div>{u.fullName}</div>
                <div className={styles.userStatus}>{u.status}</div>
              </div>
              <div>
                <div>{u.location.country}</div>
                <div className={styles.userCity}>{u.location.city}</div>
              </div>
            </div>
          </div>)
        }
      </div>
  );
}

export default Users;