import React from "react";
import styles from "./Post.module.css";

export default function Post({ title, body, likesCount }) {
  return (
    <div className={styles.post}>
      <img
        className={styles.avatar}
        src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
        alt="User Avatar"
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{body}</p>
        <span className={styles.likesCount}> ❤ {likesCount}</span>
      </div>
    </div>
  );
}
