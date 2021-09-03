import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

function MyPosts(props) {

  let postsElements = props.posts.map((post) =>
      <Post message={post.message} likesCount={post.likesCount}/>
  );

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
      <div className={styles.wrapper}>
        <h2>My posts</h2>
        <div className={styles.create}>
          <textarea className={styles.textarea} ref={newPostElement} cols="70" rows="3"></textarea>
          <button className={styles.button} onClick={addPost}>Add post
          </button>
        </div>
        <div className={styles.posts}>
          {postsElements}
        </div>
      </div>
  );
}

export default MyPosts;