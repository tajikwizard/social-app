import React from 'react'
import styles from  './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className={`${styles.item} ${styles.active}`}>Profile</div>
        <div className={styles.item}>Messages</div>
        <div className={styles.item}>Music</div>
        <div className={styles.item}>Settings</div>
   </nav>
  )
}

export default Navbar