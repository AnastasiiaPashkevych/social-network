import styles from './Post.module.css';

function Post(props) {
  return (
      <div className={styles.item}>
        <img src="https://i.pinimg.com/736x/05/0e/42/050e4246c674d7e9a31e44174dca0fcf.jpg"
             className={styles.avatar}
             alt="post image"/>
        {props.message}
        <div>
          {props.likesCount} <img src="like-not.svg" className={styles.like} alt="like"/>
        </div>
      </div>
  );
}

export default Post;