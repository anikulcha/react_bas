import style from './Post.module.css'

const Post = (props) => {
  return(
    <div className={style.post}>
      <img src={props.userAva} alt='image for user' />
      <div className={style.block}>
        <div className={style.cont}>
          <div className={style.msg}>{props.message}</div>
        </div>
        <div className={style.likes}>{props.likes}</div>
      </div>
  </div>
  )

}

export default Post