import React from 'react'

import style from './MyPosts.module.css'
import Post from './Posts/Post'
import { addPostActionCreation, onPostChangeActionCreation } from '../../../state/profileReducer'


const MyPosts = (props) => {
    
  let postsItem = 
    props.posts.map(
      p => 
        <Post message={p.message} 
              userAva= {props.profileImage} 
              likes={p.likeCount} 
              id={p.id} 
        />
    )
  const newAddedPost = React.createRef()

  const addPost = () => {
    props.dispatch(addPostActionCreation())
  }

  const onPostChange = () =>{ 
    let text = newAddedPost.current.value
    let action = onPostChangeActionCreation(text)
    props.dispatch(action)
  }

  return(
      <div className='MyPosts'>
        <div className={style.posts}>
          <div>
            <h3>Addition new post</h3>
            <div>
              <textarea ref={newAddedPost} 
                        value={props.newPost} 
                        onChange={onPostChange} />
            </div>
            <button onClick={addPost}>add post</button>
          </div>
          <h3>My posts</h3>
            { postsItem }
        </div>
      </div>
  )
}

export default MyPosts