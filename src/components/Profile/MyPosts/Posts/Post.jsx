import style from './Post.module.css'

const Post = (props) => {
  // if(props.name === ''){
  //   props.name = 'anonymus'
  // } 
  return(
    <div className={style.post}>
      <img src={props.userAva} alt='image for user' />
      <div className={style.block}>
        <div className={style.cont}>
          <div className={style.name}>{props.name}</div>
          <div className={style.msg}>{props.message}</div>
        </div>
        <div className={style.likes}>{props.likes}</div>
      </div>
      
      
  </div>
  )

}

export default Post