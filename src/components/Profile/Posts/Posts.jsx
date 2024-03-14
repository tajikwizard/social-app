import React from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post";

function Posts() {
  return (
    <div className={styles.postsContainer}>
      <div className={styles.inputArea}>
        <textarea className={styles.textArea}></textarea>
        <button className={styles.addButton}>Add Post</button>
      </div>
      <Post title="Good boy" />
      <Post title="Fem" />
      <Post title="Shy " />
      <Post title="Emo " />
      <Post title="Boy" />
      <Post title="Toy" />
    </div>
  );
}

export default Posts;
