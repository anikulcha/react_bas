import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img 
                    src="https://img.freepik.com/free-photo/aerial-drone-panorama-view-of-chisinau-moldova-at-sunrise_1268-17504.jpg?w=1000" 
                    alt='alt' 
                />
            </div>
            <div className={style.descrBlock}>
                ava + descr
            </div>
            
        </div>
        
    )
}

export default ProfileInfo