import React from 'react';
import styles from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = () => {
  return (
    <main>
      <div className={styles.header}>
        <img
          className={styles.profileBG}
          src="https://cdn.pixabay.com/photo/2015/12/15/09/04/banner-1093909_640.jpg"
          alt="Background"
        />
        <img
          className={styles.profilePic}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpktEUbSrXtXSos_wksTsAJa-pmmnjlI4SBqz7YEzxt9BvtxGdLWwO7lYGrW2orerZxhk&usqp=CAU"
          alt="Profile"
        />
      </div>
      <Posts />
    </main>
  );
}

export default Profile;
