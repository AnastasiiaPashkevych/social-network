import styles from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
  return (
      <div className={styles.wrapper}>
        <div className={styles.create}>
          <textarea className={styles.textarea} name="" id="" cols="70" rows="5"></textarea>
          <button className={styles.button}>Add post</button>
        </div>
        <div className={styles.posts}>
          <Post message={'Hi, how are you?'} likesCount={'0'}/>
          <Post message={'It is my first post'} likesCount={'23'}/>
        </div>
      </div>
  );
}

export default MyPosts;