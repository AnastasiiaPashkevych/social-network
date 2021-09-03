import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
      <div className={styles.wrapper}>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts}/>
      </div>
  );
}

export default Profile;