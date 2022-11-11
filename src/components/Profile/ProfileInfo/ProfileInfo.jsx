import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={style.background}>
                <img 
                    src={props.profileBackgroundPhoto} 
                    alt='alt' 
                />
            </div>
            <div className={style.descrBlock}>
                <div>
                    <img src={props.profileImage} alt="profile photo" />
                </div>
            </div>
        </div>
        
    )
}

export default ProfileInfo