import React from 'react'
import styles  from  './Profile.module.css'

const Profile = ()  =>{
  return (
    <main className='profile'>
        <div>
        <img img='alt' src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1292351815.1710201600&semt=ais" alt="img" srcset="" />
        </div>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpktEUbSrXtXSos_wksTsAJa-pmmnjlI4SBqz7YEzxt9BvtxGdLWwO7lYGrW2orerZxhk&usqp=CAU" alt='img' />
        </div>
        <div>
        My POST
        <div className='posts'>
            new Post
        </div>
        <div  className={styles.item}>
            POST 1
        </div>
        <div  className={styles.item}>
            POST 2
        </div>
        </div>
   </main>
  )
}

export default Profile