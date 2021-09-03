import styles from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts(props) {

  let postsElements = props.posts.map((post) =>
      <Post message={post.message} likesCount={post.likesCount}/>
  );

  return (
      <div className={styles.wrapper}>
        <h2>My posts</h2>
        <div className={styles.create}>
          <textarea className={styles.textarea} name="" id="" cols="70" rows="5"></textarea>
          <button className={styles.button}>Add post</button>
        </div>
        <div className={styles.posts}>
          {postsElements}
        </div>
      </div>
  );
}

export default MyPosts;