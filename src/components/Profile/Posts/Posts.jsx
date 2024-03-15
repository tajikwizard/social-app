import React, { useState } from "react";
import styles from "./Posts.module.css";
import Post from "./Post/Post";

function Posts({ postsData, addPost }) {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleAddPostClick = () => {
    addPost(title, body);
    setBody("");
    setTitle("");
  };
  return (
    <div className={styles.postsContainer}>
      <div className={styles.inputArea}>
        <input
          className={styles.input}
          type="text"
          placeholder="Title of Post"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          className={styles.textArea}
          value={body}
          placeholder="Describe yourself here..."
          onChange={handleBodyChange}
        ></textarea>
        <button
          onClick={() => handleAddPostClick()}
          className={styles.addButton}
        >
          Add Post
        </button>
      </div>
      {postsData
        .slice()
        .reverse()
        .map((post) => (
          <Post key={post.id} {...post} />
        ))}
    </div>
  );
}

export default Posts;
