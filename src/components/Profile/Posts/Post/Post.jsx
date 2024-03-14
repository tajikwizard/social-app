import React from 'react';
import styles from './Post.module.css';

export default function Post({title}) {
  return (
    <div className={styles.post}>
      <img
        className={styles.avatar}
        src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
        alt="User Avatar"
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore esse temporibus optio laborum omnis architecto sunt unde ea accusantium. Quod sunt maiores et. Explicabo, blanditiis perferendis esse placeat quos fuga.</p>
      </div>
    </div>
  );
}
