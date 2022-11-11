import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return(
        <div className={style.content}>
          <ProfileInfo profileImage={props.profileImage} 
                       profileBackgroundPhoto={props.profileBackgroundPhoto} />
          <MyPosts posts={props.posts} 
                   profileImage={props.profileImage} 
                   dispatch={props.dispatch}
                   newPost={props.newPost} />
        </div>
    )
}

export default Profile