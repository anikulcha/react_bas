import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return(
        <div className={style.content}>
          <div>
            <img src="https://img.freepik.com/free-photo/aerial-drone-panorama-view-of-chisinau-moldova-at-sunrise_1268-17504.jpg?w=1000" alt='alt' />
          </div>
        </div>
    )
}

export default Profile