import styles from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {

  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It is my first post', likesCount: 1},
    {id: 3, message: 'Fine', likesCount: 212},
    {id: 4, message: 'Yo', likesCount: 0},
    {id: 5, message: 'Yo', likesCount: 67},
  ];

  let postsElements = posts.map((post) =>
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